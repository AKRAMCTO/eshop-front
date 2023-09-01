import React, { useEffect, useState } from 'react';
import { queryCache, useMutation } from 'react-query';
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
        first_name: string()
            .min(1, 'Trop court!')
            .max(191, 'Trop long!')
            .required('Required'),
        last_name: string()
            .min(1, 'Trop court!')
            .max(191, 'Trop long!')
            .required('Required'),
        email: string().email('Email invalide').required('Required'),
    });

    const genInitialValues = () => ({ 
        first_name: '',
        last_name: '',
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
                                        <h2>Join our newsletter and get...</h2>
                                        <h5>$20 discount for your first order</h5>
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
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="first_name"
                                                                    placeholder="Entrez votre prénom"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.first_name}
                                                                />
                                                                {/* <i className="fa-solid fa-envelope arrow"></i> */}
                                                                <span className='error-form'>{errors.first_name && touched.first_name && errors.first_name}</span>
                                                            </div>
                                                            <div className='col-6 pl-1 form-group'>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="last_name"
                                                                    placeholder="Entrez votre nom"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    value={values.last_name}
                                                                />
                                                                {/* <i className="fa-solid fa-envelope arrow"></i> */}
                                                                <span className='error-form'>{errors.last_name && touched.last_name && errors.last_name}</span>
                                                            </div>
                                                        </div>
                                                        <div className='form-group relative mt-3'>
                                                            <input
                                                                type="email"
                                                                className="form-control space-more"
                                                                id="email"
                                                                placeholder="Enter Your Email"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                            />
                                                            <i className="fa-solid fa-envelope arrow"></i>
                                                            <span className='error-form'>{errors.email && touched.email && errors.email}</span>

                                                            <button 
                                                                type="submit" 
                                                                className="sub-btn btn-animation" 
                                                                disabled={isSubmitting}
                                                            >
                                                                <span className="d-sm-block d-none">Subscribe</span>
                                                                <i className="fa-solid fa-arrow-right icon"></i>
                                                            </button>
                                                        </div>
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
