import React from "react";
import { Helmet } from "react-helmet";
import { useParams, redirect } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

import Layout from "../components/Layout";
import { useQuery } from "react-query";
import { getPage } from "../queries/queries";

export default function DynamiquePage() {
    const { page } = useParams();
    const { data, isLoading, error } = useQuery(
        ['getPage', page],
        () => getPage(page),
        { retry: true, refetchOnWindowFocus: false, keepPreviousData: true }
    );


    if (isLoading) {
        return (
            <div className="min-vh-100 px-4 py-2 d-flex align-items-center justify-content-center">
                <Helmet>
                    <title>Loading... | Ecowatt</title>
                </Helmet>
                <InfinitySpin
                    type="ThreeDots"
                    color="#2A3466"
                    height={220}
                    width={220}
                    visible={isLoading}
                />
            </div>
        );
    }
    if (error) {
        if (error.response.data.redirect)
        return <redirect to={`/page-404`} />;
    }
    return (
        <Layout>
            <Helmet>
                <title>{`${data?.title} | Ecowatt`}</title>
            </Helmet>

            <section className="breadscrumb-section pt-0">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadscrumb-contain">
                                <h2>Page</h2>
                                <nav>
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">
                                                <i className="fa-solid fa-house"></i>
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">{data.title}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-404 section-lg-space">
                <div className="container-fluid-lg">
                    <div className="about-us-title">
                        <h1 className="text-3xl mb-5 text-center">{data?.title}</h1>
                        {data?.description && (
                            <div className="text-content">
                                <div
                                    className={`inner_html`}
                                    dangerouslySetInnerHTML={{
                                        __html: data?.description,
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </Layout>
    );
}