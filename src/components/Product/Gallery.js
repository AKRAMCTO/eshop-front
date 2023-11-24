import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';


export default function Gallery({ thumbnail, images, name }) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(thumbnail && images.length){
            images.unshift({full_image: thumbnail})
        }
        setLoading(false)
    }, [images])
    
    // console.log('images => ', images)
    const settings = {
        customPaging: function(i) {
            return (
                <a><img src={images[i]?.full_image} alt={name} /></a>
            );
        },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    if(loading){
        return  null;
    }
    return (
        <div className="row g-sm-4 g-2">
            <div className="col-12">
                <div className="product-main no-arrow">
                    {(images && images.length) ?
                        <Slider {...settings}>
                            {images.map((item, key) =>
                                <div key={`gallery-${key}`}>
                                    <div className="slider-image">
                                        <img src={item?.full_image} alt={name} />
                                    </div>
                                </div>
                            )}
                        </Slider>
                    :
                        ((thumbnail) ?
                            <img src={thumbnail} alt={name} />
                        :
                            <div />
                        )
                    }
                </div>
            </div>
        </div>
    )
}