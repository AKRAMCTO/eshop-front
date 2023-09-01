import React from 'react';
import { useQuery } from 'react-query';
import { getBanner } from '../queries/queries';

export default function BannerVertical({ keyBanner }) {
    const { data, isLoading, isIdle } = useQuery(
        [`Banner-${keyBanner}`, keyBanner],
        () => getBanner(keyBanner),
        { retry: true, refetchOnWindowFocus: false, keepPreviousData: true }
    );

    console.log(`Banner ${keyBanner}`, data)

    return (
        <div className="home-contain hover-effect">
            {isLoading ?
                <div style={{ background: 'gray', with: '100%', height: '100%', opacity: .3 }}></div>
                
            :
            data ? 
                <>
                    <div className="home-contain h-100 home-furniture">
                        <img
                            src={data?.full_image}
                            className="bg-img lazyload"
                            alt=""
                        />
                        <div className="home-detail p-top-left home-p-sm feature-detail mend-auto">
                            <div>
                                {data?.title && <h2 className="mt-0 theme-color text-kaushan fw-normal">{data?.title}</h2>}
                                {data?.description && <div className="furniture-content banner-desc" dangerouslySetInnerHTML={{ __html: data?.description}} />}
                                {data?.link && <a href="{data?.link}" className="shop-button btn btn-furniture mt-0 d-inline-block btn-md text-content">Achetez maintenant <i className="fa-solid fa-right-long ms-2"></i></a>}
                            </div>
                        </div>
                    </div>
                </>
            :
                <   div />
            }
        </div>
    );
}
