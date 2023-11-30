import React, { useContext, useState } from 'react';
import { ShoppingBag } from 'react-feather';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { AuthProvider } from '../../contexts/AuthContext';
import { CartAndWishlistProvider } from '../../contexts/CartAndWishlistContext';
import CartHeaderItem from './CartHeaderItem';

export default function CartButton() {
    const { isLoggedIn, userData } = useContext(AuthProvider);
    const {
        cartItemsLength, cartCalculation, cartItems, removeFromCartMutation, removeGuestCartItem,
        cartItemsLoading, cartItemsFetching, addCartLoading, updateCartLoading, removeCartLoading, combineCartLoading
    } = useContext(CartAndWishlistProvider);
    const [loading, setLoading] = useState(null);

    const RemoveCartItem  = async (move) => {
      setLoading(move);
      try {
          if(isLoggedIn) await removeFromCartMutation(move);
          else await removeGuestCartItem(move);
          setLoading(null);
          // setAddItemInWishlist(true);
      } catch (error) {
          // // console.log('addToWishListMutation error => ', error)
          // if (error.response.data.message === 'Item founded on the Wishlist') {
          //     setAddItemInWishlist(true);
          // }
          setLoading(null);
      }
    };

    return (
        <li className="right-side">
            <div className="onhover-dropdown header-badge">
                <Link
                    to={`/cart`}
                    className="btn p-0 position-relative header-wishlist"
                >
                    <ShoppingBag />
                    <span className="position-absolute top-0 start-100 translate-middle badge">
                        {(cartItemsLoading || cartItemsFetching || addCartLoading || updateCartLoading || removeCartLoading || combineCartLoading) ?
                            <TailSpin
                                color="#fff"
                                height={10}
                                width={10}
                                visible={cartItemsLoading || cartItemsFetching || addCartLoading || updateCartLoading || removeCartLoading || combineCartLoading}
                            />
                            :
                            cartItemsLength
                        }
                    </span>
                </Link>

                <div className="onhover-div cart-side">
                    {(cartItems && cartItems.length) ?
                        <>
                            <ul className="cart-list">
                                {(cartItemsLoading || cartItemsFetching || addCartLoading || updateCartLoading || removeCartLoading || combineCartLoading) ?
                                    <TailSpin
                                        color="#fff"
                                        height={10}
                                        width={10}
                                        visible={cartItemsLoading || cartItemsFetching || addCartLoading || updateCartLoading || removeCartLoading || combineCartLoading}
                                    />
                                    :
                                    cartItems.map((item, key) => 
                                        <CartHeaderItem key={`cart-item-header-${key}`} item={item} loading={loading} RemoveCartItem={RemoveCartItem} />
                                    )
                                }
                            </ul>
                            {(cartCalculation) ? 
                                <>
                                    <div className="price-box">
                                        <h5>Total :</h5>
                                        <h4 className="theme-color fw-bold">{cartCalculation?.total} DH TTC</h4>
                                    </div>

                                    <div className="button-group">
                                        <Link to={`/cart`} className="btn btn-sm cart-button">Voir le panier</Link>
                                        {(!isLoggedIn || (isLoggedIn && userData && userData?.status !== 1)) ?
                                            <Link to={'/checkout'} className="btn btn-sm cart-button theme-bg-color text-white">Commander</Link>
                                        : null}
                                    </div>
                                </>
                                :
                                <div />
                            }
                        </>
                    :
                        <div>
                            <h2 className="text-center my-5 no-data-found">Aucune produit trouvée</h2>
                        </div>
                    }
                </div>
            </div>
        </li>
    );
}
