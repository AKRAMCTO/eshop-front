import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Formik } from 'formik';
import { object, string, number, mixed, notRequired, when } from 'yup';
import { Link } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner';

import Layout from "../components/Layout";
import { AuthProvider } from "../contexts/AuthContext";
import AuthLayout from "../components/AuthLayout";
import ErrorSnackbar from "../components/ErrorSnackbar";
import Breadcrumb from "../components/Breadcrumb";

const SUPPORTED_FORMATS = ['application/pdf'];

export default function Register() {
    const { registerMutation, errorAuthContext, emptyErrorAuthContext } = useContext(AuthProvider);
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const closeError = () => {
        setErrorOpen(false);
    };

    useEffect(() => {
        if(errorOpen){
            let timer = setTimeout(() => {
                setErrorOpen(false)
                setErrorMessage('')
                emptyErrorAuthContext()
            }, 4000)
            return () => clearTimeout(timer)  
        }
    }, [errorOpen])

    useEffect(() => {
        if(errorAuthContext && errorAuthContext['register']){
            setErrorOpen(true)
        }
    }, [errorAuthContext])

    const ValidationSchemaForm = object({
        fname: string().min(1, 'Trop court!').max(191, 'Trop long!').required('Ce champ est obligatoire'),
        lname: string().min(1, 'Trop court!').max(191, 'Trop long!').required('Ce champ est obligatoire'),
        email: string().email('Email invalide').required('Ce champ est obligatoire'),
        type: mixed().oneOf(['individual', 'professional', 'seller']).defined().required('Ce champ est obligatoire'),
        mobile: number().required('Ce champ est obligatoire'),
        password: string().required('Ce champ est obligatoire').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        rc: string().when("type", {
            is: (type) => (type === 'professional' || type === 'seller'),
            then: string().required("Ce champ est obligatoire"),
        }),
        ice: string().when("type", {
            is: (type) => (type === 'professional' || type === 'seller'),
            then: string().required("Ce champ est obligatoire"),
        }),
        rc_file: mixed().when("type", {
            is: 'seller',
            then: mixed().required("Ce champ est obligatoire")
                        .test('Fichier taille',
                            'upload file', (value) => !value || (value && value.size <= 1024 * 1024))
                        .test('format',
                            'upload file', (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
        }),
        ice_file: mixed().when("type", {
            is: 'seller',
            then: mixed().required("Ce champ est obligatoire")
                        .test('Fichier taille',
                            'upload file', (value) => !value || (value && value.size <= 1024 * 1024))
                        .test('format',
                            'upload file', (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
        }),
        cin_file: mixed().when("type", {
            is: 'seller',
            then: mixed().required("Ce champ est obligatoire")
                        .test('Fichier taille',
                            'upload file', (value) => !value || (value && value.size <= 1024 * 1024))
                        .test('format',
                            'upload file', (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
        }),
    });

    const genInitialValues = () => ({ 
        fname: '',
        lname: '',
        type: 'individual',
        email: '',
        mobile: '',
        password: '',
        rc: '',
        ice: '',
        rc_file: '',
        ice_file: '',
        cin_file: ''
    });

    return (
        <Layout>
            <Helmet>
                <title>{`Register | Ecowatt`}</title>
            </Helmet>
            <AuthLayout>
                <Breadcrumb title={`S'inscrire`} />
                
                <section className="log-in-section section-b-space">
                    <div className="container-fluid-lg w-100">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                                <div className="image-contain">
                                    <img src={require('./../assets/images/sign-up.png')} className="img-fluid" alt="" />
                                </div>
                            </div>

                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                                <div className="log-in-box">
                                    <div className="log-in-title">
                                        <h3>Bienvenue chez Ecowatt</h3>
                                        <h4>Créer un nouveau compte</h4>
                                    </div>

                                    {errorOpen && (
                                        <ErrorSnackbar message={errorMessage} closeFunction={closeError} />
                                    )}

                                    <div className="input-box">
                                        <Formik
                                            initialValues={genInitialValues()}
                                            validationSchema={ValidationSchemaForm}
                                            onSubmit={async (values) => {
                                                setErrorOpen(false);
                                                try {
                                                    await registerMutation(values);
                                                } catch (error) {
                                                    setErrorOpen(true);
                                                    setErrorMessage('Error register');
                                                }
                                            }}
                                        >
                                            {({
                                                values,
                                                errors,
                                                touched,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                                isSubmitting,
                                            }) => (
                                                <form onSubmit={handleSubmit}>
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <input type="radio" id="individual" name="type" checked={values.type === 'individual'} onChange={handleChange} onBlur={handleBlur} value={`individual`} />
                                                                &nbsp;
                                                                <label htmlFor="individual">Individual</label>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <input type="radio" id="professional" name="type" checked={values.type === 'professional'} onChange={handleChange} onBlur={handleBlur} value={`professional`} />
                                                                &nbsp;
                                                                <label htmlFor="professional">Professional</label>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <input type="radio" id="seller" name="type" checked={values.type === 'seller'} onChange={handleChange} onBlur={handleBlur} value={`seller`} />
                                                                &nbsp;
                                                                <label htmlFor="seller">Vendeur</label>
                                                            </div>
                                                        </div>
                                                        <span className='error-form'>{errors.type && touched.type && errors.type}</span>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-floating theme-form-floating">
                                                            <input type="text" className="form-control" id="fname" name="fname" onChange={handleChange} onBlur={handleBlur} value={values.fname} />
                                                            <label htmlFor="fname">Nom</label>
                                                        </div>
                                                        <span className='error-form'>{errors.fname && touched.fname && errors.fname}</span>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-floating theme-form-floating">
                                                            <input type="text" className="form-control" id="lname" name="lname" onChange={handleChange} onBlur={handleBlur} value={values.lname} />
                                                            <label htmlFor="lname">Prenom</label>
                                                        </div>
                                                        <span className='error-form'>{errors.lname && touched.lname && errors.lname}</span>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-floating theme-form-floating">
                                                            <input type="email" className="form-control" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                                            <label htmlFor="email">Email Address</label>
                                                        </div>
                                                        <span className='error-form'>{errors.email && touched.email && errors.email}</span>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-floating theme-form-floating">
                                                            <input type="text" className="form-control" id="mobile" name="mobile" onChange={handleChange} onBlur={handleBlur} value={values.mobile} />
                                                            <label htmlFor="mobile">Téléphone</label>
                                                        </div>
                                                        <span className='error-form'>{errors.mobile && touched.mobile && errors.mobile}</span>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-floating theme-form-floating">
                                                            <input type="password" className="form-control" id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                                            <label htmlFor="password">Mot de passe</label>
                                                        </div>
                                                        <span className='error-form'>{errors.password && touched.password && errors.password}</span>
                                                    </div>
                                                    
                                                    {(values.type === 'professional' || values.type === 'seller') && 
                                                        <>
                                                            <div className="col-12">
                                                                <div className="form-floating theme-form-floating">
                                                                    <input type="text" className="form-control" id="rc" name="rc" onChange={handleChange} onBlur={handleBlur} value={values.rc} />
                                                                    <label htmlFor="rc">RC</label>
                                                                </div>
                                                                <span className='error-form'>{errors.rc && touched.rc && errors.rc}</span>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-floating theme-form-floating">
                                                                    <input type="text" className="form-control" id="ice" name="ice" onChange={handleChange} onBlur={handleBlur} value={values.ice} />
                                                                    <label htmlFor="ice">ICE</label>
                                                                </div>
                                                                <span className='error-form'>{errors.ice && touched.ice && errors.ice}</span>
                                                            </div>
                                                        </>
                                                    }
                                                    
                                                    {(values.type === 'seller') && 
                                                        <>
                                                            <div className="col-12">
                                                                <div className="form-floating theme-form-floating">
                                                                    <input accept="application/pdf" type="file" className="form-control" id="rc_file" name="rc_file" onChange={handleChange} onBlur={handleBlur} value={values.rc_file} />
                                                                    <label htmlFor="rc_file">RC file</label>
                                                                </div>
                                                                <span className='error-form'>{errors.rc_file && touched.rc_file && errors.rc_file}</span>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-floating theme-form-floating">
                                                                    <input accept="application/pdf" type="file" className="form-control" id="ice_file" name="ice_file" onChange={handleChange} onBlur={handleBlur} value={values.ice_file} />
                                                                    <label htmlFor="ice_file">ICE file</label>
                                                                </div>
                                                                <span className='error-form'>{errors.ice_file && touched.ice_file && errors.ice_file}</span>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-floating theme-form-floating">
                                                                    <input accept="application/pdf" type="file" className="form-control" id="cin_file" name="cin_file" onChange={handleChange} onBlur={handleBlur} value={values.cin_file} />
                                                                    <label htmlFor="cin_file">CIN file</label>
                                                                </div>
                                                                <span className='error-form'>{errors.cin_file && touched.cin_file && errors.cin_file}</span>
                                                            </div>
                                                        </>
                                                    }

                                                    <div className="col-12">
                                                        <button disabled={isSubmitting} className="btn btn-animation w-100" type="submit">
                                                            {isSubmitting ?
                                                                <TailSpin
                                                                    type="ThreeDots"
                                                                    color="#fff"
                                                                    height={20}
                                                                    width={20}
                                                                    visible={isSubmitting}
                                                                />
                                                                :
                                                                'S\'inscrire'
                                                            }
                                                        </button>
                                                    </div>
                                                    {(errorOpen && errorMessage) && (<p>{errorMessage}</p>)}
                                                </form>
                                            )}
                                        </Formik>
                                    </div>

                                    {/* <div className="other-log-in">
                                        <h6>or</h6>
                                    </div>

                                    <div className="log-in-button">
                                        <ul>
                                            <li>
                                                <a href="https:/accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                                                    className="btn google-button w-100">
                                                    <img src="../assets/images/inner-page/google.png" className="blur-up lazyload" alt="" /> Sign up with Google
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/" className="btn google-button w-100">
                                                    <img src="../assets/images/inner-page/facebook.png" className="blur-up lazyload" alt="" /> Sign up with Facebook
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}

                                    <div className="sign-up-box">
                                        <h4>Vous avez déjà un compte?</h4>
                                        <Link href={`login`}>Se connecter</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-7 col-xl-6 col-lg-6"></div>
                        </div>
                    </div>
                </section>
            </AuthLayout>
        </Layout>
    );
}