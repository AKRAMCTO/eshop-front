import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../components/Breadcrumb';
import Layout from '../../components/Layout';

export default function Contact() {
    const [isActive, setIsActive] = useState('agadir')
  return (
    <Layout>
      <Helmet>
        <title>{`Contactez-nous | Ecowatt`}</title>
      </Helmet>

      <Breadcrumb title={`Contactez-nous`} />

      <section>
        <div className="container-fluid-lg mb-5">
          <div className="row">
              <div className="col-12">
                  <div className="product-section-box m-0">
                      <ul className="nav nav-tabs custom-nav" id="myTab" role="tablist">
                          <li className="nav-item">
                              <button className={`nav-link ${(isActive === 'agadir') ? 'active' : ''}`} type="button" onClick={() => setIsActive('agadir')}>AGADIR</button>
                          </li>

                          <li className="nav-item">
                              <button className={`nav-link ${(isActive === 'fkih-ben-salh') ? 'active' : ''}`} type="button" onClick={() => setIsActive('fkih-ben-salh')}>FKIH BEN SalH</button>
                          </li>

                          <li className="nav-item">
                              <button className={`nav-link ${(isActive === 'oujda') ? 'active' : ''}`} type="button" onClick={() => setIsActive('oujda')}>OUJDA</button>
                          </li>
                          <li className="nav-item">
                              <button className={`nav-link ${(isActive === 'meknes') ? 'active' : ''}`} type="button" onClick={() => setIsActive('meknes')}>MEKNES</button>
                          </li>
                      </ul>
                      
                      <div className="tab-content custom-tab">
                          <div className={`tab-pane fade ${(isActive === 'agadir') ? 'show active' : ''}`}>
                              <div className="product-description">
                                  <section className="contact-box-section">
                                      <div className="container-fluid-lg">
                                          <div className="row g-lg-5 g-3">
                                              <div className="col-lg-6">
                                                  <div className="left-sidebar-box">
                                                      <div className="row">
                                                          <div className="col-xl-12">
                                                              <div className="contact-detail">
                                                                  <div className="row g-4">
                                                                      <div className="col-xxl-12 col-lg-12 col-sm-6 mb-5">
                                                                          <div className="contact-detail-box">
                                                                              <div className="contact-icon">
                                                                                  <i
                                                                                      className="fa-solid fa-location-dot"></i>
                                                                              </div>
                                                                              <div className="contact-detail-title">
                                                                                  <h4>AGENCE AGADIR</h4>
                                                                              </div>
                                                                              <div className="contact-detail-contain">
                                                                                  <p>Rue d’Inzegane route de
                                                                                      l’hopital, El Harch,Ait Melloul.
                                                                                  </p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>

                                                          <div className="col-xl-12 mb-5">
                                                              <div className="contact-title">
                                                                  <h3>Chargé d'Affaires</h3>
                                                              </div>

                                                              <div className="contact-detail">
                                                                  <div className="row g-4">
                                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                                          <div className="contact-detail-box">
                                                                              <div className="contact-icon">
                                                                                  <i className="fa-solid fa-user"></i>
                                                                              </div>
                                                                              <div className="contact-detail-title">
                                                                                  <h4>M</h4>
                                                                              </div>

                                                                              <div className="contact-detail-contain">
                                                                                  <p>WALID TELBANI</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                                          <div className="contact-detail-box">
                                                                              <div className="contact-icon">
                                                                                  <i className="fa-solid fa-phone"></i>
                                                                              </div>
                                                                              <div className="contact-detail-title">
                                                                                  <h4>Téléphone</h4>
                                                                              </div>

                                                                              <div className="contact-detail-contain">
                                                                                  <p>+212 662 084 616</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>

                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div className="col-xl-12">
                                                              <div className="contact-title">
                                                                  <h3>Chargé d'Affaires</h3>
                                                              </div>

                                                              <div className="contact-detail">
                                                                  <div className="row g-4">
                                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                                          <div className="contact-detail-box">
                                                                              <div className="contact-icon">
                                                                                  <i className="fa-solid fa-user"></i>
                                                                              </div>
                                                                              <div className="contact-detail-title">
                                                                                  <h4>M</h4>
                                                                              </div>

                                                                              <div className="contact-detail-contain">
                                                                                  <p>Jassim Chafai</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                                          <div className="contact-detail-box">
                                                                              <div className="contact-icon">
                                                                                  <i className="fa-solid fa-phone"></i>
                                                                              </div>
                                                                              <div className="contact-detail-title">
                                                                                  <h4>Téléphone</h4>
                                                                              </div>

                                                                              <div className="contact-detail-contain">
                                                                                  <p>+212 667 634 470</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>

                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>

                                              <div className="col-lg-6">
                                                  <div className="title d-xxl-none d-block">
                                                      <h2>Contactez-nous</h2>
                                                  </div>
                                                  <div className="right-sidebar-box">
                                                      <div className="row">
                                                          <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                              <div className="mb-md-4 mb-3 custom-form">
                                                                  <label for="exampleFormControlInput"
                                                                      className="form-label">Prénom</label>
                                                                  <div className="custom-input">
                                                                      <input type="text" className="form-control"
                                                                          id="exampleFormControlInput"
                                                                          placeholder="Entrez votre prénom" />
                                                                      <i className="fa-solid fa-user"></i>
                                                                  </div>
                                                              </div>
                                                          </div>

                                                          <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                              <div className="mb-md-4 mb-3 custom-form">
                                                                  <label for="exampleFormControlInput1"
                                                                      className="form-label">Nom</label>
                                                                  <div className="custom-input">
                                                                      <input type="text" className="form-control"
                                                                          id="exampleFormControlInput1"
                                                                          placeholder="Entrer le nom de famille" />
                                                                      <i className="fa-solid fa-user"></i>
                                                                  </div>
                                                              </div>
                                                          </div>

                                                          <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                              <div className="mb-md-4 mb-3 custom-form">
                                                                  <label for="exampleFormControlInput2"
                                                                      className="form-label">Adresse e-mail</label>
                                                                  <div className="custom-input">
                                                                      <input type="email" className="form-control"
                                                                          id="exampleFormControlInput2"
                                                                          placeholder="Entrer l'adresse e-mail" />
                                                                      <i className="fa-solid fa-envelope"></i>
                                                                  </div>
                                                              </div>
                                                          </div>

                                                          <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                              <div className="mb-md-4 mb-3 custom-form">
                                                                  <label for="exampleFormControlInput3"
                                                                      className="form-label">Numéro de téléphone</label>
                                                                  <div className="custom-input">
                                                                      <input type="tel" className="form-control"
                                                                          id="exampleFormControlInput3"
                                                                          placeholder="Entrez votre numéro de téléphone"
                                                                          maxlength="10" />
                                                                      <i className="fa-solid fa-mobile-screen-button"></i>
                                                                  </div>
                                                              </div>
                                                          </div>

                                                          <div className="col-12">
                                                              <div className="mb-md-4 mb-3 custom-form">
                                                                  <label for="exampleFormControlTextarea"
                                                                      className="form-label">Message</label>
                                                                  <div className="custom-textarea">
                                                                      <textarea className="form-control"
                                                                          id="exampleFormControlTextarea"
                                                                          placeholder="Entrez votre message"
                                                                          rows="6"></textarea>
                                                                      <i className="fa-solid fa-message"></i>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <button className="btn btn-animation btn-md fw-bold ms-auto">Envoyer
                                                          le message</button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </section>
                                  <section className="map-section">
                                      <div className="container-fluid p-0">
                                          <div className="map-box">
                                              <iframe
                                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.209193272619!2d-9.50208119096326!3d30.34500409915027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c78d508d4211%3A0xbf1aa8a288badc6c!2sECOWATT!5e0!3m2!1sen!2sma!4v1663781258853!5m2!1sen!2sma"
                                                  allowfullscreen="" loading="lazy"
                                                  referrerpolicy="no-referrer-when-downgrade"></iframe>
                                          </div>
                                      </div>
                                  </section>
                              </div>
                          </div>
                          <div className={`tab-pane fade ${(isActive === 'fkih-ben-salh') ? 'show active' : ''}`}>
                              <section className="contact-box-section">
                                  <div className="container-fluid-lg">
                                      <div className="row g-lg-5 g-3">
                                          <div className="col-lg-6">
                                              <div className="left-sidebar-box">
                                                  <div className="row">
                                                      <div className="col-xl-12">
                                                          <div className="contact-detail">
                                                              <div className="row g-4">
                                                                  <div className="col-xxl-12 col-lg-12 col-sm-6 mb-5">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-location-dot"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>AGENCE FKIH BEN SALH</h4>
                                                                          </div>
                                                                          <div className="contact-detail-contain">
                                                                              <p>N°422 Avenu Al Massira, Fkih Ben
                                                                                  Salah.</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="col-xl-12 mb-5">
                                                          <div className="contact-title">
                                                              <h3>Représentant commercial</h3>
                                                          </div>
                                                          <div className="contact-detail">
                                                              <div className="row g-4">
                                                                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-user"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>M</h4>
                                                                          </div>
                                                                          <div className="contact-detail-contain">
                                                                              <p>HAMID BOULASSAIR </p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-phone"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>Téléphone</h4>
                                                                          </div>
                                                                          <div className="contact-detail-contain">
                                                                              <p>+212 666 955 890</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-xl-12 mb-5">
                                                          <div className="contact-title">
                                                              <h3>Représentant commercial</h3>
                                                          </div>

                                                          <div className="contact-detail">
                                                              <div className="row g-4">
                                                                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-user"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>M</h4>
                                                                          </div>

                                                                          <div className="contact-detail-contain">
                                                                              <p>Lahcen Ouaa</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-phone"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>Téléphone</h4>
                                                                          </div>

                                                                          <div className="contact-detail-contain">
                                                                              <p>+212 666 871 830</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>

                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="col-lg-6">
                                              <div className="title d-xxl-none d-block">
                                                  <h2>Contactez-nous</h2>
                                              </div>
                                              <div className="right-sidebar-box">
                                                  <div className="row">
                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlInput"
                                                                  className="form-label">Prénom</label>
                                                              <div className="custom-input">
                                                                  <input type="text" className="form-control"
                                                                      id="exampleFormControlInput"
                                                                      placeholder="Entrez votre prénom" />
                                                                  <i className="fa-solid fa-user"></i>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlInput1"
                                                                  className="form-label">Nom</label>
                                                              <div className="custom-input">
                                                                  <input type="text" className="form-control"
                                                                      id="exampleFormControlInput1"
                                                                      placeholder="Entrer le nom de famille" />
                                                                  <i className="fa-solid fa-user"></i>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlInput2"
                                                                  className="form-label">Adresse e-mail</label>
                                                              <div className="custom-input">
                                                                  <input type="email" className="form-control"
                                                                      id="exampleFormControlInput2"
                                                                      placeholder="Entrer l'adresse e-mail" />
                                                                  <i className="fa-solid fa-envelope"></i>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlInput3"
                                                                  className="form-label">Numéro de téléphone</label>
                                                              <div className="custom-input">
                                                                  <input type="tel" className="form-control"
                                                                      id="exampleFormControlInput3"
                                                                      placeholder="Entrez votre numéro de téléphone"
                                                                      maxlength="10" />
                                                                  <i className="fa-solid fa-mobile-screen-button"></i>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-12">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlTextarea"
                                                                  className="form-label">Message</label>
                                                              <div className="custom-textarea">
                                                                  <textarea className="form-control"
                                                                      id="exampleFormControlTextarea"
                                                                      placeholder="Entrez votre message"
                                                                      rows="6"></textarea>
                                                                  <i className="fa-solid fa-message"></i>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <button className="btn btn-animation btn-md fw-bold ms-auto">Envoyer
                                                      le message</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </section>
                              <section className="map-section">
                                  <div className="container-fluid p-0">
                                      <div className="map-box">
                                          <iframe
                                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.8303657926094!2d-6.676777884824889!3d32.50396278105525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5fabfb9512eedbc!2zMzLCsDMwJzE0LjMiTiA2wrA0MCcyOC41Ilc!5e0!3m2!1sfr!2sma!4v1664274121315!5m2!1sfr!2sma"
                                              allowfullscreen="" loading="lazy"
                                              referrerpolicy="no-referrer-when-downgrade"></iframe>
                                      </div>
                                  </div>
                              </section>
                          </div>
                          <div className={`tab-pane fade ${(isActive === 'oujda') ? 'show active' : ''}`}>
                              <section className="contact-box-section">
                                  <div className="container-fluid-lg">
                                      <div className="row g-lg-5 g-3">
                                          <div className="col-lg-6">
                                              <div className="left-sidebar-box">
                                                  <div className="row">
                                                      <div className="col-xl-12">
                                                          <div className="contact-detail">
                                                              <div className="row g-4">
                                                                  <div className="col-xxl-12 col-lg-12 col-sm-6 mb-5">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-location-dot"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>AGENCE OUJDA</h4>
                                                                          </div>
                                                                          <div className="contact-detail-contain">
                                                                              <p>LTS Boubcher RTE Maghnia N°195 Oujda
                                                                              </p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="col-xl-12 mb-5">
                                                          <div className="contact-title">
                                                              <h3>Chargé d'affaire</h3>
                                                          </div>

                                                          <div className="contact-detail">
                                                              <div className="row g-4">
                                                                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-user"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>M</h4>
                                                                          </div>

                                                                          <div className="contact-detail-contain">
                                                                              <p>ABDERAHMAN KADDOURI</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-phone"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>Téléphone</h4>
                                                                          </div>

                                                                          <div className="contact-detail-contain">
                                                                              <p>+212 662 770 985</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>

                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-xl-12 mb-5">
                                                          <div className="contact-title">
                                                              <h3>Représentant commercial</h3>
                                                          </div>

                                                          <div className="contact-detail">
                                                              <div className="row g-4">
                                                                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-user"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>M</h4>
                                                                          </div>

                                                                          <div className="contact-detail-contain">
                                                                              <p>Mohmed khlifi</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-phone"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>Téléphone</h4>
                                                                          </div>

                                                                          <div className="contact-detail-contain">
                                                                              <p>+212 666 977 814</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>

                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="col-lg-6">
                                              <div className="title d-xxl-none d-block">
                                                  <h2>Contactez-nous</h2>
                                              </div>
                                              <div className="right-sidebar-box">
                                                  <div className="row">
                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlInput"
                                                                  className="form-label">Prénom</label>
                                                              <div className="custom-input">
                                                                  <input type="text" className="form-control"
                                                                      id="exampleFormControlInput"
                                                                      placeholder="Entrez votre prénom" />
                                                                  <i className="fa-solid fa-user"></i>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlInput1"
                                                                  className="form-label">Nom</label>
                                                              <div className="custom-input">
                                                                  <input type="text" className="form-control"
                                                                      id="exampleFormControlInput1"
                                                                      placeholder="Entrer le nom de famille" />
                                                                  <i className="fa-solid fa-user"></i>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlInput2"
                                                                  className="form-label">Adresse e-mail</label>
                                                              <div className="custom-input">
                                                                  <input type="email" className="form-control"
                                                                      id="exampleFormControlInput2"
                                                                      placeholder="Entrer l'adresse e-mail" />
                                                                  <i className="fa-solid fa-envelope"></i>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlInput3"
                                                                  className="form-label">Numéro de téléphone</label>
                                                              <div className="custom-input">
                                                                  <input type="tel" className="form-control"
                                                                      id="exampleFormControlInput3"
                                                                      placeholder="Entrez votre numéro de téléphone"
                                                                      maxlength="10" />
                                                                  <i className="fa-solid fa-mobile-screen-button"></i>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-12">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlTextarea"
                                                                  className="form-label">Message</label>
                                                              <div className="custom-textarea">
                                                                  <textarea className="form-control"
                                                                      id="exampleFormControlTextarea"
                                                                      placeholder="Entrez votre message"
                                                                      rows="6"></textarea>
                                                                  <i className="fa-solid fa-message"></i>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <button className="btn btn-animation btn-md fw-bold ms-auto">Envoyer
                                                      le message</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </section>
                              <section className="map-section pb-5">
                                  <div className="container-fluid p-0">
                                      <div className="map-box">
                                          <iframe
                                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.2119651804105!2d-1.8986944000000001!3d34.6998333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMzTCsDQxJzU5LjQiTiAxwrA1Myc1NS4zIlc!5e0!3m2!1sen!2sma!4v1664274085111!5m2!1sen!2sma"
                                              allowfullscreen="" loading="lazy"
                                              referrerpolicy="no-referrer-when-downgrade"></iframe>
                                      </div>
                                  </div>
                              </section>
                          </div>
                          <div className={`tab-pane fade ${(isActive === 'meknes') ? 'show active' : ''}`}>
                              <section className="contact-box-section">
                                  <div className="container-fluid-lg">
                                      <div className="row g-lg-5 g-3">
                                          <div className="col-lg-6">
                                              <div className="left-sidebar-box">
                                                  <div className="row">
                                                      <div className="col-xl-12">
                                                          <div className="contact-detail">
                                                              <div className="row g-4">
                                                                  <div className="col-xxl-12 col-lg-12 col-sm-6 mb-5">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-location-dot"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>AGENCE MEKNES</h4>
                                                                          </div>
                                                                          <div className="contact-detail-contain">
                                                                              <p>LTS Boubcher RTE Maghnia N°195 Oujda
                                                                              </p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="col-xl-12 mb-5">
                                                          <div className="contact-title">
                                                              <h3>Chargé d'affaire</h3>
                                                          </div>

                                                          <div className="contact-detail">
                                                              <div className="row g-4">
                                                                  <div className="col-xxl-12 col-lg-12 col-sm-6">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-user"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>M</h4>
                                                                          </div>

                                                                          <div className="contact-detail-contain">
                                                                              <p>ABDERAHMAN KADDOURI </p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div className="col-xxl-12 col-lg-12 col-sm-6">
                                                                      <div className="contact-detail-box">
                                                                          <div className="contact-icon">
                                                                              <i className="fa-solid fa-phone"></i>
                                                                          </div>
                                                                          <div className="contact-detail-title">
                                                                              <h4>Téléphone</h4>
                                                                          </div>

                                                                          <div className="contact-detail-contain">
                                                                              <p>+212 662 770 985</p>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="col-lg-6">
                                              <div className="title d-xxl-none d-block">
                                                  <h2>Contactez-nous</h2>
                                              </div>
                                              <div className="right-sidebar-box">
                                                  <div className="row">
                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlInput"
                                                                  className="form-label">Prénom</label>
                                                              <div className="custom-input">
                                                                  <input type="text" className="form-control"
                                                                      id="exampleFormControlInput"
                                                                      placeholder="Entrez votre prénom" />
                                                                  <i className="fa-solid fa-user"></i>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlInput1"
                                                                  className="form-label">Nom</label>
                                                              <div className="custom-input">
                                                                  <input type="text" className="form-control"
                                                                      id="exampleFormControlInput1"
                                                                      placeholder="Entrer le nom de famille" />
                                                                  <i className="fa-solid fa-user"></i>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlInput2"
                                                                  className="form-label">Adresse e-mail</label>
                                                              <div className="custom-input">
                                                                  <input type="email" className="form-control"
                                                                      id="exampleFormControlInput2"
                                                                      placeholder="Entrer l'adresse e-mail" />
                                                                  <i className="fa-solid fa-envelope"></i>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-xxl-6 col-lg-12 col-sm-6">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlInput3"
                                                                  className="form-label">Numéro de téléphone</label>
                                                              <div className="custom-input">
                                                                  <input type="tel" className="form-control"
                                                                      id="exampleFormControlInput3"
                                                                      placeholder="Entrez votre numéro de téléphone"
                                                                      maxlength="10" />
                                                                  <i className="fa-solid fa-mobile-screen-button"></i>
                                                              </div>
                                                          </div>
                                                      </div>

                                                      <div className="col-12">
                                                          <div className="mb-md-4 mb-3 custom-form">
                                                              <label for="exampleFormControlTextarea"
                                                                  className="form-label">Message</label>
                                                              <div className="custom-textarea">
                                                                  <textarea className="form-control"
                                                                      id="exampleFormControlTextarea"
                                                                      placeholder="Entrez votre message"
                                                                      rows="6"></textarea>
                                                                  <i className="fa-solid fa-message"></i>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <button className="btn btn-animation btn-md fw-bold ms-auto">Envoyer le message</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </section>
                              <section className="map-section pb-5">
                                  <div className="container-fluid p-0">
                                      <div className="map-box">
                                          <iframe
                                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.2119651804105!2d-1.8986944000000001!3d34.6998333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMzTCsDQxJzU5LjQiTiAxwrA1Myc1NS4zIlc!5e0!3m2!1sen!2sma!4v1664274085111!5m2!1sen!2sma"
                                              allowfullscreen="" loading="lazy"
                                              referrerpolicy="no-referrer-when-downgrade"></iframe>
                                      </div>
                                  </div>
                              </section>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
