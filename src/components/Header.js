import React, { useContext, useState } from 'react';
import { Headphones, Heart, Search, ShoppingBag, User, X, Zap } from 'react-feather';
import { Link } from 'react-router-dom';

import WishlistButton from './Header/WishlistButton';
import CartButton from './Header/CartButton';
import AccountButton from './Header/AccountButton';

import ContactPhone from './ContactPhone';
import MenuPrimary from './MenuPrimary';
import MenuCategories from './MenuCategories';
import { DataProvider } from '../contexts/DataContext';
import { AuthProvider } from '../contexts/AuthContext';
import SearchProducts from './Home/SearchProducts';
import SearchProductsTablet from './Home/SearchProductsTablet';
import { useMediaQuery } from 'react-responsive';

export default function Heade() {
    const { settings, isMobile } = React.useContext(DataProvider);
    const { userId, authenticationFetching, authenticationLoading } = useContext(AuthProvider);
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 })
    const isTabletOrMobile = useMediaQuery({ minWidth: 991 })

    const [ menu, setMenu ] = useState(false)
    const [ searchTablet, setSearchTablet ] = useState(false)

    const toggleMenu = (value) => setMenu(value)
    const toggleSearchTablet = (value) => setSearchTablet(value)

    return (
        <header>
            {/* <div className="header-top">
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
                                <div className="top-left-header">
                                    <i className="iconly-Send icli text-white"></i>
                                    <span className="text-white">{settings?.store_email}</span>
                                </div>
                            }
                            {(settings && settings?.store_fix) && 
                                <div className="top-left-header mx-5">
                                    <i className="iconly-Call icli text-white"></i>
                                    <span className="text-white">{settings?.store_fix}</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="top-nav top-header sticky-header">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className={`navbar-top ${searchTablet ? 'active' : ''}`}>
                                {isTabletOrMobile && 
                                    <button
                                        className="navbar-toggler d-xl-none d-inline navbar-menu-button"
                                        type="button"
                                        onClick={() => toggleMenu(true)}
                                    >
                                        <span className="navbar-toggler-icon">
                                            <i className="fa-solid fa-bars"></i>
                                        </span>
                                    </button>
                                }
                                {(settings && settings?.store_logo) && 
                                    <Link to="/" className="web-logo nav-logo">
                                        <img
                                            src={settings?.store_logo}
                                            className="img-fluid lazyload"
                                            alt={settings?.store_name}
                                        />
                                    </Link>
                                }

                                <SearchProducts />

                                <div className="rightside-box">

                                    {isTablet && 
                                        <SearchProductsTablet toggleSearchTablet={toggleSearchTablet} status={searchTablet ? 'active' : ''} />
                                    }
                                    
                                    <ul className="right-side-menu">
                                        {isTablet && 
                                            <li className="right-side">
                                                <div className="delivery-login-box">
                                                    <div className="delivery-icon">
                                                        <div className="search-box" onClick={() => toggleSearchTablet(true)}>
                                                            <Search />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        }
                                        <li className={`right-side d-block`}>
                                            <div className="onhover-dropdown">
                                                <div className="delivery-login-box easy-contact">
                                                    <div className="delivery-icon">
                                                        <Headphones />
                                                    </div>
                                                    {(!isMobile) &&
                                                        <div className="delivery-detail">
                                                            <h6>Recevez un Appel gratuit</h6>
                                                        </div>
                                                    }
                                                </div>
                                                <div className="onhover-div">
                                                    <ContactPhone />
                                                </div>
                                            </div>
                                        </li>
                                        
                                        <WishlistButton />
                                        
                                        <CartButton />
                                        
                                        <AccountButton />
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

                            <MenuPrimary menu={menu} toggleMenu={toggleMenu} />

                            {/* {(!authenticationLoading && !authenticationFetching)
                                ?
                                    (!userId ? 
                                        <Link to={`/devenir-vendeur`} className="header-nav-right">
                                            <button className="btn deal-button">
                                                <Zap />
                                                <span>Devenir un revendeur</span>
                                            </button>
                                        </Link>
                                    :
                                        <div />
                                    )
                                :
                                <div />
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
