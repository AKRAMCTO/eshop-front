import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { object, string } from "yup";
import { AnimatePresence, motion } from "framer-motion";
import { Formik } from "formik";
import { requestPasswordReset } from "../queries/queries";
import ErrorSnackbar from "../components/ErrorSnackbar";
import AuthLayout from "../components/AuthLayout";
import Layout from "../components/Layout";
import SuccessSnackbar from "../components/SuccessSnackbar";
import Breadcrumb from "../components/Breadcrumb";

export default function ForgotPassword() {
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const closeError = () => {
        setErrorOpen(false);
    };

    useEffect(() => {
        if(success){
            let timer = setTimeout(() => {
                setSuccess(false)
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
        email: string().email('Email invalide').required('Ce champ est obligatoire')
    });

    const genInitialValues = () => ({ 
        email: ''
    });

    return (
        <Layout>
            <Helmet>
                <title>{`Mot de passe oublié | Ecowatt`}</title>
            </Helmet>
            <AuthLayout>
                
                <Breadcrumb title={`Mot de passe oublié`} />

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
                                        <div className="log-in-title mb-4">
                                            <h3>Bienvenue chez Ecowatt</h3>
                                            <h4>Mot de passe oublié</h4>
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
                                                        const res = await requestPasswordReset({email: values.email});
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
                                                                    'Mot de passe oublié'
                                                                }
                                                            </button>
                                                        </div>
                                                    </form>
                                                )}
                                            </Formik>

                                            {success && (
                                                <SuccessSnackbar message={`Vérifiez votre E-mail`} />
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