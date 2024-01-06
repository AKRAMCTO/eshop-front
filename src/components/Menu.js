import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import SearchProductsTablet from './Home/SearchProductsTablet';
import MenuCategories from './MenuCategories';
import { useMediaQuery } from 'react-responsive';

export default function Menu() {
    const {isLoggedIn} = useContext(AuthProvider)
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    const [ categories, setCategories ] = useState(false)
    const [ searchTablet, setSearchTablet ] = useState(false)
    
    const toggleCategories = (value) => setCategories(value)
    const toggleSearchTablet = (value) => setSearchTablet(value)

    return (
        <>
            {isMobile ? 
                <>
                    <div className={`search-mobile ${searchTablet ? 'active' : ''}`}>
                        <SearchProductsTablet toggleSearchTablet={toggleSearchTablet} status={searchTablet ? 'active' : ''} />
                    </div>
                    <MenuCategories toggleCategories={toggleCategories} status={categories ? 'active' : ''} />
                </>
                :
                <div />
            }
            <div className="mobile-menu d-md-none d-block mobile-cart">
                <ul>
                    <li className={`${window.location.pathname === '/' ? 'active' : ''}`}>
                        <Link to="/">
                            <i className="iconly-Home icli"></i>
                            <span>Accueil</span>
                        </Link>
                    </li>

                    <li className={`${categories ? 'active' : ''}`}>
                        <button onClick={() => toggleCategories(true)}>
                            <i className="iconly-Category icli js-link"></i>
                            <span>Catégorie</span>
                        </button>
                    </li>
                    <li className={`${searchTablet ? 'active' : ''}`}>
                        <button onClick={() => toggleSearchTablet(true)} className="search-box">
                            <i className="iconly-Search icli"></i>
                            <span>Recherche</span>
                        </button>
                    </li>
                    <li className={`${(window.location.pathname === '/account/wishlist' || window.location.pathname === '/wishlist') ? 'active' : ''}`}>
                        <Link to={(isLoggedIn) ? `/account/wishlist` : `/wishlist`} className="notifi-wishlist">
                            <i className="iconly-Heart icli"></i>
                            <span>Wishlist</span>
                        </Link>
                    </li>
                    <li className={`${window.location.pathname === '/cart' ? 'active' : ''}`}>
                        <Link to="/cart">
                            <i className="iconly-Bag-2 icli fly-cate"></i>
                            <span>Panier</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}