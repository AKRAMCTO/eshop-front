import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Redirect } from "react-router-dom";
import { InfinitySpin, TailSpin } from "react-loader-spinner";
import { useQuery } from "react-query";

import { getSingleProduct } from "../queries/queries";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import SlideProducts from "../components/SlideProducts";
import Gallery from "../components/Product/Gallery";
import { Check, Heart, Minus, Plus, ShoppingCart } from "react-feather";
import { CartAndWishlistProvider } from "../contexts/CartAndWishlistContext";
import { AuthProvider } from "../contexts/AuthContext";
import Tabs from "../components/Product/Tabs";
import moment from "moment";
import 'moment/locale/fr';
import { DataProvider } from "../contexts/DataContext";

export default function Product() {
    const { product } = useParams();
    const { data, isLoading } = useQuery(
        ['getSingleProduct', product],
        () => getSingleProduct(product),
        { retry: true, refetchOnWindowFocus: false }
    );
    const { isLoggedIn } = useContext(AuthProvider)
    const { settings } = React.useContext(DataProvider);

    const { 
        wishListDataKeys, addToWishListMutation, storeGuestWishlistItem, removeFromWishListMutation, removeGuestWishlistItem, 
        cartDataChecker, addToCartMutation, storeGuestCartItem
        // , removeFromCartMutation, removeGuestCartItem, 
    } = useContext(CartAndWishlistProvider)
    const [quantity, setQuantity] = useState(1)
    
    const [addItemInCart, setAddItemInCart] = useState(false)

    const [addLoadingCart, setAddLoadingCart] = useState(false)
    const [addItemInWishlist, setAddItemInWishlist] = useState(false)
    const [addLoadingWishlist, setAddLoadingWishlist] = useState(false)
    const [removeLoading, setRemoveLoading] = useState(false)

    var fr = moment().locale('fr');
    var dateDelivery = (data?.is_active === 1) ? fr.add(7, 'days').format('dddd D MMMM YYYY') : fr.add(30, 'days').format('dddd D MMMM YYYY')

    useEffect(() => {
        if(data && wishListDataKeys.includes(data?.id)){
            setAddItemInWishlist(true)
        }else{
            setAddItemInWishlist(false)
        }
    },[data, wishListDataKeys])

    useEffect(() => {
        let cartFilter = cartDataChecker.filter(function (el) { return el.id === data?.id })
        if(data && cartFilter.length > 0){
            cartFilter = cartFilter[0]
            setAddItemInCart(true)
            setQuantity(cartFilter?.quantity)
        }else{
            setAddItemInCart(false)
        }
    },[data, cartDataChecker])

    const toggleQuantity  = async (move) => {
        if(move === 'minus'){
            if(quantity > 1) setQuantity(quantity - 1)
        }else{
            setQuantity(quantity + 1)
        }
    };

    const handleAddToCart = async () => {
        setAddLoadingCart(true);
        try {
            if(isLoggedIn) await addToCartMutation({id: data?.id, quantity: quantity});
            else await storeGuestCartItem({id: data?.id, quantity: quantity});
            setAddLoadingCart(false);
            // setAddItemInWishlist(true);
        } catch (error) {
            // // console.log('addToWishListMutation error => ', error)
            // if (error.response.data.message === 'Item founded on the Wishlist') {
            //     setAddItemInWishlist(true);
            // }
            setAddLoadingCart(false);
        }
    };

    const handleAddToWishList = async () => {
        setAddLoadingWishlist(true);
        try {
            if(isLoggedIn) await addToWishListMutation(data?.id);
            else await storeGuestWishlistItem(data?.id);
            setAddLoadingWishlist(false);
            // setAddItemInWishlist(true);
        } catch (error) {
            // // console.log('addToWishListMutation error => ', error)
            // if (error.response.data.message === 'Item founded on the Wishlist') {
            //     setAddItemInWishlist(true);
            // }
            setAddLoadingWishlist(false);
        }
    };
    const handleRemoveFromWishList = async () => {
        setRemoveLoading(true);
        try {
            if(isLoggedIn) await removeFromWishListMutation(data?.id);
            else await removeGuestWishlistItem(data?.id);
            setRemoveLoading(false);
        } catch (error) {
            setRemoveLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-vh-100 px-4 py-2 d-flex align-items-center justify-content-center">
                <Helmet>
                    <title>Loading... | Ecowatt</title>
                </Helmet>
                <InfinitySpin
                    type="ThreeDots"
                    color="#2A3466"
                    height={220}
                    width={220}
                    visible={isLoading}
                />
            </div>
        );
    }
    if (!data?.status && data?.redirect) {
        return <Redirect to={`/page-404`} />;
    }

    return (
        <Layout>
            <Helmet>
                <title>{`${data?.title} | Ecowatt`}</title>
            </Helmet>

            <Breadcrumb title={data?.title} />

            <section className="product-section">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-9 col-xl-8 col-lg-7 wow fadeInUp">
                            <div className="row g-4">

                                <div className="col-xl-6 wow fadeInUp">
                                    <div className="product-left-box">
                                        <Gallery thumbnail={data?.full_image} images={data?.gallery} name={data?.name} />
                                    </div>
                                </div>

                                <div className="col-xl-6 wow fadeInUp">
                                    <div className="right-box-contain">
                                        {/* <h6 className="offer-top">30% Off</h6> */}
                                        <h6 className="mb-2 font-bold">#{data?.ref}</h6>
                                        <h2 className="name">{data?.title}</h2>
                                        <div className="price-rating">
                                            <h3 className="theme-color price">{data?.price_ttc} DH TTC</h3>
                                        </div>

                                        {(data?.description) ?
                                            <div className="procuct-contain" dangerouslySetInnerHTML={{ __html: data?.description.split(' ').slice(0, 20).join(' ') }} />
                                            : null
                                        }
                                        
                                        {/* <div className="product-packege">
                                            <div className="product-title">
                                                <h4>Weight</h4>
                                            </div>
                                            <ul className="select-packege">
                                                <li>
                                                    <a href="javascript:void(0)" className="active">1/2 KG</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">1 KG</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">1.5 KG</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">Red Roses</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">With Pink Roses</a>
                                                </li>
                                            </ul>
                                        </div> */}

                                        {/* <div className="time deal-timer product-deal-timer mx-md-0 mx-auto" id="clockdiv-1"
                                            data-hours="1" data-minutes="2" data-seconds="3">
                                            <div className="product-title">
                                                <h4>Hurry up! Sales Ends In</h4>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="counter d-block">
                                                        <div className="days d-block">
                                                            <h5></h5>
                                                        </div>
                                                        <h6>Days</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="counter d-block">
                                                        <div className="hours d-block">
                                                            <h5></h5>
                                                        </div>
                                                        <h6>Hours</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="counter d-block">
                                                        <div className="minutes d-block">
                                                            <h5></h5>
                                                        </div>
                                                        <h6>Min</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="counter d-block">
                                                        <div className="seconds d-block">
                                                            <h5></h5>
                                                        </div>
                                                        <h6>Sec</h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div> */}

                                        {(data?.is_active !== 0 && data?.is_active !== 3) ?
                                            <>
                                                {(data?.is_active === 1) && <div className='h6 text-success mt-4'><strong>En stock</strong></div>}
                                                {(data?.is_active === 2) && <div className='h6 text-orange mt-4'><strong>En arrivage</strong></div>}
                                                <div className="note-box product-packege">
                                                    <div className="cart_qty qty-box product-qty">
                                                        <div className="input-group">
                                                            <button 
                                                                type="button" 
                                                                className="qty-left-minus"
                                                                onClick={() => toggleQuantity('minus')}
                                                                disabled={addItemInCart || addLoadingCart}
                                                            >
                                                                <Minus />
                                                            </button>
                                                            <input className="form-control input-number qty-input" type="text" readOnly value={quantity} />
                                                            <button 
                                                                type="button" 
                                                                className="qty-right-plus"
                                                                onClick={() => toggleQuantity('plus')}
                                                                disabled={addItemInCart || addLoadingCart}
                                                            >
                                                                <Plus />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <button 
                                                        type="button"
                                                        className={`btn btn-md notifi-cart bg-dark cart-button text-white w-100 ${addItemInCart && 'active'}`}
                                                        onClick={handleAddToCart}
                                                        disabled={addItemInCart || addLoadingCart}
                                                    >
                                                        {(addLoadingCart) ? 
                                                            <TailSpin
                                                                color="#2A3466"
                                                                height={16}
                                                                width={16}
                                                                visible={addLoadingCart}
                                                            />
                                                        : 
                                                            addItemInCart ? <><Check /> Ajouté</> : <><ShoppingCart /> Ajouter au panier</>
                                                        }        
                                                    </button>
                                                </div>
                                            </>
                                        :
                                            <div className='h6 text-danger mt-4'><strong>En rupture de stock</strong></div>
                                        }

                                        <div className="buy-box">
                                            {(addLoadingWishlist || removeLoading) ? 
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
                                                    <Heart /> <span>Add To Wishlist</span>
                                                </button>
                                            }
                                        </div>

                                        {(data?.product_properties && data?.product_properties.length) ? 
                                            <div className="pickup-box">
                                                {/* 
                                                    <div className="product-title">
                                                        <h4>Store Information</h4>
                                                    </div>

                                                    <div className="pickup-detail">
                                                        <h4 className="text-content">Lollipop cake chocolate chocolate cake dessert jujubes. Shortbread sugar plum dessert powder cookie sweet brownie.</h4>
                                                    </div>
                                                */}
                                                <div className="product-info">
                                                    <ul className="product-info-list product-info-list-2">
                                                        {data?.product_properties.map((item, key) =>
                                                            <li key={`product_${data?.id}_properties_${item?.id}`}><strong>{item?.property?.label}:</strong> {item?.value} {item?.measure?.label}</li>
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                            : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-3 col-xl-4 col-lg-5 d-none d-lg-block wow fadeInUp">
                            <div className="right-sidebar-box">
                                <div className="vendor-box">
                                    <img src={require('./../assets/images/paiement-securise.jpeg')} className="blur-up lazyload" alt="" />
                                </div>

                                <div className="pt-25">
                                    <div className="hot-line-number">
                                        <p className="vendor-detail">- Si vous avez des questions, vous pouvez appeler ce numéro de téléphone {settings?.store_fix ?? ''}</p>
                                        <p className="vendor-detail m-0">- Si vous commandez maintenant, vous recevrez votre commande le {dateDelivery}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-b-space">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <Tabs data={data} />
                        </div>
                    </div>
                </div>
            </section>

            {(data?.active_related && data?.active_related.length) ? 
                <section className="product-list-section section-b-space">
                    <div className="container-fluid-lg">
                        <div className="title">
                            <h2>Produits similaires</h2>
                            <span className="title-leaf"></span>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <SlideProducts products={data?.active_related} />
                            </div>
                        </div>
                    </div>
                </section>
                :
                null
            }

            {(data?.active_accessories && data?.active_accessories.length) ? 
                <section className="product-list-section section-b-space">
                    <div className="container-fluid-lg">
                        <div className="title">
                            <h2>Produits accessoires</h2>
                            <span className="title-leaf"></span>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <SlideProducts products={data?.active_accessories} />
                            </div>
                        </div>
                    </div>
                </section>
                :
                null
            } 
        </Layout>
    );
}