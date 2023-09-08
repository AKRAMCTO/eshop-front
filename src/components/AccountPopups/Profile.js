import React, { useContext, useEffect } from 'react';
import ErrorSnackbar from '../ErrorSnackbar';
import { Formik } from 'formik';
import SuccessSnackbar from '../SuccessSnackbar';
import { number, object, mixed, string } from 'yup';
import { editUserProfileInfo } from '../../queries/queries';
import { TailSpin } from 'react-loader-spinner';
import { AuthProvider } from '../../contexts/AuthContext';

const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png'];
const FILE_SIZE = 1024 * 2048

export default function Profile({ SelectModelTitle, modelClose }) {
    const { userData, updateProfile } = useContext(AuthProvider);
    const [avatarPreview, setAvatarPreview] = React.useState(((userData?.full_avatar) ? userData?.full_avatar : require("./../../assets/images/avatar.jpeg")));
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const closeError = () => {
        setErrorOpen(false);
    };

    SelectModelTitle ('Modifier le profil')

    useEffect(() => {
        if(success){
            let timer = setTimeout(() => {
                setSuccess(false)
                modelClose(false)
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
        avatar: mixed().notRequired()
                        .test('FILE_SIZE', 'Le fichier téléchargé est trop volumineux.', value => !value || (value && value.size <= FILE_SIZE))
                        .test('FILE_FORMAT', 'Le fichier téléchargé a un format non pris en charge.', value => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
        fname: string().min(1, 'Trop court!').max(191, 'Trop long!').required('Ce champ est obligatoire'),
        lname: string().min(1, 'Trop court!').max(191, 'Trop long!').required('Ce champ est obligatoire'),
        email: string().email('Email invalide').required('Ce champ est obligatoire'),
        mobile: number().required('Ce champ est obligatoire'),
    });

    const genInitialValues = () => ({ 
        avatar: null,
        fname: userData?.fname,
        lname: userData?.lname,
        email: userData?.email,
        mobile: userData?.mobile
    });

  return (
    <>
        {errorOpen && (
            <ErrorSnackbar message={errorMessage} closeFunction={closeError} />
        )}
        {success && (
            <SuccessSnackbar message={`Mise à jour du profil réussie`} />
        )}
        <Formik
            initialValues={genInitialValues()}
            validationSchema={ValidationSchemaForm}
            onSubmit={async (values, actions) => {
                try {
                    const res = await editUserProfileInfo({
                        avatar: values.avatar,
                        fname: values.fname,
                        lname: values.lname,
                        email: values.email,
                        type: userData?.type,
                        mobile: values.mobile
                    });
                    if (res.message === 'success') {
                        setSuccess(true)
                        updateProfile()
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
                        <div className="col-12 d-flex align-items-center flex-column justify-content-center  mb-4">
                            <div className="image-upload">
                                <input 
                                    accept="image/*" 
                                    type="file" 
                                    className="form-control" 
                                    id="avatar" 
                                    name="avatar" 
                                    style={{ display: 'none' }}
                                    onChange={(event) => {
                                        setFieldValue("avatar", event.currentTarget.files[0]);
                                        const fileReader = new FileReader();
                                        fileReader.onload = () => {
                                            if (fileReader.readyState === 2) {
                                                setAvatarPreview(fileReader.result);
                                            }
                                        };
                                        fileReader.readAsDataURL(event.target.files[0]);
                                    }}
                                    onBlur={handleBlur} />
                                <label htmlFor="avatar">
                                    <img src={ avatarPreview } className="blur-up lazyload update_img" alt="" />
                                    <strong>Changer l'avatar</strong>
                                </label>
                            </div>
                            <span className='error-form'>{errors.avatar && touched.avatar && errors.avatar}</span>
                        </div>
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
