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

    const slideBest = {
        dots: true,
        infinite: true,
        speed: 500,
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
                <title>Accueil | Ecowatt</title>
            </Helmet>

            <section className="home-section pt-2 ratio_50">
                <div className="container-fluid-lg">
                    <div className="row g-4">
                        <HomeSlide />
                        {(settings && settings?.banners === 'on') ? 
                            <div className="col-xl-3 col-lg-4 d-lg-inline-block d-none">
                                <BannerVertical keyBanner={'HPP1'} />
                            </div>
                            : 
                            <div />
                        }
                    </div>
                </div>
            </section>

            <Services />

            <SlideBrands />

            <section className="product-section">
                <div className="container-fluid-lg">
                    <div className="row g-sm-4 g-3">
                        <div className="col-xxl-9 col-xl-8">
                            
                            <SlideCategories />

                            {(settings && settings?.banners === 'on') ? 
                                <div className="section-t-space section-b-space">
                                    <div className="row g-md-4 g-3">
                                        <div className="col-md-12">
                                            <BannerHorizontal keyBanner={'HPP2'} />
                                        </div>
                                    </div>
                                </div>
                                : 
                                <div />
                            }

                            <SlideBestOffers />
                        </div>

                        <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
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

                                <div className="section-t-space">
                                    <div className="category-menu">
                                        <h3>Trending Products</h3>

                                        <ul className="product-list border-0 p-0 d-block">
                                            <li>
                                                <div className="offer-product">
                                                    <a
                                                        href="product-left-thumbnail.html"
                                                        className="offer-image"
                                                    >
                                                        <img
                                                            src={require("./../assets/images/furniture/2.png")}
                                                            className="lazyload"
                                                            alt=""
                                                        />
                                                    </a>

                                                    <div className="offer-detail">
                                                        <div>
                                                            <a
                                                                href="product-left-thumbnail.html"
                                                                className="text-title"
                                                            >
                                                                <h6 className="name">Meatigo Premium Goat Curry</h6>
                                                            </a>
                                                            <span>450 G</span>
                                                            <h6 className="price theme-color">$ 70.00</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="offer-product">
                                                    <a
                                                        href="product-left-thumbnail.html"
                                                        className="offer-image"
                                                    >
                                                        <img
                                                            src={require("./../assets/images/furniture/3.png")}
                                                            className="lazyload"
                                                            alt=""
                                                        />
                                                    </a>

                                                    <div className="offer-detail">
                                                        <div>
                                                            <a
                                                                href="product-left-thumbnail.html"
                                                                className="text-title"
                                                            >
                                                                <h6 className="name">Coral Bean Bag Chair</h6>
                                                            </a>
                                                            <span>450 G</span>
                                                            <h6 className="price theme-color">$ 40.00</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="mb-0">
                                                <div className="offer-product">
                                                    <a
                                                        href="product-left-thumbnail.html"
                                                        className="offer-image"
                                                    >
                                                        <img
                                                            src={require("./../assets/images/furniture/5.png")}
                                                            className="lazyload"
                                                            alt=""
                                                        />
                                                    </a>

                                                    <div className="offer-detail">
                                                        <div>
                                                            <a
                                                                href="product-left-thumbnail.html"
                                                                className="text-title"
                                                            >
                                                                <h6 className="name">
                                                                    Benefits of using natural stone tile flooring
                                                                </h6>
                                                            </a>
                                                            <span>1 KG</span>
                                                            <h6 className="price theme-color">$ 80.00</h6>
                                                        </div>
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

            {(settings && settings?.newsletter === 'on') && <Newsletter />}

            <div className="theme-option">
                <div className="back-to-top">
                    <a id="back-to-top">
                        <i className="fas fa-chevron-up"></i>
                    </a>
                </div>
            </div>

            <div className="bg-overlay"></div>
        </Layout>
    );
}
