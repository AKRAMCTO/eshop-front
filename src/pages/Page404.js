import React from "react";
import { Link, Redirect, useParams } from 'react-router-dom';

import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/Breadcrumb";

export default function Page404() {
    return (
        <Layout>
            <Helmet>
                <title>Page 404 | Ecowatt</title>
            </Helmet>

            <Breadcrumb title={`Page 404`} />

            <section className="section-404 section-lg-space">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="image-404">
                                <img src={require('./../assets/images/404.png')} className="img-fluid blur-up lazyload" alt="" />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="contain-404">
                                <h3 className="text-content">La page que vous recherchez est introuvable. Le lien vers cette adresse est peut-être obsolète ou nous l'avons peut-être déplacé depuis la dernière fois que vous l'avez ajouté à vos favoris.</h3>
                                <Link to={`/`} className="btn d-inline-block btn-md text-white theme-bg-color mt-4 mx-auto">Retour à l'accueil</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}