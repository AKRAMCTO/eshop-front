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

    const phoneRegExp = /^0(5|6|7)[0-9]{8}$/
    const ValidationSchemaForm = object({
        phone: string().required('Required')
                        .matches(phoneRegExp, 'Le numéro de téléphone doit être comme ça 0601020304')
                        .min(1, 'Trop court!')
                        .max(10, 'Trop long!')
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
                                <p>Profitez de notre expertise sans engagement ! Laissez-nous vous aider en planifiant un appel gratuit pour discuter de vos besoins.</p>
                            </div>
                        </li>

                        <li className="w-100 product-box-contain">
                            <div className="drop-cart">
                                <input 
                                    type="string"
                                    className="form-control" 
                                    id="phone" 
                                    placeholder="Exemple 0601020304" 
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
