import React, { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import { number, object, string } from 'yup';
import { useQueryClient } from 'react-query';
import { X } from 'react-feather';

import ErrorSnackbar from '../ErrorSnackbar';
import SuccessSnackbar from '../SuccessSnackbar';
import { addAddress, getCities } from '../../queries/queries';
import { TailSpin } from 'react-loader-spinner';
import { DataProvider } from '../../contexts/DataContext';
import SuccessAnimation from '../SuccessAnimation';

export default function AddAddress({ type, modelClose = null, isAuthenticated = null, saveAddress = null }) {
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

    useEffect(() => {
        if (success) {
            let timer = setTimeout(() => {
                setSuccess(false)
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

    const genInitialValues = {
        line_1: '',
        line_2: '',
        country: '',
        city: '',
    }

    const addressFromik = useFormik({
        initialValues: genInitialValues,
        validationSchema: object({
            line_1: string().min(1, 'Trop court!').max(10000, 'Trop long!').required('Ce champ est obligatoire'),
            line_2: string().min(1, 'Trop court!').max(10000, 'Trop long!').notRequired(),
            country: number().required('Ce champ est obligatoire'),
            city: number().required('Ce champ est obligatoire')
        }),
        onSubmit:( async (values, actions) => {
            if(isAuthenticated){
                try {
                    const res = await addAddress({
                        line_1: values.line_1,
                        line_2: values.line_2,
                        country: values.country,
                        city: values.city,
                        type: type,
                        is_default: true
                    });
                    if (res.message === 'success') {
                        actions.resetForm({ 
                            values: genInitialValues
                        })
                        queryClient.invalidateQueries('addresses');
                        setSuccess(true)
                    } else {
                        actions.setSubmitting(false);
                    }
                } catch (error) {
                    setErrorOpen(true);
                    setErrorMessage('Une erreur s\'est produite. Veuillez réessayer');
                }
            }else{
                saveAddress(values)
                setSuccess(true)
            }
        })
    });

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = addressFromik;

    useEffect(() => {
        if(values.country && selectedCountry !== values.country){
            setListCities([])
            setSelectedCountry(values.country)
        }
    }, [values])

    useEffect(() => {
        if(selectedCountry){
            getCities(selectedCountry).then(function(response) {
                if(response && response.length) {
                    setListCities(response)
                }
            })
        }else{
            setListCities([])
        }
    }, [selectedCountry])

    return (
        <div className='checkout-add-address'>
            {errorOpen && (
                <ErrorSnackbar message={errorMessage} closeFunction={closeError} />
            )}
            {success && (
                <SuccessSnackbar message={`L'adresse a été enregistrée`} />
            )}
            {(success && isAuthenticated) ?
                <SuccessAnimation />
            :
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <div className="row g-4">
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
                                        <option value="0" label="Sélectionnez une province">Sélectionnez une province</option>
                                        {(listCities && listCities.length) &&
                                            listCities.map((item, key) => <option key={key} value={item?.id} label={item?.name}>{item?.name}</option>)
                                        }
                                    </select>
                                </div>
                                <span className='error-form'>{errors.city && touched.city && errors.city}</span>
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
                                'Save'
                            }
                        </button>
                    </div>
                    {modelClose && <div className="close-model"><X onClick={modelClose} /></div>}
                </form>
            }
        </div>
    )
}
