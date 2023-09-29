import React, { useContext, useEffect, useState } from 'react';
import { Eye, Heart, X } from 'react-feather';
import { Link } from 'react-router-dom';
import { CartAndWishlistProvider } from '../../contexts/CartAndWishlistContext';
import { TailSpin } from 'react-loader-spinner';
import { AuthProvider } from '../../contexts/AuthContext';

export default function ProductBox({ product, isWishlist = false }) {
    const { 
        wishListDataKeys, 
        addToWishListMutation, removeFromWishListMutation, wishlistItemsLoading, addWishlistLoading, removeWishlistLoading,
        getWishlistItemsGuestLoading, storeGuestWishlistItem, removeGuestWishlistItem
    
    } = useContext(CartAndWishlistProvider)
    const { isLoggedIn } = useContext(AuthProvider)
    const [ addItemInWishlist, setAddItemInWishlist ] = useState(false)
    const [addLoading, setAddLoading] = useState(false)
    const [removeLoading, setRemoveLoading] = useState(false)

    const handleAddToWishList = async () => {
        console.log('checked add')
        setAddLoading(true);
        try {
            if(isLoggedIn) await addToWishListMutation(product.id);
            else await storeGuestWishlistItem(product.id);
        } catch (error) {
            console.log(error)
            setAddLoading(false);
        }
    };
    const handleRemoveFromWishList = async () => {
        console.log('checked remove')
        setRemoveLoading(true);
        try {
            if(isLoggedIn) await removeFromWishListMutation(product.id);
            else await removeGuestWishlistItem(product.id);
        } catch (error) {
            setRemoveLoading(false);
        }
    };

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
        let timer = setTimeout(() => {
            if(addLoading && !getWishlistItemsGuestLoading && !wishlistItemsLoading && !addWishlistLoading && !removeWishlistLoading) {
                setAddLoading(false)
            }
            if(removeLoading && !getWishlistItemsGuestLoading && !wishlistItemsLoading && !addWishlistLoading && !removeWishlistLoading) {
                setRemoveLoading(false)
            }
        }, 0);
        return () => clearTimeout(timer);
    }, [addLoading, removeLoading, getWishlistItemsGuestLoading, wishlistItemsLoading, addWishlistLoading, removeWishlistLoading])

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
                                disabled={(removeLoading) ? true : false}
                                className="btn wishlist-button close_button"
                            >
                                {(removeLoading) ? 
                                    <TailSpin
                                        color="#2A3466"
                                        height={20}
                                        width={20}
                                        visible={(removeLoading)}
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
                                {(addLoading) ? 
                                    <TailSpin
                                        color="#2A3466"
                                        height={16}
                                        width={16}
                                        visible={addLoading}
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
                    <h6 className="sold weight text-content fw-normal">{`${product?.units_measurement} ${product?.values}`}</h6>
                    <h6 className="price theme-color">$ 80.00</h6>
                    <div className="add-to-cart-box bg-white">
                        <button className="btn btn-add-cart addcart-button" tabIndex="0">
                            Add
                            <span className="add-icon"><i className="fa-solid fa-plus"></i></span>
                        </button>
                        <div className="cart_qty qty-box">
                            <div className="input-group">
                                <button type="button" className="qty-left-minus" data-type="minus" data-field="">
                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                </button>
                                <input className="form-control input-number qty-input" type="text" name="quantity" value="0" />
                                <button type="button" className="qty-right-plus" data-type="plus" data-field="">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}