import React, { useContext, useEffect, useState } from 'react';
import { Eye, Heart, Minus, Plus, X } from 'react-feather';
import { Link } from 'react-router-dom';
import { CartAndWishlistProvider } from '../../contexts/CartAndWishlistContext';
import { TailSpin } from 'react-loader-spinner';
import { AuthProvider } from '../../contexts/AuthContext';

export default function ProductBox({ product, isWishlist = false }) {
    const { 
        wishListDataKeys, 
        addToWishListMutation, removeFromWishListMutation, wishlistItemsLoading, addWishlistLoading, removeWishlistLoading,
        getWishlistItemsGuestLoading,  storeGuestWishlistItem, removeGuestWishlistItem,
        cartDataChecker,
        addToCartMutation, storeGuestCartItem
    } = useContext(CartAndWishlistProvider)

    const { isLoggedIn, userData } = useContext(AuthProvider)
    const [ addItemInWishlist, setAddItemInWishlist ] = useState(false)
    const [addLoadingWishlist, setAddLoadingWishlist] = useState(false)
    const [removeLoadingWishlist, setRemoveLoadingWishlist] = useState(false)
    
    const [addItemInCart, setAddItemInCart] = useState(false)
    const [addLoadingCart, setAddLoadingCart] = useState(false)
    // const [removeLoadingCart, setRemoveLoadingCart] = useState(false)

    const [quantityElement, setQuantityElement] = useState(false)
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        if(!isWishlist){
            if(wishListDataKeys.includes(product?.id)){
                setAddItemInWishlist(true)
            }else{
                setAddItemInWishlist(false)
            }
        }
    },[wishListDataKeys])

    useEffect(() => {
        let cartFilter = cartDataChecker.filter(function (el) { return el.id === product?.id })
        if(product && cartFilter.length > 0){
            cartFilter = cartFilter[0]
            setAddItemInCart(true)
            setQuantity(cartFilter?.quantity)
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

    useEffect(() => {
        if(quantity > 0){
            handleAddToCard()
        }
    }, [quantity])

    const handleAddToWishList = async () => {
        console.log('checked add')
        setAddLoadingWishlist(true);
        try {
            if(isLoggedIn) await addToWishListMutation(product.id);
            else await storeGuestWishlistItem(product.id);
        } catch (error) {
            console.log(error)
            setAddLoadingWishlist(false);
        }
    };
    const handleRemoveFromWishList = async () => {
        console.log('checked remove')
        setRemoveLoadingWishlist(true);
        try {
            if(isLoggedIn) await removeFromWishListMutation(product.id);
            else await removeGuestWishlistItem(product.id);
        } catch (error) {
            setRemoveLoadingWishlist(false);
        }
    };

    const showQuantity = () => setQuantityElement(!quantityElement)
    const toggleQuantity  = async (move) => {
        if(move === 'minus'){
            if(quantity > 1) setQuantity(quantity-1)
        }else{
            setQuantity(quantity+1)
        }
    };

    const handleAddToCard = async () => {
        setAddLoadingCart(true);
        try {
            if(isLoggedIn) await addToCartMutation({id: product?.id, quantity: quantity});
            else await storeGuestCartItem({id: product?.id, quantity: quantity});
            setAddLoadingCart(false);
        } catch (error) {
            setAddLoadingCart(false);
        }
    };

    return (
        <div className={`${(isWishlist) ? 'product-box-3 theme-bg-white' : ''} ${(!isWishlist) ? 'product-box product-white-bg' : ''} wow fadeIn`}>
            <div className="product-header">
                <div className="product-image">
                    <Link to={`/product/${product?.slug}`}>
                        <img src={product?.full_image} className="img-fluid lazyload" alt={product?.title} />
                    </Link>
                    {isWishlist ?
                        <div className="product-header-top">
                            <button                           
                                onClick={() => handleRemoveFromWishList(product.id) }
                                disabled={(removeLoadingWishlist) ? true : false}
                                className="btn wishlist-button close_button"
                            >
                                {(removeLoadingWishlist) ? 
                                    <TailSpin
                                        color="#2A3466"
                                        height={20}
                                        width={20}
                                        visible={(removeLoadingWishlist)}
                                    />
                                : 
                                    <X />
                                }
                            </button>
                        </div>
                    :
                        <div />
                    }
                    {!isWishlist ?
                        <ul className="product-option">
                            <li><Link to={`/product/${product?.slug}`}><Eye /></Link></li>
                            <li>
                                {(addLoadingWishlist) ? 
                                    <TailSpin
                                        color="#2A3466"
                                        height={16}
                                        width={16}
                                        visible={addLoadingWishlist}
                                    />
                                : 
                                    <button 
                                        onClick={(addItemInWishlist) ? handleRemoveFromWishList : handleAddToWishList}
                                        type="button" 
                                        className={`notifi-wishlist ${addItemInWishlist && 'active'}`}
                                    >
                                        <Heart />
                                    </button>
                                }
                            </li>
                        </ul>
                    :
                        null
                    }
                </div>
            </div>
            <div className="product-footer">
                <div className="product-detail position-relative">
                    <Link to={`/product/${product?.slug}`}><h6 className="name">{product?.title}</h6></Link>
                    <h6 className="sold weight text-content fw-normal">{`${product?.units_measurement ?? ''} ${product?.values ?? ''}`}</h6>
                    <h6 className="price theme-color">{product?.price_ttc} Dhs</h6>
                    <div className="add-to-cart-box bg-white">
                        <button 
                            type='type' 
                            className={`btn btn-add-cart addcart-button ${addItemInCart && "text-success font-bold"}`}
                            onClick={showQuantity}>
                            {(addItemInCart) ? "Ajouté" : "Ajouter"} 
                            <span className="add-icon"><Plus /></span>
                        </button>
                        <div className={`cart_qty qty-box ${quantityElement && "open"}`}>
                            <div className="input-group">
                                <button 
                                    type="button" 
                                    className="qty-left-minus" 
                                    onClick={() => toggleQuantity('minus')}
                                    disabled={addLoadingCart}
                                >
                                    <Minus />
                                </button>
                                <input className="form-control input-number qty-input" type="text" readOnly value={quantity} />
                                <button 
                                    type="button" 
                                    className="qty-right-plus" 
                                    onClick={() => toggleQuantity('plus')}
                                    disabled={addLoadingCart}
                                >
                                    <Plus />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}