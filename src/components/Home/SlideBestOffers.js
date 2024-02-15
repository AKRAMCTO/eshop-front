import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { getBestOffers, getBestSellers } from '../../queries/queries';
import { DataProvider } from '../../contexts/DataContext';
import { Link } from 'react-router-dom';
import { Eye, Heart, RefreshCw } from 'react-feather';
import ProductBox from '../Product/ProductBox';

export default function SlideBestOffers() {
    const { isDesktop, isTablet } = useContext(DataProvider)
    const [ addSlide, setAddSlide ] = useState(false)
    const { data, isLoading } = useQuery(
        'getBestOffers', getBestOffers,
        { retry: true, refetchOnWindowFocus: false, keepPreviousData: true }
    );

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
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
            var minimum = isDesktop ? 5 : ((isTablet) ? 4 : 2)
            if((data.length / minimum) > 1){
                setAddSlide(true)
            }
        }
    }, [isLoading])

    if(isLoading || data?.length < 1) return <div />

    return (
        <div>
            <div className="title d-block">
                <h2>Nos meilleures offres</h2>
                <span className="title-leaf"></span>
            </div>
            <div className="arrow-slider-3">
                {(addSlide) ? 
                    <Slider {...settings}>
                        {data.map((item, key) => 
                            <div key={`best-seller-${key}`}>
                                <ProductBox product={item} />
                            </div>
                        )}
                    </Slider>
                :
                    <div className='row'>
                        {(data.map((item, key) => 
                            <div className="col-xxl-3 col-md-6 col-12 no-arrow" key={`best-seller-${key}`}>
                                <ProductBox product={item} />
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}