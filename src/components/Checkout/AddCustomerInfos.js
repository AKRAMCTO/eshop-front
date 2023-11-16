import React, { useContext, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Formik } from 'formik';
import { number, object, string } from 'yup';

import SuccessSnackbar from '../SuccessSnackbar';
import { DataProvider } from '../../contexts/DataContext';

export default function AddCustomerInfos({ save }) {
    const [success, setSuccess] = React.useState(false);

    useEffect(() => {
        if (success) {
            let timer = setTimeout(() => {
                setSuccess(false)
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [success])

    const genInitialValues = () => ({ 
        fname: '',
        lname: '',
        email: '',
        mobile: ''
    });

    const ValidationSchemaForm = object({
        fname: string().min(1, 'Trop court!').max(191, 'Trop long!').required('Ce champ est obligatoire'),
        lname: string().min(1, 'Trop court!').max(191, 'Trop long!').required('Ce champ est obligatoire'),
        email: string().email('Email invalide').required('Ce champ est obligatoire'),
        mobile: string().required('Ce champ est obligatoire').matches(/^(\+212)(\-)(6|7)[0-9]{8}?$/, 'Le numéro de téléphone doit être au format: +212-601020304')
    });

    return (
        <div className="checkout-box">
            <div className="d-flex align-items-center justify-content-between checkout-title">
                <h4>Les informations personnelles</h4>
            </div>
            {success && (
                <SuccessSnackbar message={`Le client a été enregistré`} />
            )}
            <Formik
                initialValues={genInitialValues()}
                validationSchema={ValidationSchemaForm}
                onSubmit={async (values) => {
                    console.log('Submit customer data => ', values)
                    save(values)
                    setSuccess(true)
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
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="row g-4">
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
                                        <label htmlFor="lname">Prenom</label>
                                    </div>
                                    <span className='error-form'>{errors.lname && touched.lname && errors.lname}</span>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-floating theme-form-floating">
                                        <input type="email" className="form-control" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                        <label htmlFor="email">Email Address</label>
                                    </div>
                                    <span className='error-form'>{errors.email && touched.email && errors.email}</span>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-floating theme-form-floating">
                                        <input type="text" className="form-control" id="mobile" name="mobile" onChange={handleChange} onBlur={handleBlur} value={values.mobile} />
                                        <label htmlFor="mobile">Téléphone</label>
                                    </div>
                                    <span className='error-form'>{errors.mobile && touched.mobile && errors.mobile}</span>
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
                    </form>
                )}
            </Formik>
        </div>
    )
}