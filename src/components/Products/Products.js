import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Slider from 'react-slick';

export default function Products({isLoading, listCategories, categories, listBrands, brands}) {
    
    return (
        <div className="col-custome-3">
            {(isLoading) ?
                <div className="px-4 py-5 d-flex align-items-center justify-content-center">
                    <InfinitySpin
                        type="ThreeDots"
                        color="#2A3466"
                        height={220}
                        width={220}
                        visible={isLoading}
                    />
                </div>
            :
                <div className={`left-box wow fadeInUp show`}>
                    <div className="shop-left-sidebar">
                        <div className="accordion custome-accordion" id="accordionExample">

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                        <span>Categories</span>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne">
                                    <div className="accordion-body">
                                        <div className="form-floating theme-form-floating-2 search-box">
                                            <input type="search" className="form-control" id="search"
                                                placeholder="Search .." />
                                            <label htmlFor="search">Search</label>
                                        </div>

                                        <ul className="category-list custom-padding custom-height">
                                            {listCategories && listCategories.length ?
                                                listCategories.map((item) => 
                                                    <li key={item?.slug}>
                                                        <div className="form-check ps-0 m-0 category-list-box">
                                                            <input className="checkbox_animated" type="checkbox" checked={categories.includes(item?.slug)} id={item?.slug} />
                                                            <label className="form-check-label" htmlFor={item?.slug}>
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
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span>Les marques</span>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse show"
                                    aria-labelledby="headingTwo">
                                    <div className="accordion-body">
                                        <ul className="category-list custom-padding custom-height">
                                            {listBrands && listBrands.length ?
                                                listBrands.map((item) => 
                                                    <li key={item?.slug}>
                                                        <div className="form-check ps-0 m-0 category-list-box">
                                                            <input className="checkbox_animated" checked={brands.includes(item?.slug)} type="checkbox" id={item?.slug} />
                                                            <label className="form-check-label" htmlFor={item?.slug}>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}