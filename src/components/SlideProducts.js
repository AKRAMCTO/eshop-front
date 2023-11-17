import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Eye, Heart } from 'react-feather';

import { DataProvider } from '../contexts/DataContext';
import ProductBox from './Product/ProductBox';

export default function SlideProducts({ products }) {
    const { isDesktop, isTablet } = useContext(DataProvider)
    const [ addSlide, setAddSlide ] = useState(false)

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
                        <ProductBox product={item?.related} key={`related-${key}`} />
                    )}
                </Slider>
            :
                <div className='row'>
                    {products.map((item, key) => 
                        <div className="col-xxl-3 col-md-6 col-12 no-arrow" key={`related-${key}`}>
                            <ProductBox product={item?.related} key={`related-${key}`} />
                        </div>
                    )} 
                </div>        
            }
        </div>
    )
}