import React from "react";
import Layout from "./../components/Layout";
// import { Helmet } from "react-helmet";

import {
    AlignLeft,
    Clock,
    Eye,
    Heart,
    RefreshCw,
    Star,
} from "react-feather";

import Slider from "react-slick";
import HomeSlide from "../components/HomeSlide";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { DataProvider } from "../contexts/DataContext";
import Banner from "../components/BannerVertical";
import BannerVertical from "../components/BannerVertical";
import BannerHorizontal from "../components/BannerHorizontal";
import { Helmet } from "react-helmet";

export default function Home() {
    const { settings } = React.useContext(DataProvider);

    const slideBrands = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 478,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    const slideCategories = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 478,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

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

            {/* <div className="fullpage-loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div> */}

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

            <section className="service-section">
                <div className="container-fluid-lg">
                    <div className="row g-3 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2">
                        <div>
                            <div className="service-contain-2">
                                {/* <svg className="icon-width">
                              <use xlink:href="./assets/svg/svg/service-icon-4.svg#shipping"></use>
                          </svg> */}
                                <div className="service-detail">
                                    <h3>Free Shipping</h3>
                                    <h6 className="text-content">Free Shipping world wide</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="service-contain-2">
                                {/* <svg className="icon-width">
                              <use xlink:href="./assets/svg/svg/service-icon-4.svg#service"></use>
                          </svg> */}
                                <div className="service-detail">
                                    <h3>24 x 7 Service</h3>
                                    <h6 className="text-content">Online Service For 24 x 7</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="service-contain-2">
                                {/* <svg className="icon-width">
                              <use xlink:href="./assets/svg/svg/service-icon-4.svg#pay"></use>
                          </svg> */}
                                <div className="service-detail">
                                    <h3>Online Pay</h3>
                                    <h6 className="text-content">Online Payment Avaible</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="service-contain-2">
                                {/* <svg className="icon-width">
                              <use xlink:href="./assets/svg/svg/service-icon-4.svg#offer"></use>
                          </svg> */}
                                <div className="service-detail">
                                    <h3>Festival Offer</h3>
                                    <h6 className="text-content">Super Sale Upto 50% off</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="service-contain-2">
                                {/* <svg className="icon-width">
                              <use xlink:href="./assets/svg/svg/service-icon-4.svg#return"></use>
                          </svg> */}
                                <div className="service-detail">
                                    <h3>100% Original</h3>
                                    <h6 className="text-content">100% Money Back</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-list-section section-b-space">
                <div className="container-fluid-lg">
                    <div className="title">
                        <h2>Les meilleures marques </h2>
                        <span className="title-leaf">
                            {/* <svg className="icon-width">
                          <use xlink:href="./assets/svg/leaf.svg#leaf"></use>
                      </svg> */}
                        </span>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="slider-6_1 product-wrapper">
                                <Slider {...slideBrands}>
                                    <div>
                                        <div className="product-box-3 wow fadeInUp">
                                            <div className="product-header">
                                                <div className="product-image">
                                                    <a href="product-left.htm">
                                                        <img
                                                            src={require("./../assets/images/brand/b1.jpg")}
                                                            className="img-fluid lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box-3 wow fadeInUp">
                                            <div className="product-header">
                                                <div className="product-image">
                                                    <a href="product-left.htm">
                                                        <img
                                                            src={require("./../assets/images/brand/b2.jpg")}
                                                            className="img-fluid lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box-3 wow fadeInUp">
                                            <div className="product-header">
                                                <div className="product-image">
                                                    <a href="product-left.htm">
                                                        <img
                                                            src={require("./../assets/images/brand/b3.jpg")}
                                                            className="img-fluid lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box-3 wow fadeInUp">
                                            <div className="product-header">
                                                <div className="product-image">
                                                    <a href="product-left.htm">
                                                        <img
                                                            src={require("./../assets/images/brand/b4.jpg")}
                                                            className="img-fluid lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box-3 wow fadeInUp">
                                            <div className="product-header">
                                                <div className="product-image">
                                                    <a href="product-left.htm">
                                                        <img
                                                            src={require("./../assets/images/brand/b5.jpg")}
                                                            className="img-fluid lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box-3 wow fadeInUp">
                                            <div className="product-header">
                                                <div className="product-image">
                                                    <a href="product-left.htm">
                                                        <img
                                                            src={require("./../assets/images/brand/b1.jpg")}
                                                            className="img-fluid lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box-3 wow fadeInUp">
                                            <div className="product-header">
                                                <div className="product-image">
                                                    <a href="product-left.htm">
                                                        <img
                                                            src={require("./../assets/images/brand/b2.jpg")}
                                                            className="img-fluid lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box-3 wow fadeInUp">
                                            <div className="product-header">
                                                <div className="product-image">
                                                    <a href="product-left.htm">
                                                        <img
                                                            src={require("./../assets/images/brand/b3.jpg")}
                                                            className="img-fluid lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box-3 wow fadeInUp">
                                            <div className="product-header">
                                                <div className="product-image">
                                                    <a href="product-left.htm">
                                                        <img
                                                            src={require("./../assets/images/brand/b4.jpg")}
                                                            className="img-fluid lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box-3 wow fadeInUp">
                                            <div className="product-header">
                                                <div className="product-image">
                                                    <a href="product-left.htm">
                                                        <img
                                                            src={require("./../assets/images/brand/b5.jpg")}
                                                            className="img-fluid lazyload"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-section">
                <div className="container-fluid-lg">
                    <div className="row g-sm-4 g-3">
                        <div className="col-xxl-9 col-xl-8">
                            <div className="title title-flex">
                                <div>
                                    <h2>Top Save Today</h2>
                                    <span className="title-leaf">
                                        {/* <svg className="icon-width">
                                      <use xlink:href="./assets/svg/leaf.svg#leaf"></use>
                                  </svg> */}
                                    </span>
                                    <p>
                                        Don't miss this opportunity at a special discount just for
                                        this week.
                                    </p>
                                </div>
                                <div className="timing-box">
                                    <div className="timing">
                                        <Clock />
                                        <h6 className="name">Expires in :</h6>
                                        <div
                                            className="time"
                                            id="clockdiv-1"
                                            data-hours="1"
                                            data-minutes="2"
                                            data-seconds="3"
                                        >
                                            <ul>
                                                <li>
                                                    <div className="counter">
                                                        <div className="days">
                                                            <h6></h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="counter">
                                                        <div className="hours">
                                                            <h6></h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="counter">
                                                        <div className="minutes">
                                                            <h6></h6>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="counter">
                                                        <div className="seconds">
                                                            <h6></h6>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-b-space">
                                <div className="row row-cols-xxl-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow">
                                    <div>
                                        <div className="product-box product-white-bg wow fadeIn">
                                            <div className="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img
                                                        src={require("./../assets/images/furniture/1.png")}
                                                        className="img-fluid lazyload"
                                                        alt=""
                                                    />
                                                </a>
                                                <ul className="product-option">
                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="View"
                                                    >
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#view"
                                                        >
                                                            <Eye />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Compare"
                                                    >
                                                        <a href="compare.html">
                                                            <RefreshCw />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Wishlist"
                                                    >
                                                        <a href="wishlist.html" className="notifi-wishlist"></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-detail position-relative">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 className="name">
                                                        Home Decor Lucky Deer Family Matte Finish Ceramic
                                                        Figures
                                                    </h6>
                                                </a>

                                                <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                                <h6 className="price theme-color">$ 80.00</h6>

                                                <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                                                    <button className="btn addcart-button btn buy-button">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                    <div className="cart_qty qty-box-2">
                                                        <div className="input-group">
                                                            <button
                                                                type="button"
                                                                className="qty-left-minus"
                                                                data-type="minus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                                            </button>
                                                            <input
                                                                className="form-control input-number qty-input"
                                                                type="text"
                                                                name="quantity"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="qty-right-plus"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div
                                            className="product-box product-white-bg wow fadeIn"
                                            data-wow-delay="0.1s"
                                        >
                                            <div className="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img
                                                        src={require("./../assets/images/furniture/2.png")}
                                                        className="img-fluid lazyload"
                                                        alt=""
                                                    />
                                                </a>
                                                <ul className="product-option">
                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="View"
                                                    >
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#view"
                                                        >
                                                            <Eye />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Compare"
                                                    >
                                                        <a href="compare.html">
                                                            <RefreshCw />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Wishlist"
                                                    >
                                                        <a href="wishlist.html" className="notifi-wishlist">
                                                            <Heart />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-detail position-relative">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 className="name">
                                                        luxury comfort full size 17*27 jumbo border pillow
                                                    </h6>
                                                </a>

                                                <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                                <h6 className="price theme-color">$ 80.00</h6>

                                                <div className="add-to-cart-btn-2 addtocart_btn">
                                                    <button className="btn addcart-button btn buy-button">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                    <div className="cart_qty qty-box-2">
                                                        <div className="input-group">
                                                            <button
                                                                type="button"
                                                                className="qty-left-minus"
                                                                data-type="minus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                                            </button>
                                                            <input
                                                                className="form-control input-number qty-input"
                                                                type="text"
                                                                name="quantity"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="qty-right-plus"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="product-box product-white-bg wow fadeIn">
                                            <div className="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img
                                                        src={require("./../assets/images/furniture/3.png")}
                                                        className="img-fluid lazyload"
                                                        alt=""
                                                    />
                                                </a>
                                                <ul className="product-option">
                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="View"
                                                    >
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#view"
                                                        >
                                                            <Eye />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Compare"
                                                    >
                                                        <a href="compare.html">
                                                            <RefreshCw />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Wishlist"
                                                    >
                                                        <a href="wishlist.html" className="notifi-wishlist">
                                                            <Heart />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-detail position-relative">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 className="name">Coral Bean Bag Chair</h6>
                                                </a>

                                                <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                                <h6 className="price theme-color">$ 80.00</h6>

                                                <div className="add-to-cart-btn-2 addtocart_btn">
                                                    <button className="btn addcart-button btn buy-button">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                    <div className="cart_qty qty-box-2">
                                                        <div className="input-group">
                                                            <button
                                                                type="button"
                                                                className="qty-left-minus"
                                                                data-type="minus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                                            </button>
                                                            <input
                                                                className="form-control input-number qty-input"
                                                                type="text"
                                                                name="quantity"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="qty-right-plus"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div
                                            className="product-box product-white-bg wow fadeIn"
                                            data-wow-delay="0.1s"
                                        >
                                            <div className="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img
                                                        src={require("./../assets/images/furniture/4.png")}
                                                        className="img-fluid lazyload"
                                                        alt=""
                                                    />
                                                </a>
                                                <ul className="product-option">
                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="View"
                                                    >
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#view"
                                                        >
                                                            <Eye />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Compare"
                                                    >
                                                        <a href="compare.html">
                                                            <RefreshCw />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Wishlist"
                                                    >
                                                        <a href="wishlist.html" className="notifi-wishlist">
                                                            <Heart />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-detail position-relative">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 className="name">
                                                        ELSTONE HOME White Colour Bath Towel
                                                    </h6>
                                                </a>

                                                <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                                <h6 className="price theme-color">$ 80.00</h6>

                                                <div className="add-to-cart-btn-2 addtocart_btn">
                                                    <button className="btn addcart-button btn buy-button">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                    <div className="cart_qty qty-box-2">
                                                        <div className="input-group">
                                                            <button
                                                                type="button"
                                                                className="qty-left-minus"
                                                                data-type="minus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                                            </button>
                                                            <input
                                                                className="form-control input-number qty-input"
                                                                type="text"
                                                                name="quantity"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="qty-right-plus"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="product-box product-white-bg wow fadeIn">
                                            <div className="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img
                                                        src={require("./../assets/images/furniture/5.png")}
                                                        className="img-fluid lazyload"
                                                        alt=""
                                                    />
                                                </a>
                                                <ul className="product-option">
                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="View"
                                                    >
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#view"
                                                        >
                                                            <Eye />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Compare"
                                                    >
                                                        <a href="compare.html">
                                                            <RefreshCw />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Wishlist"
                                                    >
                                                        <a href="wishlist.html" className="notifi-wishlist">
                                                            <Heart />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-detail position-relative">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 className="name">
                                                        Benefits of using natural stone tile flooring
                                                    </h6>
                                                </a>

                                                <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                                <h6 className="price theme-color">$ 80.00</h6>

                                                <div className="add-to-cart-btn-2 addtocart_btn">
                                                    <button className="btn addcart-button btn buy-button">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                    <div className="cart_qty qty-box-2">
                                                        <div className="input-group">
                                                            <button
                                                                type="button"
                                                                className="qty-left-minus"
                                                                data-type="minus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                                            </button>
                                                            <input
                                                                className="form-control input-number qty-input"
                                                                type="text"
                                                                name="quantity"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="qty-right-plus"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div
                                            className="product-box product-white-bg wow fadeIn"
                                            data-wow-delay="0.1s"
                                        >
                                            <div className="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img
                                                        src={require("./../assets/images/furniture/6.png")}
                                                        className="img-fluid lazyload"
                                                        alt=""
                                                    />
                                                </a>
                                                <ul className="product-option">
                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="View"
                                                    >
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#view"
                                                        >
                                                            <Eye />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Compare"
                                                    >
                                                        <a href="compare.html">
                                                            <RefreshCw />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Wishlist"
                                                    >
                                                        <a href="wishlist.html" className="notifi-wishlist">
                                                            <Heart />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-detail position-relative">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 className="name">
                                                        Nature Baby Merino Knit Bassinet Blanket
                                                    </h6>
                                                </a>

                                                <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                                <h6 className="price theme-color">$ 80.00</h6>

                                                <div className="add-to-cart-btn-2 addtocart_btn">
                                                    <button className="btn addcart-button btn buy-button">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                    <div className="cart_qty qty-box-2">
                                                        <div className="input-group">
                                                            <button
                                                                type="button"
                                                                className="qty-left-minus"
                                                                data-type="minus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                                            </button>
                                                            <input
                                                                className="form-control input-number qty-input"
                                                                type="text"
                                                                name="quantity"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="qty-right-plus"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="product-box product-white-bg wow fadeIn">
                                            <div className="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img
                                                        src={require("./../assets/images/furniture/7.png")}
                                                        className="img-fluid lazyload"
                                                        alt=""
                                                    />
                                                </a>
                                                <ul className="product-option">
                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="View"
                                                    >
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#view"
                                                        >
                                                            <Eye />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Compare"
                                                    >
                                                        <a href="compare.html">
                                                            <RefreshCw />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Wishlist"
                                                    >
                                                        <a href="wishlist.html" className="notifi-wishlist">
                                                            <Heart />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-detail position-relative">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 className="name">
                                                        Wooden Tea Cup Coaster Coffee Drinks
                                                    </h6>
                                                </a>

                                                <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                                <h6 className="price theme-color">$ 80.00</h6>

                                                <div className="add-to-cart-btn-2 addtocart_btn">
                                                    <button className="btn addcart-button btn buy-button">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                    <div className="cart_qty qty-box-2">
                                                        <div className="input-group">
                                                            <button
                                                                type="button"
                                                                className="qty-left-minus"
                                                                data-type="minus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                                            </button>
                                                            <input
                                                                className="form-control input-number qty-input"
                                                                type="text"
                                                                name="quantity"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="qty-right-plus"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div
                                            className="product-box product-white-bg wow fadeIn"
                                            data-wow-delay="0.1s"
                                        >
                                            <div className="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img
                                                        src={require("./../assets/images/furniture/8.png")}
                                                        className="img-fluid lazyload"
                                                        alt=""
                                                    />
                                                </a>
                                                <ul className="product-option">
                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="View"
                                                    >
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#view"
                                                        >
                                                            <Eye />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Compare"
                                                    >
                                                        <a href="compare.html">
                                                            <RefreshCw />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Wishlist"
                                                    >
                                                        <a href="wishlist.html" className="notifi-wishlist">
                                                            <Heart />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-detail position-relative">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 className="name">
                                                        Goddess Marble Hexagon Party Plates
                                                    </h6>
                                                </a>

                                                <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                                <h6 className="price theme-color">$ 80.00</h6>

                                                <div className="add-to-cart-btn-2 addtocart_btn">
                                                    <button className="btn addcart-button btn buy-button">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                    <div className="cart_qty qty-box-2">
                                                        <div className="input-group">
                                                            <button
                                                                type="button"
                                                                className="qty-left-minus"
                                                                data-type="minus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                                            </button>
                                                            <input
                                                                className="form-control input-number qty-input"
                                                                type="text"
                                                                name="quantity"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="qty-right-plus"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="product-box product-white-bg wow fadeIn">
                                            <div className="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img
                                                        src={require("./../assets/images/furniture/9.png")}
                                                        className="img-fluid lazyload"
                                                        alt=""
                                                    />
                                                </a>
                                                <ul className="product-option">
                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="View"
                                                    >
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#view"
                                                        >
                                                            <Eye />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Compare"
                                                    >
                                                        <a href="compare.html">
                                                            <RefreshCw />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Wishlist"
                                                    >
                                                        <a href="wishlist.html" className="notifi-wishlist">
                                                            <Heart />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-detail position-relative">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 className="name">
                                                        Handmade Brown Mango Wooden Tray Square
                                                    </h6>
                                                </a>

                                                <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                                <h6 className="price theme-color">$ 80.00</h6>

                                                <div className="add-to-cart-btn-2 addtocart_btn">
                                                    <button className="btn addcart-button btn buy-button">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                    <div className="cart_qty qty-box-2">
                                                        <div className="input-group">
                                                            <button
                                                                type="button"
                                                                className="qty-left-minus"
                                                                data-type="minus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                                            </button>
                                                            <input
                                                                className="form-control input-number qty-input"
                                                                type="text"
                                                                name="quantity"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="qty-right-plus"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div
                                            className="product-box product-white-bg wow fadeIn"
                                            data-wow-delay="0.1s"
                                        >
                                            <div className="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img
                                                        src={require("./../assets/images/furniture/10.png")}
                                                        className="img-fluid lazyload"
                                                        alt=""
                                                    />
                                                </a>
                                                <ul className="product-option">
                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="View"
                                                    >
                                                        <a
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#view"
                                                        >
                                                            <Eye />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Compare"
                                                    >
                                                        <a href="compare.html">
                                                            <RefreshCw />
                                                        </a>
                                                    </li>

                                                    <li
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Wishlist"
                                                    >
                                                        <a href="wishlist.html" className="notifi-wishlist">
                                                            <Heart />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-detail position-relative">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 className="name">heavy duty cane round basket</h6>
                                                </a>

                                                <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                                <h6 className="price theme-color">$ 80.00</h6>

                                                <div className="add-to-cart-btn-2 addtocart_btn">
                                                    <button className="btn addcart-button btn buy-button">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                    <div className="cart_qty qty-box-2">
                                                        <div className="input-group">
                                                            <button
                                                                type="button"
                                                                className="qty-left-minus"
                                                                data-type="minus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                                            </button>
                                                            <input
                                                                className="form-control input-number qty-input"
                                                                type="text"
                                                                name="quantity"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="qty-right-plus"
                                                                data-type="plus"
                                                                data-field=""
                                                            >
                                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="title">
                                <h2>Bowse by Categories</h2>
                                <span className="title-leaf">
                                    {/* <svg className="icon-width">
                                  <use xlink:href="./assets/svg/leaf.svg#leaf"></use>
                              </svg> */}
                                </span>
                                <p>Top Categories Of The Week</p>
                            </div>

                            <div className="category-slider-2 product-wrapper no-arrow">
                                <Slider {...slideCategories}>
                                    <div>
                                        <a
                                            href="shop-left-sidebar.html"
                                            className="category-box category-dark"
                                        >
                                            <div>
                                                <img
                                                    src={require("./../assets/images/furniture/icon/decorations.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>Decorations</h5>
                                            </div>
                                        </a>
                                    </div>

                                    <div>
                                        <a
                                            href="shop-left-sidebar.html"
                                            className="category-box category-dark"
                                        >
                                            <div>
                                                <img
                                                    src={require("./../assets/images/furniture/icon/pillows.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>Bed linen</h5>
                                            </div>
                                        </a>
                                    </div>

                                    <div>
                                        <a
                                            href="shop-left-sidebar.html"
                                            className="category-box category-dark"
                                        >
                                            <div>
                                                <img
                                                    src={require("./../assets/images/furniture/icon/cushions.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>Cushions</h5>
                                            </div>
                                        </a>
                                    </div>

                                    <div>
                                        <a
                                            href="shop-left-sidebar.html"
                                            className="category-box category-dark"
                                        >
                                            <div>
                                                <img
                                                    src={require("./../assets/images/furniture/icon/blankets.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>Blankets</h5>
                                            </div>
                                        </a>
                                    </div>

                                    <div>
                                        <a
                                            href="shop-left-sidebar.html"
                                            className="category-box category-dark"
                                        >
                                            <div>
                                                <img
                                                    src={require("./../assets/images/furniture/icon/gift.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>Giftwraps</h5>
                                            </div>
                                        </a>
                                    </div>

                                    <div>
                                        <a
                                            href="shop-left-sidebar.html"
                                            className="category-box category-dark"
                                        >
                                            <div>
                                                <img
                                                    src={require("./../assets/images/furniture/icon/sleepware.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>Sleepwear</h5>
                                            </div>
                                        </a>
                                    </div>

                                    <div>
                                        <a
                                            href="shop-left-sidebar.html"
                                            className="category-box category-dark"
                                        >
                                            <div>
                                                <img
                                                    src={require("./../assets/images/furniture/icon/bakeware.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>Cookware & Bakeware</h5>
                                            </div>
                                        </a>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
                            <div className="p-sticky">
                                <div className="category-menu">
                                    <h3>Shop By Product</h3>
                                    <ul className="border-bottom-0">
                                        <li>
                                            <div className="category-list">
                                                <img
                                                    src={require("./../assets/images/furniture/icon/decorations.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Decorations</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img
                                                    src={require("./../assets/images/furniture/icon/pillows.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Bed Linen</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img
                                                    src={require("./../assets/images/furniture/icon/cushions.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Cushions</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img
                                                    src={require("./../assets/images/furniture/icon/blankets.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Blankets</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img
                                                    src={require("./../assets/images/furniture/icon/gift.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Giftwraps</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img
                                                    src={require("./../assets/images/furniture/icon/sleepware.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Sleepwear</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img
                                                    src={require("./../assets/images/furniture/icon/bakeware.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">
                                                        Cookware & Bakeware
                                                    </a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img
                                                    src={require("./../assets/images/furniture/icon/room-fragrance.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Room Fragrance</a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img
                                                    src={require("./../assets/images/furniture/icon/tableware.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">
                                                        Servingware & Tableware
                                                    </a>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="category-list">
                                                <img
                                                    src={require("./../assets/images/furniture/icon/shower.svg")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                                <h5>
                                                    <a href="shop-left-sidebar.html">Bath & Shower</a>
                                                </h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

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
                </div>
                <div className="container-fluid-lg">
                    <div className="row g-sm-4 g-3">
                        <div className="col-xxl-9 col-xl-8">
                            <div className="title d-block">
                                <h2>Food Cupboard</h2>
                                <span className="title-leaf">
                                    {/* <svg className="icon-width">
                                  <use xlink:href="./assets/svg/leaf.svg#leaf"></use>
                              </svg> */}
                                </span>
                                <p>A virtual assistant collects the products from your list</p>
                            </div>

                            <div className="row row-cols-xxl-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow">
                                <div>
                                    <div className="product-box product-white-bg wow fadeIn">
                                        <div className="product-image">
                                            <a href="product-left-thumbnail.html">
                                                <img
                                                    src={require("./../assets/images/furniture/13.png")}
                                                    className="img-fluid lazyload"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="product-option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="View"
                                                >
                                                    <a
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <Eye />
                                                    </a>
                                                </li>

                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <RefreshCw />
                                                    </a>
                                                </li>

                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Wishlist"
                                                >
                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                        <Heart />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail position-relative">
                                            <a href="product-left-thumbnail.html">
                                                <h6 className="name">
                                                    Elama Fine Round Gloss Dinnerware Dish Set
                                                </h6>
                                            </a>

                                            <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                            <h6 className="price theme-color">$ 80.00</h6>

                                            <div className="add-to-cart-btn-2 addtocart_btn">
                                                <button className="btn addcart-button btn buy-button">
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                                <div className="cart_qty qty-box-2">
                                                    <div className="input-group">
                                                        <button
                                                            type="button"
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                        </button>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="text"
                                                            name="quantity"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        className="product-box product-white-bg wow fadeIn"
                                        data-wow-delay="0.1s"
                                    >
                                        <div className="product-image">
                                            <a href="product-left-thumbnail.html">
                                                <img
                                                    src={require("./../assets/images/furniture/8.png")}
                                                    className="img-fluid lazyload"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="product-option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="View"
                                                >
                                                    <a
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <Eye />
                                                    </a>
                                                </li>

                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <RefreshCw />
                                                    </a>
                                                </li>

                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Wishlist"
                                                >
                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                        <Heart />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail position-relative">
                                            <a href="product-left-thumbnail.html">
                                                <h6 className="name">
                                                    Goddess Marble Hexagon Party Plates
                                                </h6>
                                            </a>

                                            <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                            <h6 className="price theme-color">$ 80.00</h6>

                                            <div className="add-to-cart-btn-2 addtocart_btn">
                                                <button className="btn addcart-button btn buy-button">
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                                <div className="cart_qty qty-box-2">
                                                    <div className="input-group">
                                                        <button
                                                            type="button"
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                        </button>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="text"
                                                            name="quantity"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="product-box product-white-bg wow fadeIn">
                                        <div className="product-image">
                                            <a href="product-left-thumbnail.html">
                                                <img
                                                    src={require("./../assets/images/furniture/10.png")}
                                                    className="img-fluid lazyload"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="product-option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="View"
                                                >
                                                    <a
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <Eye />
                                                    </a>
                                                </li>

                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <RefreshCw />
                                                    </a>
                                                </li>

                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Wishlist"
                                                >
                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                        <Heart />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail position-relative">
                                            <a href="product-left-thumbnail.html">
                                                <h6 className="name">heavy duty cane round basket</h6>
                                            </a>

                                            <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                            <h6 className="price theme-color">$ 80.00</h6>

                                            <div className="add-to-cart-btn-2 addtocart_btn">
                                                <button className="btn addcart-button btn buy-button">
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                                <div className="cart_qty qty-box-2">
                                                    <div className="input-group">
                                                        <button
                                                            type="button"
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                        </button>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="text"
                                                            name="quantity"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        className="product-box product-white-bg wow fadeIn"
                                        data-wow-delay="0.1s"
                                    >
                                        <div className="product-image">
                                            <a href="product-left-thumbnail.html">
                                                <img
                                                    src={require("./../assets/images/furniture/6.png")}
                                                    className="img-fluid lazyload"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="product-option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="View"
                                                >
                                                    <a
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <Eye />
                                                    </a>
                                                </li>

                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <RefreshCw />
                                                    </a>
                                                </li>

                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Wishlist"
                                                >
                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                        <Heart />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail position-relative">
                                            <a href="product-left-thumbnail.html">
                                                <h6 className="name">
                                                    Nature Baby Merino Knit Bassinet Blanket
                                                </h6>
                                            </a>

                                            <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                            <h6 className="price theme-color">$ 80.00</h6>

                                            <div className="add-to-cart-btn-2 addtocart_btn">
                                                <button className="btn addcart-button btn buy-button">
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                                <div className="cart_qty qty-box-2">
                                                    <div className="input-group">
                                                        <button
                                                            type="button"
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                        </button>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="text"
                                                            name="quantity"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="product-box product-white-bg wow fadeIn">
                                        <div className="product-image">
                                            <a href="product-left-thumbnail.html">
                                                <img
                                                    src={require("./../assets/images/furniture/4.png")}
                                                    className="img-fluid lazyload"
                                                    alt=""
                                                />
                                            </a>
                                            <ul className="product-option">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="View"
                                                >
                                                    <a
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view"
                                                    >
                                                        <Eye />
                                                    </a>
                                                </li>

                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Compare"
                                                >
                                                    <a href="compare.html">
                                                        <RefreshCw />
                                                    </a>
                                                </li>

                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Wishlist"
                                                >
                                                    <a href="wishlist.html" className="notifi-wishlist">
                                                        <Heart />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-detail position-relative">
                                            <a href="product-left-thumbnail.html">
                                                <h6 className="name">
                                                    ELSTONE HOME White Colour Bath Towel
                                                </h6>
                                            </a>

                                            <h6 className="sold weight text-content fw-normal">1 KG</h6>

                                            <h6 className="price theme-color">$ 80.00</h6>

                                            <div className="add-to-cart-btn-2 addtocart_btn">
                                                <button className="btn addcart-button btn buy-button">
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                                <div className="cart_qty qty-box-2">
                                                    <div className="input-group">
                                                        <button
                                                            type="button"
                                                            className="qty-left-minus"
                                                            data-type="minus"
                                                            data-field=""
                                                        >
                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                        </button>
                                                        <input
                                                            className="form-control input-number qty-input"
                                                            type="text"
                                                            name="quantity"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="qty-right-plus"
                                                            data-type="plus"
                                                            data-field=""
                                                        >
                                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
                            <div className="p-sticky">
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
                    <div className="title d-block">
                        <div>
                            <h2>Our best Seller</h2>
                            <span className="title-leaf">
                                {/* <svg className="icon-width">
                              <use xlink:href="./assets/svg/leaf.svg#leaf"></use>
                          </svg> */}
                            </span>
                            <p>A virtual assistant collects the products from your list</p>
                        </div>
                    </div>
                    <div className="banner-slider product-wrapper wow fadeInUp">
                        <Slider {...slideBest}>
                            <div>
                                <ul className="product-list">
                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
                                                <img
                                                    src={require("./../assets/images/furniture/1.png")}
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
                                                            Home Decor Lucky Deer Family Matte Finish
                                                        </h6>
                                                    </a>
                                                    <span>500 G</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
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
                                                        <h6 className="name">Potato</h6>
                                                    </a>
                                                    <span>500 G</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
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
                                                    <span>200 G</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
                                                <img
                                                    src={require("./../assets/images/furniture/4.png")}
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
                                                            ELSTONE HOME White Colour Bath Towel
                                                        </h6>
                                                    </a>
                                                    <span>150 G</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="product-list">
                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
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
                                                    <span>500 G</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
                                                <img
                                                    src={require("./../assets/images/furniture/6.png")}
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
                                                            Nature Baby Merino Knit Bassinet Blanket
                                                        </h6>
                                                    </a>
                                                    <span>1 L</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
                                                <img
                                                    src={require("./../assets/images/furniture/7.png")}
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
                                                        <h6 className="name">Wooden Tea Cup Coaster</h6>
                                                    </a>
                                                    <span>1 KG</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
                                                <img
                                                    src={require("./../assets/images/furniture/8.png")}
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
                                                        <h6 className="name">Goddess Marble Hexagon</h6>
                                                    </a>
                                                    <span>150 G</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="product-list">
                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
                                                <img
                                                    src={require("./../assets/images/furniture/9.png")}
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
                                                            Handmade Brown Mango Wooden Tray Square
                                                        </h6>
                                                    </a>
                                                    <span>1 L</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
                                                <img
                                                    src={require("./../assets/images/furniture/10.png")}
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
                                                        <h6 className="name">heavy duty cane round basket</h6>
                                                    </a>
                                                    <span>500 G</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
                                                <img
                                                    src={require("./../assets/images/furniture/11.png")}
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
                                                            WaahKart Antique Fiber Flower Vase
                                                        </h6>
                                                    </a>
                                                    <span>1 KG</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
                                                <img
                                                    src={require("./../assets/images/furniture/12.png")}
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
                                                        <h6 className="name">Towels Cotton Soft</h6>
                                                    </a>
                                                    <span>160 ML</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="product-list">
                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
                                                <img
                                                    src={require("./../assets/images/furniture/13.png")}
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
                                                        <h6 className="name">Gloss Dinnerware Dish</h6>
                                                    </a>
                                                    <span>500 G</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
                                                <img
                                                    src={require("./../assets/images/furniture/14.png")}
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
                                                        <h6 className="name">Marble Small Amenity Tray</h6>
                                                    </a>
                                                    <span>1 L</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
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
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="offer-product">
                                            <a href="product-left-thumbnail.html" className="offer-image">
                                                <img
                                                    src={require("./../assets/images/furniture/9.png")}
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
                                                            Handmade Brown Mango Wooden Tray Square
                                                        </h6>
                                                    </a>
                                                    <span>150 G</span>
                                                    <h6 className="price theme-color">$ 10.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            {(settings && settings?.newsletter === 'on') && <Newsletter />}

            <div
                className="modal fade theme-modal view-modal"
                id="view"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header p-0">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row g-sm-4 g-2">
                                <div className="col-lg-6">
                                    <div className="slider-image">
                                        <img
                                            src={require("./../assets/images/product/category/1.jpg")}
                                            className="img-fluid lazyload"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="right-sidebar-modal">
                                        <h4 className="title-name">
                                            Peanut Butter Bite Premium Butter Cookies 600 g
                                        </h4>
                                        <h4 className="price">$36.99</h4>
                                        <div className="product-rating">
                                            <ul className="rating">
                                                <li>
                                                    <Star />
                                                </li>
                                                <li>
                                                    <Star />
                                                </li>
                                                <li>
                                                    <Star />
                                                </li>
                                                <li>
                                                    <Star />
                                                </li>
                                                <li>
                                                    <Star />
                                                </li>
                                            </ul>
                                            <span className="ms-2">8 Reviews</span>
                                            <span className="ms-2 text-danger">
                                                6 sold in last 16 hours
                                            </span>
                                        </div>

                                        <div className="product-detail">
                                            <h4>Product Details :</h4>
                                            <p>
                                                Candy canes sugar plum tart cotton candy chupa chups
                                                sugar plum chocolate I love. Caramels marshmallow icing
                                                dessert candy canes I love soufflé I love toffee.
                                                Marshmallow pie sweet sweet roll sesame snaps tiramisu
                                                jelly bear claw. Bonbon muffin I love carrot cake sugar
                                                plum dessert bonbon.
                                            </p>
                                        </div>

                                        <ul className="brand-list">
                                            <li>
                                                <div className="brand-box">
                                                    <h5>Brand Name:</h5>
                                                    <h6>Black Forest</h6>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="brand-box">
                                                    <h5>Product Code:</h5>
                                                    <h6>W0690034</h6>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="brand-box">
                                                    <h5>Product Type:</h5>
                                                    <h6>White Cream Cake</h6>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="select-size">
                                            <h4>Cake Size :</h4>
                                            <select className="form-select select-form-size">
                                                <option>Select Size</option>
                                                <option value="1.2">1/2 KG</option>
                                                <option value="0">1 KG</option>
                                                <option value="1.5">1/5 KG</option>
                                                <option value="red">Red Roses</option>
                                                <option value="pink">With Pink Roses</option>
                                            </select>
                                        </div>

                                        <div className="modal-button">
                                            <button
                                                className="btn btn-md add-cart-button icon"
                                            >
                                                Add To Cart
                                            </button>
                                            <button
                                                className="btn theme-bg-color view-button icon text-white fw-bold btn-md"
                                            >
                                                View More Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal location-modal fade theme-modal"
                id="locationModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Choose your Delivery Location
                            </h5>
                            <p className="mt-1 text-content">
                                Enter your address and we will specify the offer for your area.
                            </p>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="location-list">
                                <div className="search-input">
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Search Your Area"
                                    />
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>

                                <div className="disabled-box">
                                    <h6>Select a Location</h6>
                                </div>

                                <ul className="location-select custom-height">
                                    <li>
                                        <a >
                                            <h6>Alabama</h6>
                                            <span>Min: $130</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a >
                                            <h6>Arizona</h6>
                                            <span>Min: $150</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a >
                                            <h6>California</h6>
                                            <span>Min: $110</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a >
                                            <h6>Colorado</h6>
                                            <span>Min: $140</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a >
                                            <h6>Florida</h6>
                                            <span>Min: $160</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a >
                                            <h6>Georgia</h6>
                                            <span>Min: $120</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a >
                                            <h6>Kansas</h6>
                                            <span>Min: $170</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a >
                                            <h6>Minnesota</h6>
                                            <span>Min: $120</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a >
                                            <h6>New York</h6>
                                            <span>Min: $110</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a >
                                            <h6>Washington</h6>
                                            <span>Min: $130</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade theme-modal deal-modal"
                id="deal-box"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <h5 className="modal-title w-100" id="deal_today">
                                    Deal Today
                                </h5>
                                <p className="mt-1 text-content">Recommended deals for you.</p>
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="deal-offer-box">
                                <ul className="deal-offer-list">
                                    <li className="list-1">
                                        <div className="deal-offer-contain">
                                            <a href="shop-left-sidebar.html" className="deal-image">
                                                <img
                                                    src={require("./../assets/images/vegetable/product/10.png")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                            </a>

                                            <a href="shop-left-sidebar.html" className="deal-contain">
                                                <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                                <h6>
                                                    $52.57 <del>57.62</del> <span>500 G</span>
                                                </h6>
                                            </a>
                                        </div>
                                    </li>

                                    <li className="list-2">
                                        <div className="deal-offer-contain">
                                            <a href="shop-left-sidebar.html" className="deal-image">
                                                <img
                                                    src={require("./../assets/images/vegetable/product/11.png")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                            </a>

                                            <a href="shop-left-sidebar.html" className="deal-contain">
                                                <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                                <h6>
                                                    $52.57 <del>57.62</del> <span>500 G</span>
                                                </h6>
                                            </a>
                                        </div>
                                    </li>

                                    <li className="list-3">
                                        <div className="deal-offer-contain">
                                            <a href="shop-left-sidebar.html" className="deal-image">
                                                <img
                                                    src={require("./../assets/images/vegetable/product/12.png")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                            </a>

                                            <a href="shop-left-sidebar.html" className="deal-contain">
                                                <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                                <h6>
                                                    $52.57 <del>57.62</del> <span>500 G</span>
                                                </h6>
                                            </a>
                                        </div>
                                    </li>

                                    <li className="list-1">
                                        <div className="deal-offer-contain">
                                            <a href="shop-left-sidebar.html" className="deal-image">
                                                <img
                                                    src={require("./../assets/images/vegetable/product/13.png")}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                            </a>

                                            <a href="shop-left-sidebar.html" className="deal-contain">
                                                <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                                <h6>
                                                    $52.57 <del>57.62</del> <span>500 G</span>
                                                </h6>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="theme-option">
                <div className="back-to-top">
                    <a id="back-to-top" href="#">
                        <i className="fas fa-chevron-up"></i>
                    </a>
                </div>
            </div>

            <div className="bg-overlay"></div>
        </Layout>
    );
}
