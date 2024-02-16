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
            var minimum = isDesktop ? 5 : ((isTablet) ? 4 : 2)
            if((data.length / minimum) > 1){
                setAddSlide(true)
            }
        }
    }, [isLoading])

    if(isLoading || data?.length < 1) return <div />

    return (
        <div className="section-b-space">
            <div className="title">
                <h2>Naviguer par catégories</h2>
                <span className="title-leaf"></span>
            </div>
            <div className="category-slider-2 slider-6_1 arrow-slider-3">
                {(addSlide) ? 
                    <Slider {...settings}>
                        {data.map((item, key) => 
                            <div key={`category-${key}`}>
                                <Link 
                                    to={`/products?categories=${item?.slug}`}
                                    className="category-box category-dark"
                                >
                                    <div>
                                        <img src={item?.full_image ?? Icon} className="lazyload" alt={item?.name} />
                                        <h5>{item?.name}</h5>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </Slider>
                    :
                    <div className="row">
                        {data.map((item, key) => 
                            <div className='col-md-3 col-6 mb-3' key={`category-${key}`}>
                                <Link to={`/products?categories=${item?.slug}`} className="category-box category-dark">
                                    <div>
                                        <img src={item?.full_image ?? Icon} className="lazyload" alt={item?.name} />
                                        <h5>{item?.name}</h5>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                }
            </div>
        </div>
    )
}