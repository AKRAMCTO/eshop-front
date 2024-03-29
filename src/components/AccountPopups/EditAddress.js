import React, { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import { number, object, string } from 'yup';
import { TailSpin } from 'react-loader-spinner';

import SuccessAnimation from '../SuccessAnimation';
import ErrorSnackbar from '../ErrorSnackbar';
import SuccessSnackbar from '../SuccessSnackbar';
import { editAddress, getCities } from '../../queries/queries';
import { DataProvider } from '../../contexts/DataContext';
import { useQueryClient } from 'react-query';

export default function EditAddress({ address, SelectModelTitle, modelClose }) {
    const queryClient = useQueryClient();
    const { countries } = useContext(DataProvider)
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [selectedCountry, setSelectedCountry] = React.useState(null);
    const [listCities, setListCities] = React.useState([]);
    const [success, setSuccess] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    
    const closeError = () => {
        setErrorOpen(false);
    };

    SelectModelTitle('Modifier l\'adresse')

    const getInitialValues = {
        line_1: address?.line_1,
        line_2: address?.line_2 ?? '',
        type: address?.type,
        country: address?.country_id,
        city: address?.city_id,
        is_default: address?.is_default
    }

    useEffect(() => {
        if (success) {
            let timer = setTimeout(() => {
                setListCities([])
                setSelectedCountry(null)
                setSuccess(false)
                modelClose(false)
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [success])

    useEffect(() => {
        if (errorOpen) {
            let timer = setTimeout(() => {
                setErrorOpen(false)
                setErrorMessage('')
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [errorOpen])

    const addressFromik = useFormik({
        enableReinitialize: true,
        initialValues: getInitialValues,
        validationSchema: object({
            line_1: string().min(1, 'Trop court!').max(10000, 'Trop long!').required('Ce champ est obligatoire'),
            line_2: string().min(1, 'Trop court!').max(10000, 'Trop long!').notRequired(),
            country: number().required('Ce champ est obligatoire'),
            city: number().required('Ce champ est obligatoire'),
            type: string().oneOf(['delivery', 'billing']).defined().required('Ce champ est obligatoire'),
        }),
        onSubmit: (async (values, actions) => {
            try {
                const res = await editAddress({
                    line_1: values.line_1,
                    line_2: values.line_2,
                    type: values.type,
                    country: values.country,
                    city: values.city,
                    is_default: values.is_default
                }, address?.id);
                if (res.message === 'success') {
                    queryClient.invalidateQueries('addresses');
                    setSuccess(true)
                } else {
                    actions.setSubmitting(false);
                }
            } catch (error) {
                setErrorOpen(true);
                setErrorMessage('Une erreur s\'est produite. Veuillez réessayer');
            }
        })
    });

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = addressFromik;

    useEffect(() => {
        // console.log('values => ', values)
        if (values.country && selectedCountry !== values.country) {
            setListCities([])
            setSelectedCountry(values.country)
        }
    }, [values])

    useEffect(() => {
        if (selectedCountry) {
            getCities(selectedCountry).then(function (response) {
                if (response && response.length) {
                    setListCities(response)
                }
            })
        } else {
            setListCities([])
        }
    }, [selectedCountry])

    return (
        <>
            {errorOpen && (
                <ErrorSnackbar message={errorMessage} closeFunction={closeError} />
            )}
            {success && (
                <SuccessSnackbar message={`L'adresse a été modifié`} />
            )}
            {(success) ?
                <SuccessAnimation />
            :
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="d-flex align-items-center justify-content-start">
                                    <div className="d-flex align-items-center">
                                        <input type="radio" id="delivery" name="type" checked={values.type === 'delivery'} onChange={handleChange} onBlur={handleBlur} value={`delivery`} />
                                        &nbsp;
                                        <label htmlFor="delivery">Livraison</label>
                                    </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="d-flex align-items-center">
                                        <input type="radio" id="billing" name="type" checked={values.type === 'billing'} onChange={handleChange} onBlur={handleBlur} value={`billing`} />
                                        &nbsp;
                                        <label htmlFor="billing">Facture</label>
                                    </div>
                                </div>
                                <span className='error-form'>{errors.type && touched.type && errors.type}</span>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="form-floating theme-form-floating">
                                    <input type="text" className="form-control" id="line_1" name="line_1" onChange={handleChange} onBlur={handleBlur} value={values.line_1} />
                                    <label htmlFor="line_1">Ligne 1</label>
                                </div>
                                <span className='error-form'>{errors.line_1 && touched.line_1 && errors.line_1}</span>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-floating theme-form-floating">
                                    <input type="text" className="form-control" id="line_2" name="line_2" onChange={handleChange} onBlur={handleBlur} value={values.line_2} />
                                    <label htmlFor="line_2">Ligne 2</label>
                                </div>
                                <span className='error-form'>{errors.line_2 && touched.line_2 && errors.line_2}</span>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="form-floating theme-form-floating">
                                    <select value={values.country} className="form-control" id="country" name="country" onChange={handleChange} onBlur={handleBlur}>
                                        <option value="0" label="Choisissez un pays">Choisissez un pays</option>
                                        {(countries && countries.length) &&
                                            countries.map((item, key) => <option key={key} value={item?.id} label={item?.name}>{item?.name}</option>)
                                        }
                                    </select>
                                </div>
                                <span className='error-form'>{errors.country && touched.country && errors.country}</span>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="form-floating theme-form-floating">
                                    <select value={values.city} className="form-control" id="city" name="city" onChange={handleChange} onBlur={handleBlur}>
                                        <option value="0" label="Sélectionnez une ville">Sélectionnez une ville</option>
                                        {(listCities && listCities.length) &&
                                            listCities.map((item, key) => <option key={key} value={item?.id} label={item?.name}>{item?.name}</option>)
                                        }
                                    </select>
                                </div>
                                <span className='error-form'>{errors.city && touched.city && errors.city}</span>
                            </div>

                            <div className="col-12">
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" id="is_default" name="is_default" checked={values.is_default == 1} onChange={handleChange} onBlur={handleBlur} value={1} />
                                    &nbsp;
                                    <label htmlFor="is_default">Définir par défaut</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button disabled={isSubmitting} className="btn theme-bg-color btn-md fw-bold text-light" type="submit">
                            {isSubmitting ?
                                <TailSpin
                                    type="ThreeDots"
                                    color="#fff"
                                    height={20}
                                    width={20}
                                    visible={isSubmitting}
                                />
                                :
                                'Enregistrer'
                            }
                        </button>
                    </div>
                </form>
            }
        </>
    )
}
