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
import { Heart, ShoppingCart } from "react-feather";
import { CartAndWishlistProvider } from "../contexts/CartAndWishlistContext";
import { AuthProvider } from "../contexts/AuthContext";

export default function Product() {
    const { product } = useParams();
    const { data, isLoading } = useQuery(
        ['getSingleProduct', product],
        () => getSingleProduct(product),
        { retry: true, refetchOnWindowFocus: false }
    );
    const { isLoggedIn } = useContext(AuthProvider)
    const { wishListDataKeys, addToWishListMutation, storeGuestWishlistItem, removeFromWishListMutation, removeGuestWishlistItem } = useContext(CartAndWishlistProvider)
    const [addItemInWishlist, setAddItemInWishlist] = useState(false)
    const [addLoading, setAddLoading] = useState(false)
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
        if(data && wishListDataKeys.includes(data?.id)){
            setAddItemInWishlist(true)
        }else{
            setAddItemInWishlist(false)
        }
    },[data, wishListDataKeys])

    const handleAddToWishList = async () => {
        setAddLoading(true);
        try {
            if(isLoggedIn) await addToWishListMutation(data?.id);
            else await storeGuestWishlistItem(data?.id);
            setAddLoading(false);
            // setAddItemInWishlist(true);
        } catch (error) {
            // console.log('addToWishListMutation error => ', error)
            // if (error.response.data.message === 'Item founded on the Wishlist') {
            //     setAddItemInWishlist(true);
            // }
            setAddLoading(false);
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
                                        <h6 className="offer-top">30% Off</h6>
                                        <h2 className="name">{data?.title}</h2>
                                        <div className="price-rating">
                                            <h3 className="theme-color price">
                                                $49.50 
                                                <del className="text-content">$58.46</del>
                                                <span className="offer theme-color">(8% off)</span>
                                            </h3>
                                            <div className="product-rating custom-rate">
                                                <ul className="rating">
                                                    <li>
                                                        <i data-feather="star" className="fill"></i>
                                                    </li>
                                                    <li>
                                                        <i data-feather="star" className="fill"></i>
                                                    </li>
                                                    <li>
                                                        <i data-feather="star" className="fill"></i>
                                                    </li>
                                                    <li>
                                                        <i data-feather="star" className="fill"></i>
                                                    </li>
                                                    <li>
                                                        <i data-feather="star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="procuct-contain">
                                            <p>Lollipop cake chocolate chocolate cake dessert jujubes. Shortbread sugar plum dessert powder cookie sweet brownie. Cake cookie apple pie dessert sugar plum muffin cheesecake.
                                            </p>
                                        </div>
                                        
                                        <div className="product-packege">
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
                                        </div>

                                        <div className="time deal-timer product-deal-timer mx-md-0 mx-auto" id="clockdiv-1"
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
                                        </div>

                                        <div className="note-box product-packege">
                                            <div className="cart_qty qty-box product-qty">
                                                <div className="input-group">
                                                    <button type="button" className="qty-right-plus" data-type="plus" data-field="">
                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text" name="quantity" value="0" />
                                                    <button type="button" className="qty-left-minus" data-type="minus" data-field="">
                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <button className="btn btn-md bg-dark cart-button text-white w-100">
                                                <ShoppingCart />
                                                Add To Cart
                                            </button>
                                        </div>

                                        <div className="buy-box">
                                            {(addLoading || removeLoading) ? 
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
                                                    <Heart /> <span>Add To Wishlist</span>
                                                </button>
                                            }
                                        </div>

                                        <div className="pickup-box">
                                            <div className="product-title">
                                                <h4>Store Information</h4>
                                            </div>

                                            <div className="pickup-detail">
                                                <h4 className="text-content">Lollipop cake chocolate chocolate cake dessert jujubes. Shortbread sugar plum dessert powder cookie sweet brownie.</h4>
                                            </div>

                                            <div className="product-info">
                                                <ul className="product-info-list product-info-list-2">
                                                    {data?.features && (<li>Caractéristique : {data?.features}</li>)}
                                                    {data?.values && (<li>Valeur : {data?.values}</li>)}
                                                    {data?.units_measurement && (<li>Unité de mesure : {data?.units_measurement}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-3 col-xl-4 col-lg-5 d-none d-lg-block wow fadeInUp">
                            <div className="right-sidebar-box">
                                <div className="vendor-box">
                                    <div className="verndor-contain">
                                        <div className="vendor-image">
                                            <img src={require('./../assets/images/logol.webp')} className="blur-up lazyload" alt="" />
                                        </div>

                                        <div className="vendor-name">
                                            <h5 className="fw-500">Noodles Co.</h5>
                                        </div>
                                    </div>

                                    <p className="vendor-detail">Noodles & Company is an American fast-casual
                                        restaurant that offers international and American noodle dishes and pasta.</p>

                                    <div className="vendor-list">
                                        <ul>
                                            <li>
                                                <div className="address-contact">
                                                    <i data-feather="map-pin"></i>
                                                    <h5>Address: <span className="text-content">1288 Franklin Avenue</span></h5>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="address-contact">
                                                    <i data-feather="headphones"></i>
                                                    <h5>Contact Seller: <span className="text-content">(+1)-123-456-789</span></h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="pt-25">
                                    <div className="hot-line-number">
                                        <h5>Hotline Order:</h5>
                                        <h6>Mon - Fri: 07:00 am - 08:30PM</h6>
                                        <h3>(+1) 123 456 789</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {(data?.accessories && data?.accessories.length) ? 
                <section className="product-list-section section-b-space">
                    <div className="container-fluid-lg">
                        <div className="title">
                            <h2>Produits accessoires</h2>
                            <span className="title-leaf"></span>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <SlideProducts products={data?.accessories} />
                            </div>
                        </div>
                    </div>
                </section>
                :
                null
            }

            <section className="section-b-space">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-section-box m-0">
                                <ul className="nav nav-tabs custom-nav" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="description-tab" data-bs-toggle="tab"
                                            data-bs-target="#description" type="button" role="tab" aria-controls="description"
                                            aria-selected="true">Description</button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info"
                                            type="button" role="tab" aria-controls="info" aria-selected="false">Additional
                                            info</button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="care-tab" data-bs-toggle="tab" data-bs-target="#care"
                                            type="button" role="tab" aria-controls="care" aria-selected="false">Care
                                            Instuctions</button>
                                    </li>
                                </ul>

                                <div className="tab-content custom-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="description" role="tabpanel"
                                        aria-labelledby="description-tab">
                                        <div className="product-description">
                                            <div className="nav-desh">
                                                <p>Jelly beans carrot cake icing biscuit oat cake gummi bears tart.
                                                    Lemon drops carrot cake pudding sweet gummi bears. Chocolate cake
                                                    tart cupcake donut topping liquorice sugar plum chocolate bar. Jelly
                                                    beans tiramisu caramels jujubes biscuit liquorice chocolate. Pudding
                                                    toffee jujubes oat cake sweet roll. Lemon drops dessert croissant
                                                    danish cake cupcake. Sweet roll candy chocolate toffee jelly sweet
                                                    roll halvah brownie topping. Marshmallow powder candy sesame snaps
                                                    jelly beans candy canes marshmallow gingerbread pie.</p>
                                            </div>

                                            <div className="nav-desh">
                                                <div className="desh-title">
                                                    <h5>Organic:</h5>
                                                </div>
                                                <p>vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam
                                                    vestibulum morbi blandit cursus risus at ultrices mi tempus
                                                    imperdiet nulla malesuada pellentesque elit eget gravida cum sociis
                                                    natoque penatibus et magnis dis parturient montes nascetur ridiculus
                                                    mus mauris vitae ultricies leo integer malesuada nunc vel risus
                                                    commodo viverra maecenas accumsan lacus vel facilisis volutpat est
                                                    velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit
                                                    amet nisl suscipit adipiscing bibendum est ultricies integer quis
                                                    auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet
                                                    massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada
                                                    proin libero nunc consequat interdum varius sit amet mattis
                                                    vulputate enim nulla aliquet porttitor lacus luctus accumsan.</p>
                                            </div>

                                            <div id="PPP1" className="banner-contain nav-desh">
                                                <img src="../assets/images/furniture/banner/PPP1.jpg"
                                                    className="bg-img blur-up lazyload" alt="" />
                                                <div className="banner-details p-center banner-b-space w-100 text-center">
                                                    <div>
                                                        <h6 className="ls-expanded theme-color mb-sm-3 mb-1">SUMMER</h6>
                                                        <h2>VEGETABLE</h2>
                                                        <p className="mx-auto mt-1">Save up to 5% OFF</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="nav-desh">
                                                <div className="desh-title">
                                                    <h5>From The Manufacturer:</h5>
                                                </div>
                                                <p>Jelly beans shortbread chupa chups carrot cake jelly-o halvah apple pie
                                                    pudding gingerbread. Apple pie halvah cake tiramisu shortbread cotton candy
                                                    croissant chocolate cake. Tart cupcake caramels gummi bears macaroon
                                                    gingerbread fruitcake marzipan wafer. Marzipan dessert cupcake ice cream
                                                    tootsie roll. Brownie chocolate cake pudding cake powder candy ice cream ice
                                                    cream cake. Jujubes soufflé chupa chups cake candy halvah donut. Tart tart
                                                    icing lemon drops fruitcake apple pie.</p>

                                                <p>Dessert liquorice tart soufflé chocolate bar apple pie pastry danish soufflé.
                                                    Gummi bears halvah gingerbread jelly icing. Chocolate cake chocolate bar
                                                    pudding chupa chups bear claw pie dragée donut halvah. Gummi bears cookie
                                                    ice cream jelly-o jujubes sweet croissant. Marzipan cotton candy gummi bears
                                                    lemon drops lollipop lollipop chocolate. Ice cream cookie dragée cake sweet
                                                    roll sweet roll.Lemon drops cookie muffin carrot cake chocolate marzipan
                                                    gingerbread topping chocolate bar. Soufflé tiramisu pastry sweet dessert.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                        <div className="table-responsive">
                                            <table className="table info-table">
                                                <tbody>
                                                    <tr>
                                                        <td>Specialty</td>
                                                        <td>Vegetarian</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ingredient Type</td>
                                                        <td>Vegetarian</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brand</td>
                                                        <td>Lavian Exotique</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Form</td>
                                                        <td>Bar Brownie</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Package Information</td>
                                                        <td>Box</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Manufacturer</td>
                                                        <td>Prayagh Nutri Product Pvt Ltd</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Item part number</td>
                                                        <td>LE 014 - 20pcs Crème Bakes (Pack of 2)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Net Quantity</td>
                                                        <td>40.00 count</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="care" role="tabpanel" aria-labelledby="care-tab">
                                        <div className="information-box">
                                            <ul>
                                                <li>Store cream cakes in a refrigerator. Fondant cakes should be
                                                    stored in an air conditioned environment.</li>

                                                <li>Slice and serve the cake at room temperature and make sure
                                                    it is not exposed to heat.</li>

                                                <li>Use a serrated knife to cut a fondant cake.</li>

                                                <li>Sculptural elements and figurines may contain wire supports
                                                    or toothpicks or wooden skewers for support.</li>

                                                <li>Please check the placement of these items before serving to
                                                    small children.</li>

                                                <li>The cake should be consumed within 24 hours.</li>

                                                <li>Enjoy your cake!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {(data?.related && data?.related.length) ? 
                <section className="product-list-section section-b-space">
                    <div className="container-fluid-lg">
                        <div className="title">
                            <h2>Produits similaires</h2>
                            <span className="title-leaf"></span>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <SlideProducts products={data?.related} />
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