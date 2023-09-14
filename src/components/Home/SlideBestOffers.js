import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { getBestOffers, getBestSellers } from '../../queries/queries';
import { DataProvider } from '../../contexts/DataContext';
import { Link } from 'react-router-dom';
import { Eye, Heart, RefreshCw } from 'react-feather';

export default function SlideBestOffers() {
    const { isDesktop, isTablet } = useContext(DataProvider)
    const [ addSlide, setAddSlide ] = useState(false)
    const { data, isLoading } = useQuery(
        'getBestOffers', getBestOffers,
        { retry: true, refetchOnWindowFocus: false, keepPreviousData: true }
    );

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
        if(!isLoading){
            var minimum = isDesktop ? 5 : ((isTablet) ? 4 : 2)
            if((data.length / minimum) > 1){
                setAddSlide(true)
            }
        }
    }, [isLoading])

    if(isLoading || data?.lenght < 1) return <div />

    return (
        <div>
            <div className="title d-block">
                <h2>Notre best-seller</h2>
                <span className="title-leaf"></span>
                <p>Un assistant virtuel récupère les produits de votre liste</p>
            </div>
            <div className="product-wrapper">
                {(addSlide) ? 
                    <Slider {...settings}>
                        {data.map((item, key) => 
                            <div key={`best-seller-${key}`}>
                                <div className="product-box product-white-bg wow fadeIn">
                                    <div className="product-image">
                                        <Link to={`/product/${item?.slug}`}>
                                            <img src={item?.full_image} className="img-fluid lazyload" alt={item?.title} />
                                        </Link>
                                        <ul className="product-option">
                                            <li><a><Eye /></a></li>
                                            <li><Link to={`/`} className="notifi-wishlist"><Heart /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="product-detail position-relative">
                                        <Link to={`/product/${item?.slug}`}><h6 className="name">{item?.title}</h6></Link>
                                        <h6 className="sold weight text-content fw-normal">1 KG</h6>
                                        <h6 className="price theme-color">$ 80.00</h6>
                                        <div className="add-to-cart-btn-2 addtocart_btn">
                                            <button className="btn addcart-button btn buy-button">
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                            <div className="cart_qty qty-box-2">
                                                <div className="input-group">
                                                    <button
                                                        type="button"
                                                        className="qty-left-minus"
                                                        data-type="minus"
                                                        data-field=""
                                                    >
                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                    </button>
                                                    <input
                                                        className="form-control input-number qty-input"
                                                        type="text"
                                                        name="quantity"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="qty-right-plus"
                                                        data-type="plus"
                                                        data-field=""
                                                    >
                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider>
                :
                    (data.map((item, key) => 
                        <div className="row row-cols-xxl-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-sm-4 g-3 no-arrow" key={`best-seller-${key}`}>
                            <div className="product-box product-white-bg wow fadeIn">
                                <div className="product-image">
                                    <Link to={`/product/${item?.slug}`}>
                                        <img src={item?.full_image} className="img-fluid lazyload" alt={item?.title} />
                                    </Link>
                                    <ul className="product-option">
                                        <li><a><Eye /></a></li>
                                        <li><Link to={`/`} className="notifi-wishlist"><Heart /></Link></li>
                                    </ul>
                                </div>
                                <div className="product-detail position-relative">
                                    <Link to={`/product/${item?.slug}`}><h6 className="name">{item?.title}</h6></Link>
                                    <h6 className="sold weight text-content fw-normal">1 KG</h6>
                                    <h6 className="price theme-color">$ 80.00</h6>
                                    <div className="add-to-cart-btn-2 addtocart_btn">
                                        <button className="btn addcart-button btn buy-button">
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                        <div className="cart_qty qty-box-2">
                                            <div className="input-group">
                                                <button
                                                    type="button"
                                                    className="qty-left-minus"
                                                    data-type="minus"
                                                    data-field=""
                                                >
                                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                                <input
                                                    className="form-control input-number qty-input"
                                                    type="text"
                                                    name="quantity"
                                                />
                                                <button
                                                    type="button"
                                                    className="qty-right-plus"
                                                    data-type="plus"
                                                    data-field=""
                                                >
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}