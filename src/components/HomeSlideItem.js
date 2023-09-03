import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataProvider } from '../contexts/DataContext';

export default function HomeSlideItem({ item }) {
    const { isTablet, isMobile } = useContext(DataProvider)

    const currentImage = () => {
        var image = item?.full_image_desktop
        if(isTablet && item?.image_tablet) image = item?.full_image_tablet;
        if(isMobile && item?.image_mobile) image = item?.full_image_mobile;
        return image;
    }

    return (
        <div className="home-contain furniture-contain-2">
            <img
                src={currentImage()}
                className="bg-img lazyload"
                alt=""
            />
            <div className="home-detail p-top-left mend-auto w-100">
                <div>
                    <h6>{item?.description && <div dangerouslySetInnerHTML={{ __html: item?.description}} />}</h6>
                    <h1 className="text-uppercase poster-1 text-content furniture-heading">{item?.title}</h1>
                    {(item?.link) ? 
                        <Link
                            to={item?.link}
                            className="btn d-inline-block btn-furniture mt-xxl-4 mt-3 home-button mend-auto"
                        >
                            Shop Now <i className="fa-solid fa-right-long ms-2 icon"></i>
                        </Link>
                        : 
                        <div />
                    }
                </div>
            </div>
        </div>
    );
}
