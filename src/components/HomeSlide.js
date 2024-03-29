import React from 'react';
import { useQuery } from 'react-query';
import { getSlide } from '../queries/queries';
import Slider from 'react-slick';
import HomeSlideItem from './HomeSlideItem';

export default function HomeSlide({ type, extraClass = null }) {
    // const type = 'HS1'
    const { data, isLoading, isIdle } = useQuery(
        ['getHomeSlide', type],
        () => getSlide(type),
        { retry: true, refetchOnWindowFocus: false, keepPreviousData: true }
    );

    const slideSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:true,
        verticalSwiping: true
    };

    return (
        <div className={`${extraClass} dot-slider-left`}>
            {isLoading ?
                <div style={{ background: 'gray', height: 400, opacity: .3 }}></div>
            :
                <div className=''>
                    {(data && data?.active_items  && data?.active_items.length > 1) &&
                        <Slider {...slideSettings}>
                            {data?.active_items.map(item => 
                                <HomeSlideItem item={item} key={item?.id} />
                            )}
                        </Slider>
                    }
                    {(data && data?.active_items  && data?.active_items.length === 1) &&
                        <HomeSlideItem item={data?.active_items[0]} />
                    }
                </div>
            }
        </div>
    );
}
