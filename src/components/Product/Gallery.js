import React from 'react';
import Slider from 'react-slick';

export default function Gallery({ thumbnail, images, name }) {

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

    if(images && images.length) {
        return (
            <div className="row g-sm-4 g-2">
                <div className="col-12">
                    <div className="product-main no-arrow">
                        <Slider {...settings}>
                            {(images && images.length) ?
                                images.map((item, key) =>
                                    <div key={`gallery-${key}`}>
                                        <div className="slider-image">
                                            <img src={item?.full_image} alt={name} />
                                        </div>
                                    </div>
                                )
                                :
                                <div />
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }else if(thumbnail) {
        return (
            <div className="row g-sm-4 g-2">
                <div className="col-12">
                    <div className="product-main no-arrow">
                        <img src={thumbnail} alt={name} />
                    </div>
                </div>
            </div>
        )
    }
    return null
}