import React from "react";

export default function MyWishlist() {

    return (
        <div className="dashboard-wishlist">
            <div className="title">
                <h2>My Wishlist History</h2>
                <span className="title-leaf title-leaf-gray">
                    <img src={require("./../../assets/svg/leaf.svg")} alt="" className="icon-width bg-gray" />
                </span>
            </div>
            <div className="row g-sm-4 g-3">
                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                    <div className="product-box-3 theme-bg-white h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/2.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Cheesy feet
                                    cheesy grin brie. Mascarpone cheese and wine hard cheese the
                                    big cheese everyone loves smelly cheese macaroni cheese
                                    croque monsieur.</p>
                                <h6 className="unit mt-1">250 ml</h6>
                                <h5 className="price">
                                    <span className="theme-color">$08.02</span>
                                    <del>$15.15</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                    <button className="btn btn-add-cart addcart-button"
                                        tabindex="0">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                    <div className="product-box-3 theme-bg-white h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/3.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Peanut Butter Bite Premium Butter Cookies
                                        600 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Feta taleggio
                                    croque monsieur swiss manchego cheesecake dolcelatte
                                    jarlsberg. Hard cheese danish fontina boursin melted cheese
                                    fondue.</p>
                                <h6 className="unit mt-1">350 G</h6>
                                <h5 className="price">
                                    <span className="theme-color">$04.33</span>
                                    <del>$10.36</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                    <button className="btn btn-add-cart addcart-button"
                                        tabindex="0">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                    <div className="product-box-3 theme-bg-white h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/4.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Snacks</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">SnackAmor Combo Pack of Jowar Stick and
                                        Jowar Chips</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Lancashire
                                    hard cheese parmesan. Danish fontina mozzarella cream cheese
                                    smelly cheese cheese and wine cheesecake dolcelatte stilton.
                                    Cream cheese parmesan who moved my cheese when the cheese
                                    comes out everybody's happy cream cheese red leicester
                                    ricotta edam.</p>
                                <h6 className="unit mt-1">570 G</h6>
                                <h5 className="price">
                                    <span className="theme-color">$12.52</span>
                                    <del>$13.62</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                    <button className="btn btn-add-cart addcart-button"
                                        tabindex="0">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                    <div className="product-box-3 theme-bg-white h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/5.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Snacks</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g
                                    </h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Cheddar
                                    cheddar pecorino hard cheese hard cheese cheese and biscuits
                                    bocconcini babybel. Cow goat paneer cream cheese fromage
                                    cottage cheese cauliflower cheese jarlsberg.</p>
                                <h6 className="unit mt-1">100 G</h6>
                                <h5 className="price">
                                    <span className="theme-color">$10.25</span>
                                    <del>$12.36</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                    <button className="btn btn-add-cart addcart-button"
                                        tabindex="0">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                    <div className="product-box-3 theme-bg-white h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/6.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Bavarian
                                    bergkase smelly cheese swiss cut the cheese lancashire who
                                    moved my cheese manchego melted cheese. Red leicester paneer
                                    cow when the cheese comes out everybody's happy croque
                                    monsieur goat melted cheese port-salut.</p>
                                <h6 className="unit mt-1">550 G</h6>
                                <h5 className="price">
                                    <span className="theme-color">$14.25</span>
                                    <del>$16.57</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                    <button className="btn btn-add-cart addcart-button"
                                        tabindex="0">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                    <div className="product-box-3 theme-bg-white h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/7.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Melted cheese
                                    babybel chalk and cheese. Port-salut port-salut cream cheese
                                    when the cheese comes out everybody's happy cream cheese
                                    hard cheese cream cheese red leicester.</p>
                                <h6 className="unit mt-1">1 Kg</h6>
                                <h5 className="price">
                                    <span className="theme-color">$12.68</span>
                                    <del>$14.69</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                    <button className="btn btn-add-cart addcart-button"
                                        tabindex="0">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                    <div className="product-box-3 theme-bg-white h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/cake/product/2.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                <span className="span-name">Vegetable</span>
                                <a href="product-left-thumbnail.html">
                                    <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                </a>
                                <p className="text-content mt-1 mb-2 product-content">Squirty cheese
                                    cottage cheese cheese strings. Red leicester paneer danish
                                    fontina queso lancashire when the cheese comes out
                                    everybody's happy cottage cheese paneer.</p>
                                <h6 className="unit mt-1">250 ml</h6>
                                <h5 className="price">
                                    <span className="theme-color">$08.02</span>
                                    <del>$15.15</del>
                                </h5>
                                <div className="add-to-cart-box mt-2">
                                    <button className="btn btn-add-cart addcart-button"
                                        tabindex="0">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}