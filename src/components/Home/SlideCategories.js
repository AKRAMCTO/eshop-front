import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { getFeaturedBrands, getFeaturedCategories } from '../../queries/queries';
import { DataProvider } from '../../contexts/DataContext';
import { Link } from 'react-router-dom';

const Icon = "https://via.placeholder.com/50x50"

export default function SlideCategories() {
    const { isDesktop, isTablet } = useContext(DataProvider)
    const [ addSlide, setAddSlide ] = useState(false)
    const { data, isLoading } = useQuery(
        'getFeaturedCategories', getFeaturedCategories,
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
                    slidesToShow: 4,
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
            var minimum = isDesktop ? 6 : ((isTablet) ? 4 : 2)
            if((data.length / minimum) > 1){
                setAddSlide(true)
            }
        }
    }, [isLoading])

    if(isLoading || data?.lenght < 1) return <div />

    return (
        <div>
            <div className="title">
                <h2>Naviguer par catégories</h2>
                <span className="title-leaf"></span>
                <p>Principales catégories de la semaine</p>
            </div>
            <div className="category-slider-2 product-wrapper no-arrow">
                {(addSlide) ? 
                    <Slider {...settings}>
                        {data.map((item, key) => 
                            <div key={`category-${key}`}>
                                <Link to={`/products?category=${item?.slug}`} className="category-box category-dark">
                                    <div>
                                        <img src={item?.full_image ?? Icon} className="lazyload" alt={item?.name} />
                                        <h5>{item?.name}</h5>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </Slider>
                    :
                    (data.map((item, key) => 
                        <div key={`category-${key}`}>
                            <Link to={`/`} className="category-box category-dark">
                                <div>
                                    <img src={item?.full_image ?? Icon} className="lazyload" alt={item?.name} />
                                    <h5>{item?.name}</h5>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}