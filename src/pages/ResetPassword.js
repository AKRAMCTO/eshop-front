import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { AuthProvider } from "../contexts/AuthContext";
import AuthLayout from "../components/AuthLayout";
import { TailSpin } from "react-loader-spinner";
import { object, ref, string } from "yup";
import { Formik } from "formik";
import { resetUserPassword } from "../queries/queries";
import ErrorSnackbar from "../components/ErrorSnackbar";
import SuccessSnackbar from "../components/SuccessSnackbar";
import Breadcrumb from "../components/Breadcrumb";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function ResetPassword() {
    const queryParameters = new URLSearchParams(window.location.search)
    const token = queryParameters.get("token")
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [redirectLogin, setRedirectLogin] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const closeError = () => {
        setErrorOpen(false);
    };

    useEffect(() => {
        if(success){
            let timer = setTimeout(() => {
                setSuccess(false)
                setRedirectLogin(true)
            }, 4000)
            return () => clearTimeout(timer)  
        }
    }, [success])

    useEffect(() => {
        if(errorOpen){
            let timer = setTimeout(() => {
                setErrorOpen(false)
                setErrorMessage('')
            }, 4000)
            return () => clearTimeout(timer)  
        }
    }, [errorOpen])

    const ValidationSchemaForm = object({
        email: string().email('Email invalide').required('Ce champ est obligatoire'),
        password: string().required('Ce champ est obligatoire').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et une casse spéciale"),
        password_confirmation: string().required('Ce champ est obligatoire').oneOf([ref('password'), null], 'Passwords must match')
    });

    const genInitialValues = () => ({ 
        email: '',
        password: '',
        password_confirmation: '',
    });


    if(redirectLogin){
        return <Redirect to={`/login`} />
    }
    return (
        <Layout>
            <Helmet>
                <title>{`Réinitialiser le mot de passe | Ecowatt`}</title>
            </Helmet>
            <AuthLayout>
                <Breadcrumb title={`Réinitialiser le mot de passe`} />
                
                <section className="log-in-section section-b-space forgot-section">
                    <div className="container-fluid-lg w-100">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                                <div className="image-contain">
                                    <img src={require('./../assets/images/forgot.png')} className="img-fluid" alt="" />
                                </div>
                            </div>

                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="log-in-box">
                                        <div className="log-in-title">
                                            <h3>Bienvenue chez Ecowatt</h3>
                                            <h4>Réinitialiser le mot de passe</h4>
                                        </div>

                                        {errorOpen && (
                                            <ErrorSnackbar message={errorMessage} closeFunction={closeError} />
                                        )}

                                        <div className="input-box">
                                            <Formik
                                                initialValues={genInitialValues()}
                                                validationSchema={ValidationSchemaForm}
                                                onSubmit={async (values, actions) => {
                                                    try {
                                                        const res = await resetUserPassword({
                                                            token: token,
                                                            email: values.email,
                                                            password: values.password,
                                                            password_confirmation: values.password_confirmation
                                                        });
                                                        if (res.message === 'success') {
                                                            setSuccess(true);
                                                            actions.resetForm({ 
                                                                values: genInitialValues()
                                                            })
                                                        } else {
                                                            actions.setSubmitting(false);
                                                            setErrorOpen(true);
                                                            setErrorMessage(res);
                                                        }
                                                    } catch (error) {
                                                        setErrorOpen(true);
                                                        setErrorMessage('Une erreur s\'est produite. Veuillez réessayer');
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
                                                    <form onSubmit={handleSubmit} className="row g-4">
                                                        <div className="col-12">
                                                            <div className="form-floating theme-form-floating log-in-form">
                                                                <input type="email" className="form-control" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                                                <label htmlFor="email">Adresse e-mail</label>
                                                            </div>
                                                            <span className='error-form'>{errors.email && touched.email && errors.email}</span>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating theme-form-floating log-in-form">
                                                                <input type="password" className="form-control" id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                                                <label htmlFor="password">Mot de passe</label>
                                                            </div>
                                                            <span className='error-form'>{errors.password && touched.password && errors.password}</span>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating theme-form-floating log-in-form">
                                                                <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" onChange={handleChange} onBlur={handleBlur} value={values.password_confirmation} />
                                                                <label htmlFor="password_confirmation">Confirmer le Mot de passe</label>
                                                            </div>
                                                            <span className='error-form'>{errors.password_confirmation && touched.password_confirmation && errors.password_confirmation}</span>
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
                                                                    'Réinitialiser le mot de passe'
                                                                }
                                                            </button>
                                                        </div>
                                                    </form>
                                                )}
                                            </Formik>

                                            {(success) && (
                                                <SuccessSnackbar message={`Votre mot de passe a été réinitialisé`} />
                                            )}
                                        </div>
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