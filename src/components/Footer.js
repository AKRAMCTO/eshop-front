import React, { useContext } from 'react';
import { DataProvider } from '../contexts/DataContext';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone } from 'react-feather';
import FooterMenu from './FooterMenu';
import FooterCategory from './FooterCategory';

export default function Footer() {
  const { settings, menus } = useContext(DataProvider);

  return (
    <footer className="section-t-space">
      <div className="container-fluid-lg">
        <div className="service-section">
          <div className="row g-3">
            <div className="col-12">
              <div className="service-contain">
                <div className="service-box">
                  <div className="service-image">
                    <img
                      src={require("./../assets/svg/product.png")}
                      className="lazyload"
                      alt=""
                    />
                  </div>

                  <div className="service-detail">
                    <h5>Every Fresh Products</h5>
                  </div>
                </div>

                <div className="service-box">
                  <div className="service-image">
                    <img
                      src={require("./../assets/svg/delivery.png")}
                      className="lazyload"
                      alt=""
                    />
                  </div>

                  <div className="service-detail">
                    <h5>Free Delivery For Order Over $50</h5>
                  </div>
                </div>

                <div className="service-box">
                  <div className="service-image">
                    <img
                      src={require("./../assets/svg/discount.png")}
                      className="lazyload"
                      alt=""
                    />
                  </div>

                  <div className="service-detail">
                    <h5>Daily Mega Discounts</h5>
                  </div>
                </div>

                <div className="service-box">
                  <div className="service-image">
                    <img
                      src={require("./../assets/svg/market.png")}
                      className="lazyload"
                      alt=""
                    />
                  </div>

                  <div className="service-detail">
                    <h5>Best Price On The Market</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

                  {(settings && (settings?.android_link || settings?.apple_link)) &&
                    <li className="social-app mb-0">
                      <h5 className="mb-2 text-content">Download App :</h5>
                      <ul>
                        {(settings && settings?.apple_link) &&
                          <li className="mb-0">
                            <a href={settings?.apple_link} target="_blank">
                              <img
                                src={require("./../assets/images/playstore.png")}
                                className="lazyload"
                                alt=""
                              />
                            </a>
                          </li>
                        }
                        {(settings && settings?.android_link) &&
                          <li className="mb-0">
                            <a href={settings?.android_link} target="_blank">
                              <img
                                src={require("./../assets/images/appstore.png")}
                                className="lazyload"
                                alt=""
                              />
                            </a>
                          </li>
                        }
                      </ul>
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

          {(settings && settings?.payment_images) &&
            <div className="payment">
              <img
                src={settings?.payment_images}
                className="lazyload"
                alt=""
              />
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
