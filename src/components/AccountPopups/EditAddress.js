import React, { useContext, useEffect } from 'react';
import ErrorSnackbar from '../ErrorSnackbar';
import { Formik } from 'formik';
import SuccessSnackbar from '../SuccessSnackbar';
import { object, ref, string } from 'yup';
import { changeUserPassword } from '../../queries/queries';
import { TailSpin } from 'react-loader-spinner';

export default function EditAddress({ SelectModelTitle }) {
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const closeError = () => {
        setErrorOpen(false);
    };

    SelectModelTitle ('Modifier l\'adresse')

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
        old_password: string().required('Ce champ est obligatoire').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        password: string().required('Ce champ est obligatoire').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        password_confirmation: string().required('Ce champ est obligatoire').oneOf([ref('password'), null], 'Passwords must match')
    });

    const genInitialValues = () => ({ 
        old_password: '',
        password: '',
        password_confirmation: '',
    });

  return (
    <>
        {errorOpen && (
            <ErrorSnackbar message={errorMessage} closeFunction={closeError} />
        )}
        {success && (
            <SuccessSnackbar message={`Password updated successfully`} />
        )}
        <Formik
            initialValues={genInitialValues()}
            validationSchema={ValidationSchemaForm}
            onSubmit={async (values, actions) => {
                try {
                    const res = await changeUserPassword({
                        old_password: values.old_password,
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
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="form-floating theme-form-floating">
                                    <input type="password" className="form-control" id="old_password" name="old_password" onChange={handleChange} onBlur={handleBlur} value={values.old_password} />
                                    <label for="old_password">Ancien mot de passe</label>
                                </div>
                                <span className='error-form'>{errors.old_password && touched.old_password && errors.old_password}</span>
                            </div>
                            <div className="col-12 col-xxl-6">
                                <div className="form-floating theme-form-floating">
                                    <input type="password" className="form-control" id="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                    <label for="password">Mot de passe</label>
                                </div>
                                <span className='error-form'>{errors.password && touched.password && errors.password}</span>
                            </div>
                            <div className="col-12 col-xxl-6">
                                <div className="form-floating theme-form-floating">
                                    <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" onChange={handleChange} onBlur={handleBlur} value={values.password_confirmation} />
                                    <label for="password_confirmation">Confirmation mot de passe</label>
                                </div>
                                <span className='error-form'>{errors.password_confirmation && touched.password_confirmation && errors.password_confirmation}</span>
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
            )}
        </Formik>
    </>
  )
}
