import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Formik } from 'formik';
import { object, string, number, mixed } from 'yup';
import { Link } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner';

import Layout from "../components/Layout";
import { AuthProvider } from "../contexts/AuthContext";
import AuthLayout from "../components/AuthLayout";
import ErrorSnackbar from "../components/ErrorSnackbar";
import SuccessAnimation from "../components/SuccessAnimation";
import Breadcrumb from "../components/Breadcrumb";
import { Eye, EyeOff } from "react-feather";

const SUPPORTED_FORMATS = ['application/pdf'];
const FILE_SIZE = 1024 * 2048

export default function RegisterSeller() {
    const { registerSellerMutation, errorAuthContext, emptyErrorAuthContext, successAuthContext, emptySuccessAuthContext } = useContext(AuthProvider);
    const [passwordStatus, setPasswordStatus] = React.useState(false);
    const [successOpen, setSuccessOpen] = React.useState(false);
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    const closeError = () => {
        setErrorOpen(false);
    };
    const togglePasswordStatus = () => {
        setPasswordStatus(!passwordStatus);
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
        if(successOpen){
            let timer = setTimeout(() => {
                setSuccessOpen(false)
                emptySuccessAuthContext()
            }, 4000)
            return () => clearTimeout(timer)  
        }
    }, [successOpen])

    useEffect(() => {
        if(errorAuthContext && errorAuthContext['register']){
            setErrorOpen(true)
        }
    }, [errorAuthContext])

    useEffect(() => {
        if(successAuthContext && successAuthContext['registerSeller']){
            setSuccessOpen(true)
        }
    }, [successAuthContext])

    const ValidationSchemaForm = object({
        fname: string().min(1, 'Trop court!').max(191, 'Trop long!').required('Ce champ est obligatoire'),
        lname: string().min(1, 'Trop court!').max(191, 'Trop long!').required('Ce champ est obligatoire'),
        email: string().email('Email invalide').required('Ce champ est obligatoire'),
        mobile: number().required('Ce champ est obligatoire'),
        password: string().required('Ce champ est obligatoire').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!+@#\$%\^&\*])(?=.{8,})/, "Doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et une casse spéciale"),
        rc: string().when('type', {
            is: (val) => ["professional", "seller"].includes(val), // (value === 'professional' || value === 'seller'),
            then: (schema) => schema.required("Ce champ est obligatoire"),
        }),
        ice: string().when('type', {
            is: (val) => ["professional", "seller"].includes(val), // (value === 'professional' || value === 'seller'),
            then: (schema) => schema.required("Ce champ est obligatoire"),
        }),
        rc_file: mixed().when("type", {
            is: (val) => val === 'seller',
            then: (schema) => schema.required("Ce champ est obligatoire")
                                    .test('FILE_SIZE', 'Le fichier téléchargé est trop volumineux.', value => !value || (value && value.size <= FILE_SIZE))
                                    .test('FILE_FORMAT', 'Le fichier téléchargé a un format non pris en charge.', value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
        }),
        ice_file: mixed().when("type", {
            is: (val) => val === 'seller',
            then: (schema) => schema.required("Ce champ est obligatoire")
                                    .test('FILE_SIZE', 'Le fichier téléchargé est trop volumineux.', value => !value || (value && value.size <= FILE_SIZE))
                                    .test('FILE_FORMAT', 'Le fichier téléchargé a un format non pris en charge.', value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
        }),
        cin_file: mixed().when("type", {
            is: (val) => val === 'seller',
            then: (schema) => schema.required("Ce champ est obligatoire")
                                    .test('FILE_SIZE', 'Le fichier téléchargé est trop volumineux.', value => !value || (value && value.size <= FILE_SIZE))
                                    .test('FILE_FORMAT', 'Le fichier téléchargé a un format non pris en charge.', value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
        }),
    });

    const genInitialValues = () => ({ 
        fname: '',
        lname: '',
        type: 'seller',
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

                            <div className="col-xxl-6 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                                {(successOpen && successAuthContext && successAuthContext['registerSeller']) ?
                                    <div className="success-box-register">
                                        <h3>{successAuthContext['registerSeller']}</h3>
                                        <SuccessAnimation />
                                    </div>
                                :
                                    <div className="log-in-box">
                                        <div className="log-in-title mb-4">
                                            <h3>Bienvenue chez Ecowatt</h3>
                                            <h4>Créer un nouveau compte</h4>
                                        </div>

                                        {(errorAuthContext && errorAuthContext['register']) && (
                                            <ErrorSnackbar message={errorAuthContext['register']} closeFunction={closeError} />
                                        )}

                                        <div className="input-box">
                                            <Formik
                                                initialValues={genInitialValues()}
                                                validationSchema={ValidationSchemaForm}
                                                onSubmit={async (values) => {
                                                    setErrorOpen(false);
                                                    await registerSellerMutation(values);
                                                }}
                                            >
                                                {({
                                                    setFieldValue,
                                                    values,
                                                    errors,
                                                    touched,
                                                    handleChange,
                                                    handleBlur,
                                                    handleSubmit,
                                                    isSubmitting,
                                                }) => (
                                                    <form onSubmit={handleSubmit} className="row g-4">
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-floating theme-form-floating">
                                                                <input type="text" className="form-control" id="fname" name="fname" onChange={handleChange} onBlur={handleBlur} value={values.fname} />
                                                                <label htmlFor="fname">Nom</label>
                                                            </div>
                                                            <span className='error-form'>{errors.fname && touched.fname && errors.fname}</span>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-floating theme-form-floating">
                                                                <input type="text" className="form-control" id="lname" name="lname" onChange={handleChange} onBlur={handleBlur} value={values.lname} />
                                                                <label htmlFor="lname">Prenom</label>
                                                            </div>
                                                            <span className='error-form'>{errors.lname && touched.lname && errors.lname}</span>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-floating theme-form-floating">
                                                                <input type="email" className="form-control" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                                                <label htmlFor="email">Email Address</label>
                                                            </div>
                                                            <span className='error-form'>{errors.email && touched.email && errors.email}</span>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-floating theme-form-floating">
                                                                <input type="text" className="form-control" id="mobile" name="mobile" onChange={handleChange} onBlur={handleBlur} value={values.mobile} />
                                                                <label htmlFor="mobile">Téléphone</label>
                                                            </div>
                                                            <span className='error-form'>{errors.mobile && touched.mobile && errors.mobile}</span>
                                                        </div>
                                                        <div className="col-12 form-group-password">
                                                            <div className="form-floating theme-form-floating">
                                                                <input type={(passwordStatus) ? "text" : "password"} className="form-control" id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                                                <label htmlFor="password">Mot de passe</label>
                                                                {(passwordStatus) ? 
                                                                    <Eye onClick={togglePasswordStatus} />
                                                                    : 
                                                                    <EyeOff onClick={togglePasswordStatus} />
                                                                }
                                                            </div>
                                                            <span className='error-form'>{errors.password && touched.password && errors.password}</span>
                                                        </div>

                                                        <div className="col-12 col-md-6">
                                                            <div className="form-floating theme-form-floating">
                                                                <input type="text" className="form-control" id="rc" name="rc" onChange={handleChange} onBlur={handleBlur} value={values.rc} />
                                                                <label htmlFor="rc">RC</label>
                                                            </div>
                                                            <span className='error-form'>{errors.rc && touched.rc && errors.rc}</span>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-floating theme-form-floating">
                                                                <input type="text" className="form-control" id="ice" name="ice" onChange={handleChange} onBlur={handleBlur} value={values.ice} />
                                                                <label htmlFor="ice">ICE</label>
                                                            </div>
                                                            <span className='error-form'>{errors.ice && touched.ice && errors.ice}</span>
                                                        </div>

                                                        <div className="col-12 col-md-6">
                                                            <div className="form-floating theme-form-floating">
                                                                <input accept="application/pdf" type="file" className="form-control" id="rc_file" name="rc_file" 
                                                                    onChange={(event) => {
                                                                        setFieldValue("rc_file", event.currentTarget.files[0]);
                                                                    }}
                                                                    onBlur={handleBlur} />
                                                                <label htmlFor="rc_file">RC file</label>
                                                            </div>
                                                            <span className='error-form'>{errors.rc_file && touched.rc_file && errors.rc_file}</span>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-floating theme-form-floating">
                                                                <input accept="application/pdf" type="file" className="form-control" id="ice_file" name="ice_file"
                                                                    onChange={(event) => {
                                                                        setFieldValue("ice_file", event.currentTarget.files[0]);
                                                                    }}
                                                                    onBlur={handleBlur} />
                                                                <label htmlFor="ice_file">ICE file</label>
                                                            </div>
                                                            <span className='error-form'>{errors.ice_file && touched.ice_file && errors.ice_file}</span>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-floating theme-form-floating">
                                                                <input accept="application/pdf" type="file" className="form-control" id="cin_file" name="cin_file"
                                                                    onChange={(event) => {
                                                                        setFieldValue("cin_file", event.currentTarget.files[0]);
                                                                    }}
                                                                    onBlur={handleBlur} />
                                                                <label htmlFor="cin_file">CIN file</label>
                                                            </div>
                                                            <span className='error-form'>{errors.cin_file && touched.cin_file && errors.cin_file}</span>
                                                        </div>
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
                                            <Link to={`/login`}>Se connecter</Link>
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className="col-xxl-7 col-xl-6 col-lg-6"></div>
                        </div>
                    </div>
                </section>
            </AuthLayout>
        </Layout>
    );
}