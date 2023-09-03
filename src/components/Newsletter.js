import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { saveNewsletter } from '../queries/queries';
import { Formik } from 'formik';
import { object, string } from 'yup';

export default function Newsletter() {
    const [result, setResult] = useState(null)

    const { mutate, isLoading } = useMutation(saveNewsletter, {
        onSuccess: data => {
            setResult(true)
        },
        onError: () => {
            setResult(false)
        }
    });

    useEffect(() => {
        if(result != null){
            const timer = setTimeout(() => {
                setResult(null);
            }, 3000);
            
            return () => clearTimeout(timer);
        }
    }, [result]);

    const ValidationSchemaForm = object({
        name: string()
            .min(1, 'Trop court!')
            .max(191, 'Trop long!')
            .required('Required'),
        email: string().email('Email invalide').required('Required'),
    });

    const genInitialValues = () => ({ 
        name: '',
        email: '' 
    });

    return (
        <section className="newsletter-section section-b-space">
            <div className="container-fluid-lg">
                <div className="newsletter-box newsletter-box-2">
                    <div className="newsletter-contain py-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                                    <div className="newsletter-detail">
                                        <h2>Abonnez-vous</h2>
                                        <h5> à notre newsletter et recevez...</h5>
                                        <div className="input-box">
                                            <Formik
                                                initialValues={genInitialValues()}
                                                validationSchema={ValidationSchemaForm}
                                                validate={values => {
                                                    const errors = {};
                                                    if (!values.email) {
                                                        errors.email = 'Required';
                                                    } else if (
                                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                                    ) {
                                                        errors.email = 'Adresse e-mail invalide';
                                                    }
                                                    return errors;
                                                }}
                                                onSubmit={async (values, actions) => {
                                                    await mutate(values);
                                                    actions.resetForm({ 
                                                        values: genInitialValues()
                                                    })
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
                                                        <div className='row'>
                                                            <div className='col-6 pr-1 form-group'>
                                                                <div className='relative'>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="name"
                                                                        placeholder="Nom"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.name}
                                                                    />
                                                                    {/* <i className="fa-solid fa-envelope arrow"></i> */}
                                                                    <span className='error-form'>{errors.name && touched.name && errors.name}</span>
                                                                </div>
                                                            </div>
                                                            <div className='col-6 pl-1 form-group'>
                                                                <div className='relative'>
                                                                    <input
                                                                        type="email"
                                                                        className="form-control space-more"
                                                                        id="email"
                                                                        placeholder="E-mail"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.email}
                                                                    />
                                                                    {/* <i className="fa-solid fa-envelope arrow"></i> */}
                                                                    <span className='error-form'>{errors.email && touched.email && errors.email}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button 
                                                            type="submit" 
                                                            className="sub-btn btn-animation" 
                                                            disabled={isSubmitting}
                                                        >
                                                            <span className="d-sm-block d-none">S'abonner</span>
                                                            <i className="fa-solid fa-arrow-right icon"></i>
                                                        </button>
                                                    </form>
                                                )}
                                            </Formik>
                                            {(result === false) && <span className='error-result'>Erreur trouvée, les données ne peuvent pas être enregistrées</span>}
                                            {(result === true) && <span className='success-result'>Données enregistrées avec succès</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
