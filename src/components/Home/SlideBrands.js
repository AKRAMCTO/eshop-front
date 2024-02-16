import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { getFeaturedBrands } from '../../queries/queries';
import { DataProvider } from '../../contexts/DataContext';

const Icon = "https://via.placeholder.com/50x50"

export default function SlideBrands() {
    const { isDesktop, isTablet } = useContext(DataProvider)
    const [ addSlide, setAddSlide ] = useState(false)
    const { data, isLoading } = useQuery(
        'getFeaturedBrands', getFeaturedBrands,
        { retry: true, refetchOnWindowFocus: false, keepPreviousData: true }
    );

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 6,
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
                    slidesToShow: 4,
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
            var minimum = isDesktop ? 6 : ((isTablet) ? 4 : 2)
            if((data.length / minimum) > 1){
                setAddSlide(true)
            }
        }
    }, [isLoading])

    if(isLoading || data?.length < 1) return <div />

    return (
        <section className="product-list-section section-b-space">
            <div className="container-fluid-lg">
                <div className="title">
                    <h2>Nos partenaires</h2>
                    <span className="title-leaf"></span>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="slider-6_1 arrow-slider-3">
                            {(addSlide) ? 
                                <Slider {...settings}>
                                    {data.map((item, key) => 
                                        <div key={`brand-${key}`}>
                                            <div className="product-box-3 wow fadeInUp">
                                                <div className="product-header">
                                                    <div className="product-image">
                                                        <Link 
                                                            to={`/products?brands=${item?.slug}`}
                                                        >
                                                            <img src={item?.full_logo ?? Icon} className="img-fluid lazyload" alt={item?.name} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            :
                                <div className='row'>
                                    {(data.map((item, key) => 
                                        <div className='col-6 col-md-2' key={`brand-${key}`}>
                                            <div className="product-box-3 wow fadeInUp">
                                                <div className="product-header">
                                                    <div className="product-image">
                                                        <Link 
                                                            to={`/products?brands=${item?.slug}`} 
                                                        >
                                                            <img src={item?.full_logo ?? Icon} className="img-fluid lazyload" alt={item?.name} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}