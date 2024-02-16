import React, { useContext, useEffect, useState } from 'react';
import { DataProvider } from '../contexts/DataContext';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone } from 'react-feather';
import FooterMenu from './FooterMenu';
import FooterCategory from './FooterCategory';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { useMutation } from 'react-query';
import { saveNewsletter } from '../queries/queries';

export default function Footer() {
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
  const { settings, menus } = useContext(DataProvider);
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
    <footer className="section-t-space">
      <div className="container-fluid-lg">
        <div className="main-footer section-b-space section-t-space">
          <div className="row g-md-4 g-3">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-logo">
                {(settings && settings?.store_white) &&
                  <div className="theme-logo">
                    <Link to="/">
                      <img
                        src={settings?.store_white}
                        className="lazyload"
                        alt={settings?.store_name ?? ''}
                      />
                    </Link>
                  </div>
                }

                <div className="footer-logo-contain">
                  {(settings && settings?.store_description) && <p>{settings?.store_description}</p>}

                  <ul className="address">
                    {(settings && settings?.store_address) &&
                      <li>
                        <div
                            className={`adress_html`}
                            dangerouslySetInnerHTML={{
                                __html: settings?.store_address
                            }}
                        />
                      </li>
                    }
                    {(settings && settings?.store_phone) &&
                      <li>
                        <Mail /> {settings?.store_phone}
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="footer-title">
                <h4>Catégories</h4>
              </div>
              <FooterCategory items={(menus && menus['categories']) ? menus['categories'] : null} />
            </div>

            <div className="col-xl col-lg-2 col-sm-3">
              <div className="footer-title">
                <h4>Useful Links</h4>
              </div>
              <FooterMenu items={(menus && menus['footer-1']) ? menus['footer-1'] : null} />
            </div>

            <div className="col-xl-2 col-sm-3">
              <div className="footer-title">
                <h4>Help Center</h4>
              </div>
              <FooterMenu items={(menus && menus['footer-2']) ? menus['footer-2'] : null} />
            </div>

            

            
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-title">
                <h4>Contact Us</h4>
              </div>

              <div className="footer-contact">
                <ul>
                  {(settings && settings?.store_address) &&
                    <li>
                      <div className="footer-number">
                        <Phone />
                        <div className="contact-number">
                          <h6 className="text-content">Hotline 24/7 :</h6>
                          <h5>{settings?.store_phone}</h5>
                        </div>
                      </div>
                    </li>
                  }

                  {(settings && settings?.store_email) &&
                    <li>
                      <div className="footer-number">
                        <Mail />
                        <div className="contact-number">
                          <h6 className="text-content">Email Address :</h6>
                          <h5>{settings?.store_email}</h5>
                        </div>
                      </div>
                    </li>
                  }

                  
            {(settings && settings?.payment_images) &&
              <div className="payment">
                <img
                  src={settings?.payment_images}
                  className="lazyload"
                  alt=""
                />
              </div>
            }

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
                        <div className='row pt-3' >
                            <div className='pl-1 form-group'>
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
                            className=" mt-2 p-3 sub-btn btn-animation" 
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

                  {(settings && (settings?.android_link || settings?.apple_link)) &&
                    <li className="social-app mb-0">
                    
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-footer section-small-space">

          {(settings && settings?.copyright) &&
            <div className="reserve">
              <h6 className="text-content">{settings?.copyright}</h6>
            </div>
          }

         

          <div className="social-link">
            <h6 className="text-content">Stay connected :</h6>
            <ul>
              {(settings && settings?.sm_facebook) &&
                <li>
                  <a href={settings?.sm_facebook} target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
              }
              {(settings && settings?.sm_twitter) &&
                <li>
                  <a href={settings?.sm_twitter} target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              }
              {(settings && settings?.sm_instagram) &&
                <li>
                  <a href={settings?.sm_instagram} target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              }
              {(settings && settings?.sm_linkedin) &&
                <li>
                  <a href={settings?.sm_linkedin} target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              }
              {(settings && settings?.sm_whatsapp) &&
                <li>
                  <a href={settings?.sm_whatsapp} target="_blank">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
