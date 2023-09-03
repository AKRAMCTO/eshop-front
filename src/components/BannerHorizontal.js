import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { getBanner } from '../queries/queries';
import { DataProvider } from '../contexts/DataContext';
import { Link } from 'react-router-dom';

export default function BannerHorizontal({ keyBanner }) {
    const { isTablet, isMobile } = useContext(DataProvider)

    const { data, isLoading, isIdle } = useQuery(
        [`Banner-${keyBanner}`, keyBanner],
        () => getBanner(keyBanner),
        { retry: true, refetchOnWindowFocus: false, keepPreviousData: true }
    );

    const currentImage = () => {
        var image = data?.full_image_desktop
        if(isTablet && data?.image_tablet) image = data?.full_image_tablet;
        if(isMobile && data?.image_mobile) image = data?.full_image_mobile;
        return image;
    }

    return (
        <div className="home-contain hover-effect">
            {isLoading ?
                <div style={{ background: 'gray', with: '100%', height: '100%', opacity: .3 }}></div>
                
            :
            data ? 
                <div className="banner-contain-3 section-b-space section-t-space hover-effect overflow-visible bg-size" style={{ backgroundImage: `url(${currentImage()})` }}>
                    <Link to={data?.link}>
                        <img
                            src={currentImage()}
                            className="bg-img"
                            alt=""
                        />
                    </Link>
                </div>
            :
                <div />
            }
        </div>
    );
}
