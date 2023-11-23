import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Slider from 'react-slick';
import AccordionItem from './AccordionItem';

export default function Sidebar({/* isLoading,*/ isLoadingCategories, isLoadingBrands, isLoadingMeasures, isLoadingProperties, removeItem, listCategories, categories, listBrands, brands, listMeasures, measures, listProperties, properties, handleCategoriesFilter, handleBrandsFilter, handleMeasuresFilter, handlePropertiesFilter, handleShowMenu, showMenu}) {
    
    return (
        <div className="col-12 col-md-3">
            {/* {(isLoading && isLoading?.status && isLoading?.type !== 'products') ? */}
            {(isLoadingCategories || isLoadingBrands || isLoadingMeasures || isLoadingProperties) ?
                <div className="px-4 py-5 d-flex align-items-center justify-content-center">
                    <InfinitySpin
                        type="ThreeDots"
                        color="#2A3466"
                        height={220}
                        width={220}
                        // visible={isLoading && isLoading?.status && isLoading?.type !== 'products'}
                        visible={isLoadingCategories || isLoadingBrands || isLoadingMeasures || isLoadingProperties}
                    />
                </div>
            :
                <>
                    {(categories && categories.length) ? 
                        <div className={`selected-rows mb-3`}>
                            <h5>Catégories</h5>
                            {categories.map((item, i) => 
                                <button type='button' key={`side-categories-${i}`} className={`rows-tags`} onClick={() => removeItem(item, 'categories')}>x {item.replace(/-/g, " ")}</button>
                            )}
                        </div>
                        : <div />
                    }
                    {(brands && brands.length) ? 
                        <div className={`selected-rows mb-3`}>
                            <h5>Les marques</h5>
                            {brands.map((item, i) => 
                                <button type='button' key={`side-brands-${i}`} className={`rows-tags`} onClick={() => removeItem(item, 'brands')}>x {item.replace(/-/g, " ")}</button>
                            )}
                        </div>
                        : <div />
                    }
                    {(measures && measures.length) ? 
                        <div className={`selected-rows mb-3`}>
                            <h5>Les mesures</h5>
                            {measures.map((item, i) => 
                                <button type='button' key={`side-measures-${i}`} className={`rows-tags`} onClick={() => removeItem(item, 'measures')}>x {item.replace(/-/g, " ")}</button>
                            )}
                        </div>
                        : <div />
                    }
                    {(properties && properties.length) ? 
                        <div className={`selected-rows mb-3`}>
                            <h5>Les propriétés</h5>
                            {properties.map((item, i) => 
                                <button type='button' key={`side-properties-${i}`} className={`rows-tags`} onClick={() => removeItem(item, 'properties')}>x {item.replace(/-/g, " ")}</button>
                            )}
                        </div>
                        : <div />
                    }

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
                                                <>
                                                    <li key={item?.slug}>
                                                        <div className="form-check ps-0 m-0 category-list-box">
                                                            <input readOnly className="checkbox_animated" name='categories' type="checkbox" checked={categories.includes(item?.slug)} id={item?.slug} />
                                                            <label className="form-check-label" htmlFor={item?.slug} onClick={() => handleCategoriesFilter(item?.slug)}>
                                                                <span className="name">{item?.name}</span>
                                                                <span className="number">{item?.active_products_count}</span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                    {(item?.childrens) && (
                                                        item?.childrens.map((sub, a) => 
                                                            <>
                                                                <li key={sub?.slug}>
                                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                                        <input readOnly className="checkbox_animated" name='categories' type="checkbox" checked={categories.includes(sub?.slug)} id={sub?.slug} />
                                                                        <label className="form-check-label" htmlFor={sub?.slug} onClick={() => handleCategoriesFilter(sub?.slug)}>
                                                                            <span className="name">&nbsp;&nbsp;&nbsp;{sub?.name}</span>
                                                                            <span className="number">{sub?.active_products_count}</span>
                                                                        </label>
                                                                    </div>
                                                                </li>
                                                                {(sub?.childrens) && (
                                                                    sub?.childrens.map((subsub, b) =>                             
                                                                        <li key={subsub?.slug}>
                                                                            <div className="form-check ps-0 m-0 category-list-box">
                                                                                <input readOnly className="checkbox_animated" name='categories' type="checkbox" checked={categories.includes(subsub?.slug)} id={subsub?.slug} />
                                                                                <label className="form-check-label" htmlFor={subsub?.slug} onClick={() => handleCategoriesFilter(subsub?.slug)}>
                                                                                    <span className="name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{subsub?.name}</span>
                                                                                    <span className="number">{subsub?.active_products_count}</span>
                                                                                </label>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </>
                                                        )
                                                    )}
                                                </>
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
                                <AccordionItem
                                    title={`Les mesures`}
                                    defaultStatus={false}
                                >
                                    <ul className="category-list custom-padding custom-height">
                                        {listMeasures && listMeasures.length ?
                                            listMeasures.map((item) => 
                                                <li key={`measure-${item?.id}`}>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input readOnly className="checkbox_animated" checked={measures.includes(item?.label)} type="checkbox" id={`measure-${item?.id}`} />
                                                        <label className="form-check-label" htmlFor={`measure-${item?.id}`} onClick={() => handleMeasuresFilter(item?.label)}>
                                                            <span className="name">{item?.label}</span>
                                                            <span className="number">{item?.products_count}</span>
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
                                    title={`Les propriétés`}
                                    defaultStatus={false}
                                >
                                    <ul className="category-list custom-padding custom-height">
                                        {listProperties && listProperties.length ?
                                            listProperties.map((item) => 
                                                <li key={`properties-${item?.id}`}>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input readOnly className="checkbox_animated" checked={properties.includes(item?.label)} type="checkbox" id={`properties-${item?.id}`} />
                                                        <label className="form-check-label" htmlFor={`properties-${item?.id}`} onClick={() => handlePropertiesFilter(item?.label)}>
                                                            <span className="name">{item?.label}</span>
                                                            <span className="number">{item?.products_count}</span>
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