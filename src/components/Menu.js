import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {

    return (
        <div className="mobile-menu d-md-none d-block mobile-cart">
            <ul>
                <li className="active">
                    <Link to="/">
                        <i className="iconly-Home icli"></i>
                        <span>Home</span>
                    </Link>
                </li>

                <li className="mobile-category">
                    <Link to="/">
                        <i className="iconly-Category icli js-link"></i>
                        <span>Category</span>
                        </Link>
                </li>
                <li>
                    <Link to="/" className="search-box">
                        <i className="iconly-Search icli"></i>
                        <span>Search</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="notifi-wishlist">
                        <i className="iconly-Heart icli"></i>
                        <span>My Wish</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <i className="iconly-Bag-2 icli fly-cate"></i>
                        <span>Cart</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}