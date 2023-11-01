import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { getBestSellers } from '../../queries/queries';
import { DataProvider } from '../../contexts/DataContext';
import { Link } from 'react-router-dom';

export default function SlideBestSellers() {
    const { isDesktop, isTablet } = useContext(DataProvider)
    const [ addSlide, setAddSlide ] = useState(false)
    const { data, isLoading } = useQuery(
        'getBestSellers', getBestSellers,
        { retry: true, refetchOnWindowFocus: false, keepPreviousData: true }
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 478,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    useEffect(() => {
        if(!isLoading){
            var minimum = isDesktop ? 4 : ((isTablet) ? 2 : 1)
            if(((data.length) / minimum) > 1){
                setAddSlide(true)
            }
        }
    }, [isLoading])

    if(isLoading || data?.length < 1) return <div />

    return (
        <div>
            <div className="title d-block">
                <h2>Notre best-seller</h2>
                <span className="title-leaf"></span>
                <p>Un assistant virtuel récupère les produits de votre liste</p>
            </div>
            <div className="banner-slider product-wrapper wow fadeInUp">
                {(addSlide) ? 
                    <Slider {...settings}>
                        {data.map((items, key) => 
                            <div key={`best-seller-${key}`}>
                                <ul className="product-list">
                                    {items.map((item, key1) =>
                                        <li key={`best-seller-items-${key1}`}>
                                            <div className="offer-product">
                                                <Link to={`/product/${item?.slug}`} className="offer-image">
                                                    <img src={item?.full_image} className="lazyload" alt={item?.title} />
                                                </Link>

                                                <div className="offer-detail">
                                                    <div>
                                                        <Link to={`/product/${item?.slug}`} className="text-title" >
                                                            <h6 className="name">{item?.title}</h6>
                                                        </Link>
                                                        <span>{`${item?.units_measurement ?? ''} ${item?.values ?? ''}`}</span>
                                                        <h6 className="price theme-color">{item?.price_ttc} Dhs</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </Slider>
                :
                    <div className="row">
                        {(data.map((items, key) =>
                            <div className="col-xxl-3 col-md-6 col-12" key={`best-seller-${key}`}>
                                <ul className="product-list">
                                    {items.map((item, key1) =>
                                        <li key={`best-seller-items-${key1}`}>
                                            <div className="offer-product">
                                                <Link to={`/product/${item?.slug}`} className="offer-image">
                                                    <img src={item?.full_image} className="lazyload" alt={item?.title} />
                                                </Link>

                                                <div className="offer-detail">
                                                    <div>
                                                        <Link to={`/product/${item?.slug}`} className="text-title" >
                                                            <h6 className="name">{item?.title}</h6>
                                                        </Link>
                                                        <span>{`${item?.units_measurement ?? ''} ${item?.values ?? ''}`}</span>
                                                        <h6 className="price theme-color">{item?.price_ttc} Dhs</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}