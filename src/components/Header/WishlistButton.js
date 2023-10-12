import React, { useContext } from 'react';
import { Heart } from 'react-feather';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { AuthProvider } from '../../contexts/AuthContext';
import { CartAndWishlistProvider } from '../../contexts/CartAndWishlistContext';

export default function WishlistButton() {
    const { isLoggedIn } = useContext(AuthProvider);
    const { 
        wishlistItemsLength, wishlistItemsLoading, addWishlistLoading, removeWishlistLoading, 
    } = useContext(CartAndWishlistProvider);

    return (
        <li className="right-side">
            <Link
                to={(isLoggedIn) ? `/account/wishlist` : `/wishlist`}
                className="btn p-0 position-relative header-wishlist"
            >
                <Heart />
                <span className="position-absolute top-0 start-100 translate-middle badge">
                    {(wishlistItemsLoading || addWishlistLoading || removeWishlistLoading) ? 
                        <TailSpin
                            color="#fff"
                            height={10}
                            width={10}
                            visible={wishlistItemsLoading || addWishlistLoading || removeWishlistLoading}
                        />
                    :
                        wishlistItemsLength
                    }
                </span>
            </Link>
        </li>
    );
}
