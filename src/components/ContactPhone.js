import React, { useEffect, useState } from 'react';
import { queryCache, useMutation } from 'react-query';
import { saveReminder } from '../queries/queries';
import { Formik } from 'formik';
import { object, string } from 'yup';

export default function ContactPhone() {
    const [result, setResult] = useState(null)

    const { mutate, isLoading } = useMutation(saveReminder, {
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
        phone: string()
            .min(1, 'Trop court!')
            .max(10, 'Trop long!')
            .required('Required')
    });

    const genInitialValues = () => ({ 
        phone: ''
    });

    return (
        <Formik
            initialValues={genInitialValues()}
            validationSchema={ValidationSchemaForm}
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
                    <ul className="cart-list">
                        <li className="w-100 product-box-contain">
                            <div className="drop-cart">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </li>

                        <li className="w-100 product-box-contain">
                            <div className="drop-cart">
                                <input 
                                    type="tel" 
                                    className="form-control" 
                                    id="phone" 
                                    placeholder="Enter Your Phone Number" 
                                    maxLength="10" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                />
                            </div>
                            <span className='mt-1 d-block error-form'>{errors.phone && touched.phone && errors.phone}</span>
                        </li>
                    </ul>

                    <div className="button-group">
                        <button 
                            className="btn btn-sm cart-button theme-bg-color text-white" 
                            disabled={isSubmitting}
                        >
                            Envoyer
                        </button>
                    </div>

                    {(result === false) && <span className='error-result'>Erreur trouvée, les données ne peuvent pas être enregistrées</span>}
                    {(result === true) && <span className='success-result'>Données enregistrées avec succès</span>}
                </form>
            )}
        </Formik>
    );
}
