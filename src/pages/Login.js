import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { AuthProvider } from "../contexts/AuthContext";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { object, string } from "yup";
import { Formik } from "formik";
import ErrorSnackbar from "../components/ErrorSnackbar";
import Breadcrumb from "../components/Breadcrumb";
import { Eye, EyeOff } from "react-feather";

export default function Login() {
    const { loginMutation, errorAuthContext, emptyErrorAuthContext } = useContext(AuthProvider);
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [passwordStatus, setPasswordStatus] = React.useState(false);
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
        if(errorAuthContext && errorAuthContext['login']){
            setErrorOpen(true)
        }
    }, [errorAuthContext])

    const ValidationSchemaForm = object({
        email: string().email('Email invalide').required('Ce champ est obligatoire'),
        password: string().required('Ce champ est obligatoire')
    });

    const genInitialValues = () => ({ 
        email: '',
        password: ''
    });

    return (
        <Layout>
            <Helmet>
                <title>{`Login | Ecowatt`}</title>
            </Helmet>
            <AuthLayout>
                <Breadcrumb title={`Se connecter`} />
                
                <section className="log-in-section background-image-2 section-b-space">
                    <div className="container-fluid-lg w-100">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                                <div className="image-contain">
                                    <img src={require('./../assets/images/log-in.png')} className="img-fluid" alt="" />
                                </div>
                            </div>

                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                                <div className="log-in-box">
                                    <div className="log-in-title mb-4">
                                        <h3>Bienvenue chez Ecowatt</h3>
                                        <h4>Connectez-vous à votre compte</h4>
                                    </div>

                                    {(errorAuthContext && errorAuthContext['login']) && (
                                        <ErrorSnackbar message={errorAuthContext['login']} closeFunction={closeError} />
                                    )}

                                    <div className="input-box">
                                        <Formik
                                            initialValues={genInitialValues()}
                                            validationSchema={ValidationSchemaForm}
                                            onSubmit={async (values, actions) => {
                                                setErrorOpen(false);
                                                await loginMutation(values);
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
                                                <form onSubmit={handleSubmit} className="row g-4">
                                                    <div className="col-12">
                                                        <div className="form-floating theme-form-floating log-in-form">
                                                            <input type="email" className="form-control" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                                            <label htmlFor="email">Adresse e-mail</label>
                                                        </div>
                                                        <span className='error-form'>{errors.email && touched.email && errors.email}</span>
                                                    </div>

                                                    <div className="col-12 form-group-password">
                                                        <div className="form-floating theme-form-floating log-in-form">
                                                            <input type={(passwordStatus) ? "text" : "password"}className="form-control" id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                                            <label htmlFor="password">Mot de passe</label>
                                                            {(passwordStatus) ? 
                                                                <Eye onClick={togglePasswordStatus} />
                                                                : 
                                                                <EyeOff onClick={togglePasswordStatus} />
                                                            }
                                                        </div>
                                                        <span className='error-form'>{errors.password && touched.password && errors.password}</span>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="forgot-box">
                                                            <div className="form-check ps-0 m-0 remember-box">
                                                                <input className="checkbox_animated check-box" type="checkbox" id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault">Souviens-toi de moi</label>
                                                            </div>
                                                            <Link to="/forgot-password" className="forgot-password">Mot de passe oublié?</Link>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <button disabled={isSubmitting} className="btn btn-animation w-100 justify-content-center" type="submit">
                                                            {isSubmitting ?
                                                                <TailSpin
                                                                    type="ThreeDots"
                                                                    color="#fff"
                                                                    height={20}
                                                                    width={20}
                                                                    visible={isSubmitting}
                                                                />
                                                                :
                                                                'Se connecter'
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
                                                <a href="https://www.google.com/" className="btn google-button w-100">
                                                    <img src="../assets/images/inner-page/google.png" className="blur-up lazyload" alt="" /> Log In with Google
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/" className="btn google-button w-100">
                                                    <img src="../assets/images/inner-page/facebook.png" className="blur-up lazyload" alt="" /> Log In with Facebook
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}

                                    <div className="sign-up-box">
                                        <h4>Je n'ai pas de compte?</h4>
                                        <Link to={'/register'}>S'inscrire</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </AuthLayout>
        </Layout>
    );
}