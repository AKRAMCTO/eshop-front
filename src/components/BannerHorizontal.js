import React from 'react';
import { useQuery } from 'react-query';
import { getBanner } from '../queries/queries';

export default function BannerHorizontal({ keyBanner }) {
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
                <div className="banner-contain-3 section-b-space section-t-space hover-effect overflow-visible bg-size" style={{ backgroundImage: `url(${data?.full_image})` }}>
                    <img
                        src={data?.full_image}
                        className="bg-img"
                        alt=""
                    />
                    <div className="banner-detail p-center-left d-flex align-items-center py-0 banner-furniture mend-auto">
                        <div className="row w-100">
                            <div className="col-xl-7 offset-xxl-2 offset-xl-1 col-md-8 col-sm-9">
                                {data?.title && <h4 className="text-uppercase text-yellow text-kaushan furniture-title">{data?.title} <img src={require("./../assets/images/furniture/arrow.svg")} alt="" /></h4>}
                                {data?.description && <div className="banner-desc" dangerouslySetInnerHTML={{ __html: data?.description}} />}
                                {data?.link && <a href={data?.link} className="btn theme-bg-color mt-sm-4 mt-2 btn-md text-white fw-bold">Achetez maintenant <i className="fa-solid fa-arrow-right icon"></i></a>}
                            </div>
                        </div>
                    </div>
                </div>
            :
                <div />
            }
        </div>
        // <div className="col-xl-9 col-lg-8 ratio_50_1">
        //     {isLoading ?
        //         <div style={{ background: 'gray', height: 400, opacity: .3 }}></div>
        //     :
        //         <>
        //             {(data && data?.active_items  && data?.active_items.length > 1) &&
        //                 <Slider {...slideSettings}>
        //                     {data?.active_items.map(item => 
        //                         <HomeSlideItem item={item} key={item?.id} />
        //                     )}
        //                 </Slider>
        //             }
        //             {(data && data?.active_items  && data?.active_items.length === 1) &&
        //                 <HomeSlideItem item={data?.active_items[0]} />
        //             }
        //         </>
        //     }
        // </div>
    );
}
