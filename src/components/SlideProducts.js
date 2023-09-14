import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Eye, Heart } from 'react-feather';

import { DataProvider } from '../contexts/DataContext';

export default function SlideProducts({ products }) {
    const { isDesktop, isTablet } = useContext(DataProvider)
    const [ addSlide, setAddSlide ] = useState(false)

    console.log('products => ', products)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 478,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    useEffect(() => {
        var minimum = isDesktop ? 5 : ((isTablet) ? 4 : 2)
        if((products.length / minimum) > 1){
            setAddSlide(true)
        }
    }, [])

    return (
        <div className="slider-6_1 product-wrapper">
            {(addSlide) ? 
                <Slider {...settings}>
                    {products.map((item, key) => 
                        <div key={`related-${key}`}>
                                <div className="product-box-3 wow fadeInUp">
                                    <div className="product-header">
                                        <div className="product-image">
                                            <Link to={`/product/${item?.related?.slug}`}>
                                                <img src={item?.related?.full_image} className="img-fluid lazyload" alt={item?.related?.title} />
                                            </Link>
                                            <ul className="product-option">
                                                <li><a><Eye /></a></li>
                                                <li><Link to={`/`} className="notifi-wishlist"><Heart /></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="product-footer">
                                        <div className="product-detail">
                                            {(item?.related?.category) && <span className="span-name">{ item?.related?.category?.name }</span>}
                                            <Link to={`/product/${item?.related?.slug}`}><h6 className="name">{item?.related?.title}</h6></Link>

                                            <h6 className="unit">{`${item?.related?.units_measurement} ${item?.related?.values}`}</h6>
                                            <h5 className="price"><span className="theme-color">$10.25</span> <del>$12.57</del>
                                            </h5>
                                            <div className="add-to-cart-box bg-white">
                                                <button className="btn btn-add-cart addcart-button">Add
                                                    <span className="add-icon bg-light-gray">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </span>
                                                </button>
                                                <div className="cart_qty qty-box">
                                                    <div className="input-group bg-white">
                                                        <button type="button" className="qty-left-minus bg-gray"
                                                            data-type="minus" data-field="">
                                                            <i className="fa fa-minus" aria-hidden="true"></i>
                                                        </button>
                                                        <input className="form-control input-number qty-input" type="text"
                                                            name="quantity" value="0" />
                                                        <button type="button" className="qty-right-plus bg-gray"
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
                    )}
                </Slider>
            :
                <>
                {products.map((item, key) => 
                    <div className="row row-cols-xxl-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow" key={`related-${key}`}>
                        <div className="product-box-3 wow fadeInUp">
                            <div className="product-header">
                                <div className="product-image">
                                    <a href="product-left.htm">
                                        <img src="../assets/images/cake/product/11.png"
                                            className="img-fluid blur-up lazyload" alt="" />
                                    </a>

                                    <ul className="product-option">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="javascript:void(0)" data-bs-toggle="modal"
                                                data-bs-target="#view">
                                                <i data-feather="eye"></i>
                                            </a>
                                        </li>

                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                            <a href="compare.html">
                                                <i data-feather="refresh-cw"></i>
                                            </a>
                                        </li>

                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                            <a href="wishlist.html" className="notifi-wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="product-footer">
                                <div className="product-detail">
                                    <span className="span-name">Cake</span>
                                    <a href="product-bundle.html">
                                        <h5 className="name">Chocolate Chip Cookies 250 g</h5>
                                    </a>
                                    <div className="product-rating mt-2">
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
                                                <i data-feather="star" className="fill"></i>
                                            </li>
                                        </ul>
                                        <span>(5.0)</span>
                                    </div>
                                    <h6 className="unit">500 G</h6>
                                    <h5 className="price"><span className="theme-color">$10.25</span> <del>$12.57</del>
                                    </h5>
                                    <div className="add-to-cart-box bg-white">
                                        <button className="btn btn-add-cart addcart-button">Add
                                            <span className="add-icon bg-light-gray">
                                                <i className="fa-solid fa-plus"></i>
                                            </span>
                                        </button>
                                        <div className="cart_qty qty-box">
                                            <div className="input-group bg-white">
                                                <button type="button" className="qty-left-minus bg-gray"
                                                    data-type="minus" data-field="">
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                                <input className="form-control input-number qty-input" type="text"
                                                    name="quantity" value="0" />
                                                <button type="button" className="qty-right-plus bg-gray"
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
                )}
                </>          
            }
        </div>
    )
}