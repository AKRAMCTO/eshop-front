import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';

import Breadcrumb from '../../components/Breadcrumb';
import Layout from '../../components/Layout';

export default function About() {
    const slide1 = {
        dots: false,
        infinite: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 478,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const slide2 = {
        dots: true,
        infinite: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 478,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const slide3 = {
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 478,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const slide4 = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 478,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Layout>
            <Helmet>
                <title>{`À propos de nous | Ecowatt`}</title>
            </Helmet>

            <Breadcrumb title={`À propos de nous`} />

            <section className="fresh-vegetable-section section-lg-space">
                <div className="container-fluid-lg">
                    <div className="row gx-xl-5 gy-xl-0 g-3 ratio_148_1">
                        <div className="col-xl-6 col-12">
                            <div className="row g-sm-4 g-2">
                                <div className="col-6">
                                    <div className="fresh-image-2">
                                        <div>
                                            <img src={require('./../../assets/images/Entreprise.webp')} className="bg-img" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="fresh-image">
                                        <div>
                                            <img src={require('./../../assets/images/about-2.jpg')} className="bg-img" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-12">
                            <div className="fresh-contain p-center-left">
                                <div>
                                    <div className="review-title pb-3">
                                        <h2>L’ENTREPRISE</h2>
                                        <h4>ECOWATT est une société marocaine spécialisée dans l’électricité industrielle et de l’énergie solaire, Basée à Agadir et intervient dans différentes villes et régions du Royaume (Agadir, Marrakech, Beni Mellal, Rabat, Meknès, Fès, Oujda et Er-Rachidia).</h4>
                                    </div>

                                    <div className="delivery-list">
                                        <p className="text-content">L’ offre ECOWATT est destinée à tous types de clients qui opèrent dans différents secteurs d’activités</p>
                                        <ul className="delivery-box">
                                            <li>
                                                <div className="delivery-box">
                                                    <div className="check-icon">
                                                        <i className="fa-solid fa-check-circle"></i>
                                                    </div>

                                                    <div className="delivery-detail">
                                                        <h5 className="text">Entreprises et Industries</h5>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="delivery-box">
                                                    <div className="contact-icon">
                                                        <i className="fa-solid fa-check-circle"></i>
                                                    </div>

                                                    <div className="delivery-detail">
                                                        <h5 className="text">Exploitations agricoles</h5>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="delivery-box">
                                                    <div className="contact-icon">
                                                        <i className="fa-solid fa-check-circle"></i>
                                                    </div>

                                                    <div className="delivery-detail">
                                                        <h5 className="text">Collectivités & bâtiments collectifs privés</h5>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="delivery-box">
                                                    <div className="contact-icon">
                                                        <i className="fa-solid fa-check-circle"></i>
                                                    </div>

                                                    <div className="delivery-detail">
                                                        <h5 className="text">Etablissements sociaux et hospitaliers</h5>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="delivery-box">
                                                    <div className="contact-icon">
                                                        <i className="fa-solid fa-check-circle"></i>
                                                    </div>

                                                    <div className="delivery-detail">
                                                        <h5 className="text">Etablissements sociaux et hospitaliers</h5>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="delivery-box">
                                                    <div className="contact-icon">
                                                        <i className="fa-solid fa-check-circle"></i>
                                                    </div>

                                                    <div className="delivery-detail">
                                                        <h5 className="text">Etablissements universitaires • Particuliers</h5>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="client-section section-lg-space">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="about-us-title text-center">
                                <h4>NOTRE​SAVOIR FAIRE</h4>
                                <h2 className="center">We are Trusted by Clients</h2>
                            </div>

                            <Slider {...slide1} className="slider-3_1 product-wrapper">
                                <div>
                                    <div className="clint-contain">
                                        <h4>Business Years</h4>
                                        <p>Ecowatt a mise tout son capital sur le développement d’une expertise technique par rapport à toute ses interventions. Et ce moyennant une stratégie basée sur l’amélioration continue des collaborateurs de ses équipes. Ecowatt, suit actuellement toutes les directives des normes internationales mises en vigueur pour réussir toutes ses missions techniques, et pour réaliser un seul objectif. Contribuer à la réduction effective de la facture énergétique de ses clients et limites leurs dépendances énergétiques.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="clint-contain">
                                        <h4>LA FONDATION</h4>
                                        <p>La fondation est en béton armé. Elle répond aux exigences du projet. Elle varie en fonction des spécifications du terrain.​ Le génie civil commence après la validation de notre Bureau d’études après validation des notes de calculs et des contraintes architecturales (Encrage dans le terrain, risque de glissement, charge sismique, exigence locale de vent...).
                                            Ecowatt réalise des fondations polyvalentes qui respectent l’esthétique et sont à la fois ajustables sur tout type de terrain et fonctionnelles. Ladite a été conçu pour une pose facile et rapide des structures/panneaux.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="clint-contain">
                                        <h4>LA STRUCTURE MÉTALLIQUE</h4>
                                        <p>Est l’élément-clé dans l’installation qui fournit l’inclinaison appropriée dans laquelle les modules recevront le maximum de rayonnement.
                                            Ecowatt offre une structure entièrement galvanisée et démontable qui respecte la norme CM 66 et fait face au soulèvement de vent nord à 120 km/h.
                                            <br />• Assemblage direct sur la fondation​.
                                            <br />• Facile a assemblé et à démonter​.
                                            <br />• Dimensions sur-mesure et selon exigences du terrain​.
                                            <br />• Acier galvanisé ou aluminium.
                                            <br />• Inclinaison offrant le rendement optimal​ selon le besoin du client​.
                                            <br />• Élément d’assemblage en INOX.
                                        </p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-section section-lg-space">
                <div className="container-fluid-lg">
                    <div className="about-us-title text-center">
                        <h4 className="text-content">Notre équipe</h4>
                        <h2 className="center">Voilà Pourquoi Nous Sommes Le Bon Partenaire</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider {...slide2} className="slider-user product-wrapper">
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/yassine-22.56.29.webp')} className="img-fluid" alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Yassine ALJ</h3>
                                            <h5>Directeur Développement</h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/Hamid_boulaasir.jpg')} className="img-fluid" alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Hamid Boulaasir</h3>
                                            <h5>Chargé d'affaire - </h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/Saida_sidki.jpg')} className="img-fluid" alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Saida sidki</h3>
                                            <h5>Office Manager - Zone fkih ben salah</h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/Lahcen_ouaa.jpg')} className="img-fluid"
                                                alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Lahcen Ouaa</h3>
                                            <h5>Chargé d'Affaires - Fkih Ben Salah
                                            </h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/Jassim_chafai.jpg')} className="img-fluid"
                                                alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Jassim Chafai</h3>
                                            <h5>Office Manager</h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/Hassna_EL_kassba.jpg')} className="img-fluid"
                                                alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Hassna EL kassba</h3>
                                            <h5>Service Achat</h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/Mohmed_khlifi.jpg')} className="img-fluid"
                                                alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Mohmed khlifi</h3>
                                            <h5>Chargé d'Affaires</h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/Mohmed_AMine_Bouras.jpg')} className="img-fluid"
                                                alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Mohmed Amine Bouras</h3>
                                            <h5>Office Manager - Zone fkih ben salah</h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/Akram_blila.jpg')} className="img-fluid"
                                                alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Akram Blila</h3>
                                            <h5>IT Manager</h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/saida_bohrim.jpg')} className="img-fluid"
                                                alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Saida Bohrim</h3>
                                            <h5>Office Manager - Zone Oujda</h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/Mohme_Amine_Zouhri.jpg')} className="img-fluid"
                                                alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Mohmed Amine Zouhri</h3>
                                            <h5>Responsable Marketing Digital</h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/Kaddouri-22.56.29.webp')} className="img-fluid"
                                                alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Abderrahmane KADDOURI</h3>
                                            <h5>Représentant commercial - Zone Oujda</h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="team-box">
                                        <div className="team-iamge">
                                            <img src={require('./../../assets/images/walid-photo.webp')} className="img-fluid"
                                                alt="" />
                                        </div>

                                        <div className="team-name">
                                            <h3>Wallid TELBANI</h3>
                                            <h5>Chargé d'Affaires</h5>
                                            <ul className="team-media">
                                                <li>
                                                    <a href="https://www.facebook.com/" className="fb-bg">
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://in.pinterest.com/" className="fb-bg">
                                                        <i className="fa-brands fa-telegram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section className="review-section section-lg-space">
                <div className="container-fluid-lg">
                    <div className="about-us-title text-center">
                        <h4 className="text-content">ECOWATT OPÈRE DANS​ TOUT LE TERRITOIRE DU ROYAUME​</h4>
                        <h2 className="center">Le système d’intervention et d’installation ​ ECOWATT est polyvalent et rapide</h2>
                    </div>
                    <Slider {...slide3} className="slider-4-half product-wrapper">
                        <div>
                            <div className="reviewer-box">
                                <h3>Ecowatt</h3>

                                <p>"intervient en amant  des projets en faisant des diagnostics énergétiques permettant d’avoir une visibilité claire par rapport à la situation énergétique de référence avant toute intervention.​"</p>
                            </div>
                        </div>
                        <div>
                            <div className="reviewer-box">
                                <h3>Ecowatt</h3>

                                <p>"Propose des solutions adaptées à vos besoins spécifiques ainsi qu’à vos activités particulières.​ "</p>
                            </div>
                        </div>
                        <div>
                            <div className="reviewer-box">
                                <h3>Ecowatt</h3>

                                <p>"Intervient aussi en aval des projets à travers Un suivi rigoureux des rendements liés au   fonctionnement des installations et leur promotion sur le territoire."</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="section-lg-space">
                <div className="container-fluid-lg">
                    <div className="about-us-title text-center">
                        <h4 className="text-content">Nos services</h4>
                        <h2 className="center">Vous pouvez bénéficier de nos services</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider {...slide4} className="slider-5 ratio_87">
                                <div>
                                    <div className="blog-box">
                                        <div className="blog-box-image">
                                            <div className="blog-image">
                                                <a href="" className="rounded-3">
                                                    <img src={require('./../../assets/images/ASSISTANCE-TECHNIQUE-768x623.webp')} className="bg-img"
                                                        alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <a href="" className="blog-detail d-block">
                                            <h6>Assistance Technique</h6>
                                            <p>Nos techniciens bien formés vous accompagnent pour assurer le suivi technique de votre projet et le bon fonctionnement dumatériel. ..</p>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="blog-box">
                                        <div className="blog-box-image">
                                            <div className="blog-image">
                                                <a href="" className="rounded-3">
                                                    <img src={require('./../../assets/images/INSTALLATION-AUX-ENERGIES-RENOUVELABLES-768x623.webp')} className="bg-img"
                                                        alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <a href="" className="blog-detail d-block">
                                            <h6>Installation </h6>
                                            <p>Ecowatt vous accompagne dans votre projet de rénovation grâce au professionnalisme de nos installateurs. …</p>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="blog-box">
                                        <div className="blog-box-image">
                                            <div className="blog-image">
                                                <a href="#" className="rounded-3">
                                                    <img src={require('./../../assets/images/Image-service.jpg')} className="bg-img"
                                                        alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <a href="#" className="blog-detail d-block">
                                            <h6>Service après-vente​</h6>
                                            <p>Ecowatt apporte son expertise pour le suivi et la maintenance de ses installations. Un service après-vente est garanti …</p>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="blog-box">
                                        <div className="blog-box-image">
                                            <div className="blog-image">
                                                <a href="#" className="rounded-3">
                                                    <img src={require('./../../assets/images/Livraison-768x623.webp')} className="bg-img"
                                                        alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <a href="#" className="blog-detail d-block">
                                            <h6>Livraison</h6>
                                            <p>Ecowatt veille sur la qualité de ses produits et sur votre confort.​ Nous vous offrons un service de livraison caractérisé ….</p>
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
