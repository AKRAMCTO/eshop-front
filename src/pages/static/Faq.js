import React from 'react';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../components/Breadcrumb';
import Layout from '../../components/Layout';
import AccordionFaq from '../../components/AccordionFaq';

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
                                    &nbsp;<a href={`/contactez-nous`} className="theme-color text-decoration-underline">contactez notre support.</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="faq-accordion">
                                <div className="accordion" id="accordionExample">
                                    <AccordionFaq
                                        title="Quels avantages de créer un compte client sur Ecowatt.ma?"
                                        collapsed={true}
                                    >
                                        <p>La création d'un compte client sur Ecowatt.ma présente de nombreux avantages. Tout d'abord, cela vous permet de suivre vos commandes en cours et passées, de gérer vos informations personnelles et de bénéficier d'offres exclusives réservées à nos membres. De plus, un compte vous offre une expérience d'achat plus rapide et plus personnalisée, car vos préférences sont enregistrées pour simplifier vos futures commandes. Génère systématiquement vos factures Cumulé des points de fidélité convertible en bons d’achat.</p>
                                    </AccordionFaq>
                                    <AccordionFaq
                                        title="Je ne peux pas me connecter sur Ecowatt.ma. Que faire?"
                                    >
                                        <p>Si vous rencontrez des difficultés pour vous connecter, assurez-vous d'utiliser les bonnes informations d'identification. Si le problème persiste, vous pouvez réinitialiser votre mot de passe en cliquant sur "Mot de passe oublié". Si le problème persiste, n'hésitez pas à contacter notre service client, qui se fera un plaisir de vous aider.</p>
                                    </AccordionFaq>
                                    <AccordionFaq
                                        title="Y a-t-il des frais d'inscription à Ecowatt.ma?"
                                    >
                                        <p>Non, l'inscription sur Ecowatt.ma est totalement gratuite. Nous ne facturons aucun frais d'inscription. Vous pouvez créer votre compte en quelques étapes simples pour profiter de tous les avantages offerts aux membres.</p>
                                    </AccordionFaq>
                                    <AccordionFaq
                                        title="Comment modifier mes informations personnelles sur Ecowatt.ma?"
                                    >
                                        <p>Pour modifier vos informations personnelles, connectez-vous à votre compte et accédez à la section "Mon Compte". Vous trouverez là les options pour mettre à jour vos informations, telles que votre adresse, votre numéro de téléphone, etc.</p>
                                    </AccordionFaq>
                                    <AccordionFaq
                                        title="Comment passer une commande sur Ecowatt.ma?"
                                    >
                                        <p>Pour passer une commande, explorez notre catalogue en ligne, ajoutez les produits désirés à votre panier, puis suivez les étapes du processus de commande. Vous aurez l'occasion de vérifier votre commande avant de finaliser l'achat. Une fois la commande passée avec succès, vous recevrez une confirmation par e-mail.</p>
                                    </AccordionFaq>
                                    <AccordionFaq
                                        title="Quels sont les modes de paiement sur Ecowatt.ma?"
                                    >
                                        <p>Ecowatt.ma propose plusieurs modes de paiement sécurisés, notamment le paiement par carte bancaire, le virement bancaire et d'autres options populaires. Choisissez simplement le mode qui vous convient le mieux au moment du paiement lors de la finalisation de votre commande.</p>
                                    </AccordionFaq>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
