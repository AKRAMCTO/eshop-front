import React from "react";

export default function MyOrders() {

    return (
        <div className="dashboard-order">
            <div className="title">
                <h2>My Orders History</h2>
                <span className="title-leaf title-leaf-gray">
                    <img src={require("./../../assets/svg/leaf.svg")} alt="" className="icon-width bg-gray" />
                </span>
            </div>

            <div className="order-contain">
                <div className="order-box dashboard-bg-box">
                    <div className="order-container">
                        <div className="order-icon">
                            <i data-feather="box"></i>
                        </div>

                        <div className="order-detail">
                            <h4>Delivere <span>Panding</span></h4>
                            <h6 className="text-content">Gouda parmesan caerphilly mozzarella
                                cottage cheese cauliflower cheese taleggio gouda.</h6>
                        </div>
                    </div>

                    <div className="product-order-detail">
                        <a href="product-left-thumbnail.html" className="order-image">
                            <img src="../assets/images/vegetable/product/1.png"
                                className="blur-up lazyload" alt="" />
                        </a>

                        <div className="order-wrap">
                            <a href="product-left-thumbnail.html">
                                <h3>Fantasy Crunchy Choco Chip Cookies</h3>
                            </a>
                            <p className="text-content">Cheddar dolcelatte gouda. Macaroni cheese
                                cheese strings feta halloumi cottage cheese jarlsberg cheese
                                triangles say cheese.</p>
                            <ul className="product-size">
                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Price : </h6>
                                        <h5>$20.68</h5>
                                    </div>
                                </li>

                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Rate : </h6>
                                        <div className="product-rating ms-2">
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
                                </li>

                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Sold By : </h6>
                                        <h5>Fresho</h5>
                                    </div>
                                </li>

                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Quantity : </h6>
                                        <h5>250 G</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="order-box dashboard-bg-box">
                    <div className="order-container">
                        <div className="order-icon">
                            <i data-feather="box"></i>
                        </div>

                        <div className="order-detail">
                            <h4>Delivered <span className="success-bg">Success</span></h4>
                            <h6 className="text-content">Cheese on toast cheesy grin cheesy grin
                                cottage cheese caerphilly everyone loves cottage cheese the big
                                cheese.</h6>
                        </div>
                    </div>

                    <div className="product-order-detail">
                        <a href="product-left-thumbnail.html" className="order-image">
                            <img src="../assets/images/vegetable/product/2.png" alt=""
                                className="blur-up lazyload" />
                        </a>

                        <div className="order-wrap">
                            <a href="product-left-thumbnail.html">
                                <h3>Cold Brew Coffee Instant Coffee 50 g</h3>
                            </a>
                            <p className="text-content">Pecorino paneer port-salut when the cheese
                                comes out everybody's happy red leicester mascarpone blue
                                castello cauliflower cheese.</p>
                            <ul className="product-size">
                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Price : </h6>
                                        <h5>$20.68</h5>
                                    </div>
                                </li>

                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Rate : </h6>
                                        <div className="product-rating ms-2">
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
                                </li>

                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Sold By : </h6>
                                        <h5>Fresho</h5>
                                    </div>
                                </li>

                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Quantity : </h6>
                                        <h5>250 G</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="order-box dashboard-bg-box">
                    <div className="order-container">
                        <div className="order-icon">
                            <i data-feather="box"></i>
                        </div>

                        <div className="order-detail">
                            <h4>Delivere <span>Panding</span></h4>
                            <h6 className="text-content">Cheesy grin boursin cheesy grin cheesecake
                                blue castello cream cheese lancashire melted cheese.</h6>
                        </div>
                    </div>

                    <div className="product-order-detail">
                        <a href="product-left-thumbnail.html" className="order-image">
                            <img src="../assets/images/vegetable/product/3.png" alt=""
                                className="blur-up lazyload" />
                        </a>

                        <div className="order-wrap">
                            <a href="product-left-thumbnail.html">
                                <h3>Peanut Butter Bite Premium Butter Cookies 600 g</h3>
                            </a>
                            <p className="text-content">Cow bavarian bergkase mascarpone paneer
                                squirty cheese fromage frais cheese slices when the cheese comes
                                out everybody's happy.</p>
                            <ul className="product-size">
                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Price : </h6>
                                        <h5>$20.68</h5>
                                    </div>
                                </li>

                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Rate : </h6>
                                        <div className="product-rating ms-2">
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
                                </li>

                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Sold By : </h6>
                                        <h5>Fresho</h5>
                                    </div>
                                </li>

                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Quantity : </h6>
                                        <h5>250 G</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="order-box dashboard-bg-box">
                    <div className="order-container">
                        <div className="order-icon">
                            <i data-feather="box"></i>
                        </div>

                        <div className="order-detail">
                            <h4>Delivered <span className="success-bg">Success</span></h4>
                            <h6 className="text-content">Caerphilly port-salut parmesan pecorino
                                croque monsieur dolcelatte melted cheese cheese and wine.</h6>
                        </div>
                    </div>

                    <div className="product-order-detail">
                        <a href="product-left-thumbnail.html" className="order-image">
                            <img src="../assets/images/vegetable/product/4.png"
                                className="blur-up lazyload" alt="" />
                        </a>

                        <div className="order-wrap">
                            <a href="product-left-thumbnail.html">
                                <h3>SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h3>
                            </a>
                            <p className="text-content">The big cheese cream cheese pepper jack
                                cheese slices danish fontina everyone loves cheese on toast
                                bavarian bergkase.</p>
                            <ul className="product-size">
                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Price : </h6>
                                        <h5>$20.68</h5>
                                    </div>
                                </li>

                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Rate : </h6>
                                        <div className="product-rating ms-2">
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
                                </li>

                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Sold By : </h6>
                                        <h5>Fresho</h5>
                                    </div>
                                </li>

                                <li>
                                    <div className="size-box">
                                        <h6 className="text-content">Quantity : </h6>
                                        <h5>250 G</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}