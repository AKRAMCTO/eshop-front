import React, { useContext, useEffect, useState } from 'react';
import { Eye, Heart, Minus, Plus, X } from 'react-feather';
import { Link } from 'react-router-dom';
import { CartAndWishlistProvider } from '../../contexts/CartAndWishlistContext';
import { TailSpin } from 'react-loader-spinner';
import { AuthProvider } from '../../contexts/AuthContext';

export default function ProductBox({ product, isWishlist = false, isHorizontal = false }) {
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
    // const [removeLoadingCart, setRemoveLoadingCart] = useState(false)

    const [currentQuantity, setCurrentQuantity] = useState(0)
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
    const toggleQuantity  = async (move) => {
        if(product?.is_active === 1 || product?.is_active === 2){
            if(move === 'minus'){
                if(quantity > 0) setQuantity(quantity-1)
            }else{
                setQuantity(quantity+1)
            }
        }
    };
    const addQuantity  = async (value) => {
        if(product?.is_active === 1 || product?.is_active === 2){
            if(value >= 0){
                setQuantity(parseInt(value))
            }else{
                setQuantity(0)
            }

            // if(value > 1){
            //     setQuantity(parseInt(value))
            // }else{
            //     setQuantity(1)
            // }
        }
    };

    const handleAddToCard = async () => {
        // console.log('handleAddToCard')
        // console.log(quantity + ' -- ' + currentQuantity)
        if(product?.is_active === 1 || product?.is_active === 2){
            if(quantity > 0 && quantity !== currentQuantity){
                // console.log(quantity + ' -- ' + currentQuantity)
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
        <div className={`${(isWishlist) ? 'product-box-3 theme-bg-white' : ''} ${(isHorizontal) ? 'horizontal' : 'vertical'} ${(!isWishlist) ? 'product-box product-white-bg' : ''} ${(product?.is_active === 1) ? 'in_stock' : ((product?.is_active === 2) ? 'come_soon' : 'out_stock')} wow fadeIn`}>
            {(product?.is_active === 1) && <div className='product-status'><strong>En stock</strong></div>}
            {(product?.is_active === 2) && <div className='product-status'><strong>En arrivage</strong></div>}
            {(product?.is_active === 3) && <div className='product-status'><strong>En rupture de stock</strong></div>}
            <div className="product-header">
                <div className="product-image">
                    <Link to={`/product/${product?.slug}`}>
                        <img src={product?.full_image} className="img-fluid lazyload" alt={product?.title} />
                    </Link>
                    {(!isHorizontal && isWishlist) ?
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
                    {(!isHorizontal && !isWishlist) ?
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
                    {(!isHorizontal) ? 
                        <>
                            {(product?.new_price && product?.new_price?.discount) ? 
                                <h6 className="price theme-color">
                                    {product?.new_price?.new_price} DH TTC
                                    <span>{product?.price_ttc} DH TTC</span>
                                </h6>
                            :
                                <h6 className="price theme-color">{product?.price_ttc} DH TTC</h6>
                            }
                            <div className="add-to-cart-box">
                                <div className={`cart_qty qty-box`}>
                                    <div className="input-group bg-white">
                                        <button 
                                            type="button"
                                            disabled={addLoadingCart}
                                            className="qty-left-minus" 
                                            onClick={(product?.is_active === 1 || product?.is_active === 2) ? () => toggleQuantity('minus') : null}
                                        >
                                            <Minus />
                                        </button>
                                        <input 
                                            type="number"
                                            step={1} 
                                            min={0} 
                                            onChange={(event) => addQuantity(event?.target?.value)} 
                                            className="form-control input-number qty-input" 
                                            value={quantity} 
                                        />
                                        <button 
                                            type="button"
                                            disabled={addLoadingCart}
                                            className="qty-right-plus" 
                                            onClick={(product?.is_active === 1 || product?.is_active === 2) ? () => toggleQuantity('plus') : null}
                                        >
                                            <Plus />
                                        </button>
                                    </div>
                                    {/* ${quantityElement && "open"}`} */}
                                    <div className='text-center'>
                                        <button
                                            type="button"
                                            disabled={addLoadingCart}
                                            className={`btn btn-add-cart addcart-button`}
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
                                                "Ajouter"
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </>
                    :
                        null
                    }
                </div>
                {(isHorizontal && product?.product_properties) ?
                    <div className="list-properties">
                        <ul className="product-info-list product-info">
                            {product?.product_properties.map((item, key) =>
                                <li key={`product_${product?.id}_properties_${item?.id}`}><strong>{item?.property?.label}:</strong> {item?.value} {item?.measure?.label}</li>
                            )}
                        </ul>
                    </div>
                    :
                    null
                }
                {(isHorizontal) ?
                    <div className='horizontal-quantity-box'>
                        {(product?.new_price && product?.new_price?.discount) ? 
                            <h6 className="price theme-color">
                                {product?.new_price?.new_price} DH TTC
                                <span>{product?.price_ttc} DH TTC</span>
                            </h6>
                        :
                            <h6 className="price theme-color">{product?.price_ttc} DH TTC</h6>
                        }
                        <div className="add-to-cart-box">
                            <div className={`cart_qty qty-box`}>
                                <div className="input-group bg-white">
                                    <button 
                                        type="button"
                                        disabled={addLoadingCart}
                                        className="qty-left-minus" 
                                        onClick={(product?.is_active === 1 || product?.is_active === 2) ? () => toggleQuantity('minus') : null}
                                    >
                                        <Minus />
                                    </button>
                                    <input 
                                        type="number"
                                        step={1} 
                                        min={0} 
                                        onChange={(event) => addQuantity(event?.target?.value)} 
                                        className="form-control input-number qty-input" 
                                        value={quantity} 
                                    />
                                    <button 
                                        type="button"
                                        disabled={addLoadingCart}
                                        className="qty-right-plus" 
                                        onClick={(product?.is_active === 1 || product?.is_active === 2) ? () => toggleQuantity('plus') : null}
                                    >
                                        <Plus />
                                    </button>
                                </div>
                                {/* ${quantityElement && "open"}`} */}
                                <div className='text-center'>
                                    <button
                                        type="button"
                                        disabled={addLoadingCart}
                                        className={`btn btn-add-cart addcart-button`}
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
                                            "Ajouter"
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}