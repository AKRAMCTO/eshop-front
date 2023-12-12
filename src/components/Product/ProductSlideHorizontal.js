import React, { useContext, useEffect, useState } from 'react';
import { Eye, Heart, Minus, Plus, ShoppingCart, X } from 'react-feather';
import { Link } from 'react-router-dom';
import { CartAndWishlistProvider } from '../../contexts/CartAndWishlistContext';
import { TailSpin } from 'react-loader-spinner';
import { AuthProvider } from '../../contexts/AuthContext';

export default function ProductSlideHorizontal({ product }) {
    const { 
        wishListDataKeys, 
        addToWishListMutation, removeFromWishListMutation, wishlistItemsLoading, addWishlistLoading, removeWishlistLoading,
        getWishlistItemsGuestLoading,  storeGuestWishlistItem, removeGuestWishlistItem,
        cartDataChecker,
        addToCartMutation, storeGuestCartItem, 
        showPopup, openPopup
    } = useContext(CartAndWishlistProvider)

    const { isLoggedIn } = useContext(AuthProvider)
    const [ addItemInWishlist, setAddItemInWishlist ] = useState(false)
    const [addLoadingWishlist, setAddLoadingWishlist] = useState(false)
    const [removeLoadingWishlist, setRemoveLoadingWishlist] = useState(false)
    
    const [addItemInCart, setAddItemInCart] = useState(false)
    const [addLoadingCart, setAddLoadingCart] = useState(false)

    const [currentQuantity, setCurrentQuantity] = useState(0)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        if(wishListDataKeys.includes(product?.id)){
            setAddItemInWishlist(true)
        }else{
            setAddItemInWishlist(false)
        }
    },[wishListDataKeys])

    useEffect(() => {
        let cartFilter = cartDataChecker.filter(function (el) { return el.id === product?.id })
        if(product && cartFilter.length > 0){
            cartFilter = cartFilter[0]
            setAddItemInCart(true)
            setQuantity(cartFilter?.quantity)
            setCurrentQuantity(cartFilter?.quantity)
        }else{
            setAddItemInCart(false)
        }
    },[product, cartDataChecker])

    useEffect(() => {
        let timer = setTimeout(() => {
            if(setAddLoadingWishlist && !getWishlistItemsGuestLoading && !wishlistItemsLoading && !addWishlistLoading && !removeWishlistLoading) {
                setAddLoadingWishlist(false)
            }
            if(removeLoadingWishlist && !getWishlistItemsGuestLoading && !wishlistItemsLoading && !addWishlistLoading && !removeWishlistLoading) {
                setRemoveLoadingWishlist(false)
            }
        }, 0);
        return () => clearTimeout(timer);
    }, [addLoadingWishlist, removeLoadingWishlist, getWishlistItemsGuestLoading, wishlistItemsLoading, addWishlistLoading, removeWishlistLoading])

    const handleAddToWishList = async () => {
        setAddLoadingWishlist(true);
        try {
            if(isLoggedIn) await addToWishListMutation(product.id);
            else await storeGuestWishlistItem(product.id);
        } catch (error) {
            // console.log(error)
            setAddLoadingWishlist(false);
        }
    };
    const handleRemoveFromWishList = async () => {
        // console.log('checked remove')
        setRemoveLoadingWishlist(true);
        try {
            if(isLoggedIn) await removeFromWishListMutation(product.id);
            else await removeGuestWishlistItem(product.id);
        } catch (error) {
            setRemoveLoadingWishlist(false);
        }
    };
    const handleAddToCard = async () => {
        if(product?.is_active === 1 || product?.is_active === 2){
            if(quantity > 0 && quantity !== currentQuantity){
                setAddLoadingCart(true);
                try {
                    if(isLoggedIn) await addToCartMutation({id: product?.id, quantity: quantity});
                    else await storeGuestCartItem({id: product?.id, quantity: quantity});
                    setCurrentQuantity(quantity)

                    if(!showPopup){
                        let timer = setTimeout(() => {
                            setAddLoadingCart(false);
                            openPopup()
                        }, 1000);
                        return () => clearTimeout(timer);
                    }
                } catch (error) {
                    setAddLoadingCart(false);
                }
            }
        }
    };

    return (
        <li>
            <div className="offer-product">
                <Link to={`/product/${product?.slug}`} className="offer-image">
                    <img src={product?.full_image} className="lazyload" alt={product?.title} />
                </Link>

                <div className="offer-detail">
                    <div>
                        <Link to={`/product/${product?.slug}`} className="text-title" >
                            <h6 className="name">{product?.title}</h6>
                        </Link>
                        {(product?.new_price && product?.new_price?.discount) ? 
                            <h6 className="price theme-color">
                                {product?.new_price?.new_price} DH TTC
                                <span>{product?.price_ttc} DH TTC</span>
                            </h6>
                        :
                            <h6 className="price theme-color">{product?.price_ttc} DH TTC</h6>
                        }
                        <ul>
                            <li>
                                <button 
                                    onClick={(addItemInWishlist) ? handleRemoveFromWishList : handleAddToWishList}
                                    type="button" 
                                    className={`notifi-wishlist ${addItemInWishlist && 'active'}`}
                                >
                                    <Heart width={16} /> 
                                    {/* wishlist */}
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    disabled={addLoadingCart}
                                    className={`btn btn-add-cart addcart-button ${addItemInCart ? 'active' : ''}`}
                                    onClick={(product?.is_active === 1 || product?.is_active === 2) ? () => handleAddToCard() : null}
                                >
                                    {(addLoadingCart) ?  
                                        <TailSpin
                                            color="#2A3466"
                                            height={20}
                                            width={20}
                                            visible={addLoadingCart}
                                        />
                                    :
                                        <><ShoppingCart width={16} /> Ajouter</>
                                    }
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    )
}