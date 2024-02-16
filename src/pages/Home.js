import React from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import { Eye, Heart, RefreshCw } from "react-feather";

import { DataProvider } from "../contexts/DataContext";
import Layout from "./../components/Layout";
import HomeSlide from "../components/HomeSlide";
import Newsletter from "../components/Newsletter";
import BannerVertical from "../components/BannerVertical";
import BannerHorizontal from "../components/BannerHorizontal";

import Services from "../components/Home/Services";
import SlideBrands from "../components/Home/SlideBrands";
import SlideCategories from "../components/Home/SlideCategories";
import SlideBestSellers from "../components/Home/SlideBestSellers";
import SlideBestOffers from "../components/Home/SlideBestOffers";
import PinnedCategories from "../components/Home/PinnedCategories";

export default function Home() {
    const { settings } = React.useContext(DataProvider);

    return (
        <Layout>
            <Helmet>
                <title>Accueil | Ecowatt</title>
            </Helmet>

            <section className="home-section pt-0 ratio_50">
                <div>
                {/* <div className="container-fluid-lg"> */}
                    {/* <div className="row g-4"> */}
                    <div>
                        <HomeSlide type={`HS1`} extraClass="mt-0" />
                        {/* <HomeSlide type={`HS1`} extraClass={`col-xl-9 col-lg-8`} /> */}
                        {/* {(settings && settings?.banners === 'on') ? 
                            <div className="col-xl-3 col-lg-4 d-lg-inline-block d-none">
                                <BannerVertical keyBanner={'HPP1'} />
                            </div>
                            : 
                            <div />
                        } */}
                    </div>
                </div>
            </section>

            <section className="product-section">
                <div className="container-fluid-lg">
                    <div>
                        <div>
                            <SlideCategories />

                            {/* {(settings && settings?.banners === 'on') ? 
                                <div className="section-t-space section-b-space">
                                    <div className="row g-md-4 g-3">
                                        <div className="col-md-12">
                                            <BannerHorizontal keyBanner={'HPP2'} />
                                        </div>
                                    </div>
                                </div>
                                : 
                                <div />
                            } */}
                            <SlideBestOffers />
                        </div>

                        {/* <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
                            <div className="p-sticky">
                                <PinnedCategories />

                                {(settings && settings?.banners === 'on') ? 
                                    <div className="section-t-space">
                                        <div className="row g-md-4 g-3">
                                            <div className="col-md-12">
                                                <BannerVertical keyBanner={'HPP4'} />
                                            </div>
                                        </div>
                                    </div>
                                    : 
                                    <div />
                                }
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            {(settings && settings?.banners === 'on') ? 
                <section className="banner-section">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-12">
                                <BannerHorizontal keyBanner={'HPP3'} />
                            </div>
                        </div>
                    </div>
                </section>
            : 
                <div />
            }

            <section>
                <div className="container-fluid-lg">
                    <SlideBestSellers />
                </div>
            </section>

            {/* {(settings && settings?.newsletter === 'on') && <Newsletter />} */}
            <SlideBrands />

            <div className="theme-option">
                <div className="back-to-top">
                    <a role="button" id="back-to-top" onClick={() => window.scrollTo({top:0})}>
                        <i className="fas fa-chevron-up"></i>
                    </a>
                </div>
            </div>

            <div className="bg-overlay"></div>
        </Layout>
    );
}
