import React from 'react';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../components/Breadcrumb';
import Layout from '../../components/Layout';

export default function Faq() {
  return (
    <Layout>
      <Helmet>
        <title>{`Centre d'aide | Ecowatt`}</title>
      </Helmet>

      <Breadcrumb title={`Centre d'aide`} />

      <section className="faq-contain">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row product-wrapper">
                        <div className='col-12 col-md-3'>
                            <div className="faq-top-box">
                                <div className="faq-box-icon">
                                    <img src={require('./../../assets/images/start.png')} alt="" />
                                </div>

                                <div className="faq-box-contain">
                                    <h3>Getting Started</h3>
                                    <p>Bring to the table win-win survival strategies to ensure proactive domination.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-3'>
                            <div className="faq-top-box">
                                <div className="faq-box-icon">
                                    <img src={require('./../../assets/images/help.png')} alt="" />
                                </div>

                                <div className="faq-box-contain">
                                    <h3>Sales Question</h3>
                                    <p>Lorizzle ipsizzle boom shackalack sit get down get down.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className="faq-top-box">
                                <div className="faq-box-icon">
                                    <img src={require('./../../assets/images/price.png')} alt="" />
                                </div>

                                <div className="faq-box-contain">
                                    <h3>Pricing & Plans</h3>
                                    <p>Curabitizzle fizzle break yo neck, yall quis fo shizzle mah nizzle fo rizzle.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className="faq-top-box">
                                <div className="faq-box-icon">
                                    <img src={require('./../../assets/images/contact.png')} alt="" />
                                </div>

                                <div className="faq-box-contain">
                                    <h3>Support Contact</h3>
                                    <p>Gizzle fo shizzle bow wow wow bizzle leo bibendizzle check out this.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="faq-box-contain section-b-space">
          <div className="container">
              <div className="row">
                  <div className="col-xl-5">
                      <div className="faq-contain">
                          <h2>Questions fréquemment posées</h2>
                          <p>
                            Nous répondons aux questions les plus fréquentes. Ne vous inquiétez pas si vous n’en trouvez pas exactement. Vous pouvez en savoir plus en recherchant ou en continuant à cliquer sur le bouton ci-dessous ou directement 
                            <a href={`/contactez-nous`} className="theme-color text-decoration-underline">contactez notre support.</a>
                          </p>
                      </div>
                  </div>
                  <div className="col-xl-7">
                      <div className="faq-accordion">
                          <div className="accordion" id="accordionExample">
                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingOne">
                                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          Quels avantages de créer un compte client sur Ecowatt.ma? <i className="fa-solid fa-angle-down"></i>
                                      </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse show"
                                      aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                          <p>La création d'un compte client sur Ecowatt.ma présente de nombreux avantages. Tout d'abord, cela vous permet de suivre vos commandes en cours et passées, de gérer vos informations personnelles et de bénéficier d'offres exclusives réservées à nos membres. De plus, un compte vous offre une expérience d'achat plus rapide et plus personnalisée, car vos préférences sont enregistrées pour simplifier vos futures commandes. Génère systématiquement vos factures 
                                              Cumulé des points de fidélité convertible en bons d’achat.</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          Je ne peux pas me connecter sur Ecowatt.ma. Que faire? <i
                                              className="fa-solid fa-angle-down"></i>
                                      </button>
                                  </h2>
                                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                      data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                          <p>Si vous rencontrez des difficultés pour vous connecter, assurez-vous d'utiliser les bonnes informations d'identification. Si le problème persiste, vous pouvez réinitialiser votre mot de passe en cliquant sur "Mot de passe oublié". Si le problème persiste, n'hésitez pas à contacter notre service client, qui se fera un plaisir de vous aider.</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseThree" aria-expanded="false"
                                          aria-controls="collapseThree">
                                          Y a-t-il des frais d'inscription à Ecowatt.ma?<i className="fa-solid fa-angle-down"></i>
                                      </button>
                                  </h2>
                                  <div id="collapseThree" className="accordion-collapse collapse"
                                      aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                          <p>Non, l'inscription sur Ecowatt.ma est totalement gratuite. Nous ne facturons aucun frais d'inscription. Vous pouvez créer votre compte en quelques étapes simples pour profiter de tous les avantages offerts aux membres.</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingFour">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseFour" aria-expanded="true"
                                          aria-controls="collapseFour">
                                          Comment modifier mes informations personnelles sur Ecowatt.ma?<i className="fa-solid fa-angle-down"></i>
                                      </button>
                                  </h2>
                                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                      data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                          <p>Pour modifier vos informations personnelles, connectez-vous à votre compte et accédez à la section "Mon Compte". Vous trouverez là les options pour mettre à jour vos informations, telles que votre adresse, votre numéro de téléphone, etc.</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingFive">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseFive" aria-expanded="false"
                                          aria-controls="collapseFive">
                                          Comment passer une commande sur Ecowatt.ma? <i className="fa-solid fa-angle-down"></i>
                                      </button>
                                  </h2>
                                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                      data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                          <p>Pour passer une commande, explorez notre catalogue en ligne, ajoutez les produits désirés à votre panier, puis suivez les étapes du processus de commande. Vous aurez l'occasion de vérifier votre commande avant de finaliser l'achat. Une fois la commande passée avec succès, vous recevrez une confirmation par e-mail.</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingSix">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                          Quels sont les modes de paiement sur Ecowatt.ma? <i
                                              className="fa-solid fa-angle-down"></i>
                                      </button>
                                  </h2>
                                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                      data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                          <p>Ecowatt.ma propose plusieurs modes de paiement sécurisés, notamment le paiement par carte bancaire, le virement bancaire et d'autres options populaires. Choisissez simplement le mode qui vous convient le mieux au moment du paiement lors de la finalisation de votre commande.</p>
                                      </div>
                                  </div>
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
