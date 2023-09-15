import React from "react";
import { Helmet } from "react-helmet";
import { useParams, Redirect } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

import Layout from "../components/Layout";
import { useQuery } from "react-query";
import { getPage } from "../queries/queries";
import Breadcrumb from "../components/Breadcrumb";

export default function DynamiquePage() {
    const { page } = useParams();
    const { data, isLoading } = useQuery(
        ['getPage', page],
        () => getPage(page),
        { retry: true, refetchOnWindowFocus: false }
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
    
    if (!data?.status && data?.redirect) {
        return <Redirect to={`/page-404`} />;
    }
    // if (error) {
    //     if (error.response.data.redirect)
    //     return <redirect to={`/page-404`} />;
    // }
    return (
        <Layout>
            <Helmet>
                <title>{`${data?.title} | Ecowatt`}</title>
            </Helmet>

            <Breadcrumb title={data?.title} />

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