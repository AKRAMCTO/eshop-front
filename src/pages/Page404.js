import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';

import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

export default function Page404() {
    return (
        <Layout>
            <Helmet>
                <title>Page 404 | Ecowatt</title>
            </Helmet>

            <section className="breadscrumb-section pt-0">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadscrumb-contain">
                                <h2>404 Page</h2>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">
                                                <i className="fa-solid fa-house"></i>
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">404</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-404 section-lg-space">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="image-404">
                                <img src={require('./../assets/images/inner-page/404.png')} className="img-fluid blur-up lazyload" alt="" />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="contain-404">
                                <h3 className="text-content">La page que vous recherchez est introuvable. Le lien vers cette adresse est peut-être obsolète ou nous l'avons peut-être déplacé depuis la dernière fois que vous l'avez ajouté à vos favoris.</h3>
                                <Link to={`/`} className="btn d-inline-block btn-md text-white theme-bg-color mt-4 mx-auto">Back To Home Screen</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}