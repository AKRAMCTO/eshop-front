import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';

export default function Menu() {
    const {isLoggedIn} = useContext(AuthProvider)

    return (
        <div className="mobile-menu d-md-none d-block mobile-cart">
            <ul>
                <li className="active">
                    <Link to="/">
                        <i className="iconly-Home icli"></i>
                        <span>Accueil</span>
                    </Link>
                </li>

                <li className="mobile-category">
                    <Link to="/products">
                        <i className="iconly-Category icli js-link"></i>
                        <span>Catégorie</span>
                    </Link>
                </li>
                {/* <li>
                    <Link to="/" className="search-box">
                        <i className="iconly-Search icli"></i>
                        <span>Recherche</span>
                    </Link>
                </li> */}
                <li>
                    <Link to={(isLoggedIn) ? `/account/wishlist` : `/wishlist`} className="notifi-wishlist">
                        <i className="iconly-Heart icli"></i>
                        <span>Wishlist</span>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <i className="iconly-Bag-2 icli fly-cate"></i>
                        <span>Panier</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}