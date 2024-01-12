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
import Breadcrumb from "../components/Breadcrumb";
import { Eye, EyeOff } from "react-feather";
import { DataProvider } from "../contexts/DataContext";

export default function Register() {
    const { registerMutation, errorAuthContext, emptyErrorAuthContext, successAuthContext, emptySuccessAuthContext } = useContext(AuthProvider);
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [successOpen, setSuccessOpen] = React.useState(false);
    const [passwordStatus, setPasswordStatus] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const closeError = () => {
        setErrorOpen(false);
    };
    const togglePasswordStatus = () => {
        setPasswordStatus(!passwordStatus);
    };

    useEffect(() => {
        if(errorOpen){
            let timer = setTimeout(() => {
                setLoading(false)
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
                setLoading(false)
                setSuccessOpen(false)
                emptySuccessAuthContext()
            }, 4000)
            return () => clearTimeout(timer)  
        }
    }, [successOpen])

    // useEffect(() => {
    //     console.log('here loading => ', loading)
    // }, [loading])

    useEffect(() => {
        if(errorAuthContext && errorAuthContext['register']){
            setErrorOpen(true)
        }
    }, [errorAuthContext])

    useEffect(() => {
        if(successAuthContext && successAuthContext['register']){
            setSuccessOpen(true)
        }
    }, [successAuthContext])

    const ValidationSchemaForm = object({
        fname: string().min(1, 'Trop court!').max(191, 'Trop long!').required('Ce champ est obligatoire'),
        lname: string().min(1, 'Trop court!').max(191, 'Trop long!').required('Ce champ est obligatoire'),
        email: string().email('Email invalide').required('Ce champ est obligatoire'),
        type: string().oneOf(['individual', 'professional', 'seller']).defined().required('Ce champ est obligatoire'),
        mobile: string().required('Ce champ est obligatoire').matches(/^[0-9]{9}?$/, 'Le numéro de téléphone doit être composé de 9 chiffres et respecter ce format: 601020304'),
        password: string().required('Ce champ est obligatoire').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!+@#\$%\^&\*])(?=.{8,})/, "Doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et une casse spéciale"),
        rc: string().when('type', {
            is: (val) => ["professional"].includes(val),
            then: (schema) => schema.required("Ce champ est obligatoire"),
        }),
        ice: string().when('type', {
            is: (val) => ["professional"].includes(val),
            then: (schema) => schema.required("Ce champ est obligatoire"),
        })
    });

    const genInitialValues = () => ({ 
        fname: '',
        lname: '',
        type: 'individual',
        email: '',
        mobile: '',
        password: '',
        rc: '',
        ice: ''
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
                                                setLoading(true)
                                                setErrorOpen(false)
                                                await registerMutation(values)
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
                                                    <div className="col-12">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <input type="radio" id="individual" name="type" checked={values.type === 'individual'} onChange={handleChange} onBlur={handleBlur} value={`individual`} />
                                                                &nbsp;
                                                                <label htmlFor="individual">Particulier</label>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <input type="radio" id="professional" name="type" checked={values.type === 'professional'} onChange={handleChange} onBlur={handleBlur} value={`professional`} />
                                                                &nbsp;
                                                                <label htmlFor="professional">Professional</label>
                                                            </div>
                                                        </div>
                                                        <span className='error-form'>{errors.type && touched.type && errors.type}</span>
                                                    </div>
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
                                                            <label htmlFor="lname">Prénom</label>
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
                                                        <div className="form-floating theme-form-floating group-mobile">
                                                            <input type="text" className="form-control" id="mobile" name="mobile" onChange={handleChange} onBlur={handleBlur} value={values.mobile} />
                                                            <label htmlFor="mobile">Téléphone</label>
                                                            <span>+212-</span>
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
                                                    
                                                    {(values.type === 'professional') && 
                                                        <>
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
                                                        </>
                                                    }

                                                    <div className="col-12">
                                                        <button disabled={isSubmitting || loading} className="btn btn-animation w-100" type="submit">
                                                            {(isSubmitting || loading) ?
                                                                <TailSpin
                                                                    type="ThreeDots"
                                                                    color="#fff"
                                                                    height={20}
                                                                    width={20}
                                                                    visible={isSubmitting || loading}
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
                            </div>

                            <div className="col-xxl-7 col-xl-6 col-lg-6"></div>
                        </div>
                    </div>
                </section>
            </AuthLayout>
        </Layout>
    );
}