import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive'
import { getBanner } from '../queries/queries';
import { DataProvider } from '../contexts/DataContext';
import { Link } from 'react-router-dom';

export default function BannerVertical({ keyBanner }) {
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
                <>
                    <div className="home-contain h-100 home-furniture">
                        {(data?.script) ?
                            <div 
                                dangerouslySetInnerHTML={{
                                    __html: data?.script
                                }}
                            />
                        : 
                            <Link to={data?.link}>
                                <img
                                    src={currentImage()}
                                    className="bg-img lazyload"
                                    alt=""
                                />
                            </Link>
                        }
                    </div>
                </>
            :
                <   div />
            }
        </div>
    );
}
