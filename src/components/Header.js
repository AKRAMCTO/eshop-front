import React from 'react';
import { AlignLeft, Headphones, Heart, MapPin, Search, ShoppingBag, User, X, Zap } from 'react-feather';
import { DataProvider } from '../contexts/DataContext';
import { Link } from 'react-router-dom';
import ContactPhone from './ContactPhone';
import MenuPrimary from './MenuPrimary';
import MenuCategories from './MenuCategories';

export default function Heade() {
    const { settings } = React.useContext(DataProvider);

    return (
        <header className="pb-md-4 pb-0">
            <div className="header-top">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-9 d-xxl-flex d-none">
                            {(settings && settings?.store_address) && 
                                <div className="top-left-header">
                                    <i className="iconly-Location icli text-white"></i>
                                    <span className="text-white">{settings?.store_address}</span>
                                </div>
                            }
                            {(settings && settings?.store_email) && 
                                <div className="top-left-header mx-5">
                                    <i className="iconly-Send icli text-white"></i>
                                    <span className="text-white">{settings?.store_email}</span>
                                </div>
                            }
                            {(settings && settings?.store_fix) && 
                                <div className="top-left-header">
                                    <i className="iconly-Call icli text-white"></i>
                                    <span className="text-white">{settings?.store_fix}</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-nav top-header sticky-header">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="navbar-top">
                                <button
                                    className="navbar-toggler d-xl-none d-inline navbar-menu-button"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#MenuPrimary"
                                >
                                    <span className="navbar-toggler-icon">
                                        <i className="fa-solid fa-bars"></i>
                                    </span>
                                </button>
                                {(settings && settings?.store_logo) && 
                                    <Link to="/" className="web-logo nav-logo">
                                        <img
                                            src={settings?.store_logo}
                                            className="img-fluid lazyload"
                                            alt={settings?.store_name}
                                        />
                                    </Link>
                                }

                                <div className="middle-box">
                                    <div className="location-box">
                                        <button
                                            className="btn location-button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#locationModal"
                                        >
                                            <span className="location-arrow">
                                                <MapPin />
                                            </span>
                                            <span className="locat-name">Your Location</span>
                                            <i className="fa-solid fa-angle-down"></i>
                                        </button>
                                    </div>

                                    <div className="search-box">
                                        <div className="input-group">
                                            <input
                                                type="search"
                                                className="form-control"
                                                placeholder="I'm searching for..."
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                            />
                                            <button className="btn" type="button" id="button-addon2">
                                                <Search />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="rightside-box">
                                    <div className="search-full">
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <Search />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control search-type"
                                                placeholder="Search here.."
                                            />
                                            <span className="input-group-text close-search">
                                                <X />
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="right-side-menu">
                                        <li className="right-side">
                                            <div className="delivery-login-box">
                                                <div className="delivery-icon">
                                                    <div className="search-box">
                                                        <Search />
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </li>
                                        <li className="right-side">
                                            <div className="onhover-dropdown">
                                                <div className="delivery-login-box easy-contact">
                                                    <div className="delivery-icon">
                                                        <Headphones />
                                                    </div>
                                                    <div className="delivery-detail">
                                                        <h6>Recevez un apple gratuit</h6>
                                                    </div>
                                                </div>
                                                <div className="onhover-div">
                                                    <ContactPhone />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="right-side">
                                            <a
                                                href="wishlist.html"
                                                className="btn p-0 position-relative header-wishlist"
                                            >
                                                <Heart />
                                            </a>
                                        </li>
                                        <li className="right-side">
                                            <div className="onhover-dropdown header-badge">
                                                <button
                                                    type="button"
                                                    className="btn p-0 position-relative header-wishlist"
                                                >
                                                    <ShoppingBag />
                                                    <span className="position-absolute top-0 start-100 translate-middle badge">
                                                        2
                                                        <span className="visually-hidden">
                                                            unread messages
                                                        </span>
                                                    </span>
                                                </button>

                                                <div className="onhover-div">
                                                    <ul className="cart-list">
                                                        <li className="product-box-contain">
                                                            <div className="drop-cart">
                                                                <a
                                                                    href="product-left-thumbnail.html"
                                                                    className="drop-image"
                                                                >
                                                                    <img
                                                                        src={require("./../assets/images/vegetable-product-1.png")}
                                                                        className="lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>

                                                                <div className="drop-contain">
                                                                    <a href="product-left-thumbnail.html">
                                                                        <h5>
                                                                            Fantasy Crunchy Choco Chip Cookies
                                                                        </h5>
                                                                    </a>
                                                                    <h6>
                                                                        <span>1 x</span> $80.58
                                                                    </h6>
                                                                    <button className="close-button close_button">
                                                                        <i className="fa-solid fa-xmark"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="product-box-contain">
                                                            <div className="drop-cart">
                                                                <a
                                                                    href="product-left-thumbnail.html"
                                                                    className="drop-image"
                                                                >
                                                                    <img
                                                                        src={require("./../assets/images/vegetable-product-1.png")}
                                                                        className="lazyload"
                                                                        alt=""
                                                                    />
                                                                </a>

                                                                <div className="drop-contain">
                                                                    <a href="product-left-thumbnail.html">
                                                                        <h5>
                                                                            Peanut Butter Bite Premium Butter
                                                                            Cookies 600 g
                                                                        </h5>
                                                                    </a>
                                                                    <h6>
                                                                        <span>1 x</span> $25.68
                                                                    </h6>
                                                                    <button className="close-button close_button">
                                                                        <i className="fa-solid fa-xmark"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                    <div className="price-box">
                                                        <h5>Total :</h5>
                                                        <h4 className="theme-color fw-bold">$106.58</h4>
                                                    </div>

                                                    <div className="button-group">
                                                        <a
                                                            href="cart.html"
                                                            className="btn btn-sm cart-button"
                                                        >
                                                            View Cart
                                                        </a>
                                                        <a
                                                            href="checkout.html"
                                                            className="btn btn-sm cart-button theme-bg-color
                                          text-white"
                                                        >
                                                            Checkout
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="right-side onhover-dropdown">
                                            <div className="delivery-login-box">
                                                <div className="delivery-icon">
                                                    <User />
                                                </div>
                                                <div className="delivery-detail">
                                                    <h6>Hello,</h6>
                                                    <h5>My Account</h5>
                                                </div>
                                            </div>

                                            <div className="onhover-div onhover-div-login">
                                                <ul className="user-box-name">
                                                    <li className="product-box-contain">
                                                        <i></i>
                                                        <a href="./pages/login.html">Log In</a>
                                                    </li>

                                                    <li className="product-box-contain">
                                                        <a href="./pages/sign-up.html">Register</a>
                                                    </li>

                                                    <li className="product-box-contain">
                                                        <a href="./pages/forgot.html">Forgot Password</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid-lg header-bottom">
                <div className="row">
                    <div className="col-12">
                        <div className="header-nav">
                            <MenuCategories />

                            <MenuPrimary />

                            <a className="header-nav-right" href="./pages/seller-become.html">
                                <button className="btn deal-button">
                                    <Zap />
                                    <span>Devenir vendeur</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
