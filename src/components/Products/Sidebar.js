import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Slider from 'react-slick';
import AccordionItem from './AccordionItem';

export default function Sidebar({isLoading, listCategories, categories, listBrands, brands, handleCategoriesFilter, handleBrandsFilter, handleShowMenu, showMenu}) {
    
    return (
        <div className="col-custome-3">
            {(isLoading && isLoading?.status && isLoading?.type !== 'products') ?
                <div className="px-4 py-5 d-flex align-items-center justify-content-center">
                    <InfinitySpin
                        type="ThreeDots"
                        color="#2A3466"
                        height={220}
                        width={220}
                        visible={isLoading && isLoading?.status && isLoading?.type !== 'products'}
                    />
                </div>
            :
                <>
                    <div className={`bg-overlay ${(showMenu) ? 'show' : ''}`}></div>
                    <div className={`left-box wow fadeInUp ${(showMenu) ? 'show' : ''}`}>
                        <div className="shop-left-sidebar">
                            <div className="back-button" onClick={() => handleShowMenu()}>
                                <h3><i className="fa-solid fa-arrow-left"></i> Back</h3>
                            </div>
                            <div className="accordion custome-accordion">
                                <AccordionItem
                                    title={`Catégories`}
                                    defaultStatus={true}
                                >
                                    <ul className="category-list custom-padding custom-height">
                                        {listCategories && listCategories.length ?
                                            listCategories.map((item) => 
                                                <li key={item?.slug}>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input readOnly className="checkbox_animated" name='categories' type="checkbox" checked={categories.includes(item?.slug)} id={item?.slug} />
                                                        <label className="form-check-label" htmlFor={item?.slug} onClick={() => handleCategoriesFilter(item?.slug)}>
                                                            <span className="name">{item?.name}</span>
                                                            <span className="number">{item?.active_products_count}</span>
                                                        </label>
                                                    </div>
                                                </li>
                                            )
                                            :
                                            <div />
                                        }
                                    </ul>
                                </AccordionItem>
                                <AccordionItem
                                    title={`Les marques`}
                                    defaultStatus={false}
                                >
                                    <ul className="category-list custom-padding custom-height">
                                        {listBrands && listBrands.length ?
                                            listBrands.map((item) => 
                                                <li key={item?.slug}>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input readOnly className="checkbox_animated" checked={brands.includes(item?.slug)} type="checkbox" id={item?.slug} />
                                                        <label className="form-check-label" htmlFor={item?.slug} onClick={() => handleBrandsFilter(item?.slug)}>
                                                            <span className="name">{item?.name}</span>
                                                            <span className="number">{item?.active_products_count}</span>
                                                        </label>
                                                    </div>
                                                </li>
                                            )
                                            :
                                            <div />
                                        }
                                    </ul>
                                </AccordionItem>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}