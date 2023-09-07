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
            {(item?.link) ? 
                <Link to={item?.link}>
                    <img
                        src={currentImage()}
                        className="bg-img lazyload"
                        alt=""
                    />
                </Link>
                :
                <img
                    src={currentImage()}
                    className="bg-img lazyload"
                    alt=""
                />
            }
        </div>
    );
}
