import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import AccordionItem from './AccordionItem';
import Range from './Range';

export default function Sidebar({/* isLoading,*/ isLoadingCategories, isLoadingBrands, isLoadingMeasures, isLoadingProperties, removeItem, listCategories, categories, listBrands, brands, listMeasures, measures, listProperties, properties, handleCategoriesFilter, handleBrandsFilter, handleMeasuresFilter, handlePropertiesFilter, handleAttributes, handleShowMenu, showMenu}) {
    
    return (
        <div className="col-12 col-md-3">
            {(isLoadingCategories || isLoadingBrands || isLoadingMeasures || isLoadingProperties) ?
                <div className="px-4 py-5 d-flex align-items-center justify-content-center">
                    <InfinitySpin
                        type="ThreeDots"
                        color="#2A3466"
                        height={220}
                        width={220}
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
                    {/* {(measures && measures.length) ? 
                        <div className={`selected-rows mb-3`}>
                            <h5>Les mesures</h5>
                            {measures.map((item, i) => 
                                <button type='button' key={`side-measures-${i}`} className={`rows-tags`} onClick={() => removeItem(item, 'measures')}>x {item.replace(/-/g, " ")}</button>
                            )}
                        </div>
                        : <div />
                    } */}
                    {/* {(properties && properties.length) ? 
                        <div className={`selected-rows mb-3`}>
                            <h5>Les propriétés</h5>
                            {properties.map((item, i) => 
                                <button type='button' key={`side-properties-${i}`} className={`rows-tags`} onClick={() => removeItem(item, 'properties')}>x {item.replace(/-/g, " ")}</button>
                            )}
                        </div>
                        : <div />
                    } */}

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
                                                                <span className="number">{item?.products_count}</span>
                                                            </label>
                                                        </div>
                                                    </li>
                                                    {(item?.active_childrens) && (
                                                        item?.active_childrens.map((sub, a) => 
                                                            <>
                                                                <li key={sub?.slug}>
                                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                                        <input readOnly className="checkbox_animated" name='categories' type="checkbox" checked={categories.includes(sub?.slug)} id={sub?.slug} />
                                                                        <label className="form-check-label" htmlFor={sub?.slug} onClick={() => handleCategoriesFilter(sub?.slug)}>
                                                                            <span className="name">&nbsp;&nbsp;&nbsp;{sub?.name}</span>
                                                                            <span className="number">{sub?.products_count}</span>
                                                                        </label>
                                                                    </div>
                                                                </li>
                                                                {(sub?.active_childrens) && (
                                                                    sub?.active_childrens.map((subsub, b) =>                             
                                                                        <li key={subsub?.slug}>
                                                                            <div className="form-check ps-0 m-0 category-list-box">
                                                                                <input readOnly className="checkbox_animated" name='categories' type="checkbox" checked={categories.includes(subsub?.slug)} id={subsub?.slug} />
                                                                                <label className="form-check-label" htmlFor={subsub?.slug} onClick={() => handleCategoriesFilter(subsub?.slug)}>
                                                                                    <span className="name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{subsub?.name}</span>
                                                                                    <span className="number">{subsub?.products_count}</span>
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
                                            <p className="text-danger">Liste vide</p>
                                        }
                                    </ul>
                                </AccordionItem>
                                <AccordionItem
                                    title={`Les marques`}
                                    defaultStatus={true}
                                >
                                    <ul className="category-list custom-padding custom-height">
                                        {listBrands && listBrands.length ?
                                            listBrands.map((item) => 
                                                <li key={item?.slug}>
                                                    <div className="form-check ps-0 m-0 category-list-box">
                                                        <input readOnly className="checkbox_animated" checked={brands.includes(item?.slug)} type="checkbox" id={item?.slug} />
                                                        <label className="form-check-label" htmlFor={item?.slug} onClick={() => handleBrandsFilter(item?.slug)}>
                                                            <span className="name">{item?.name}</span>
                                                            <span className="number">{item?.products_count}</span>
                                                        </label>
                                                    </div>
                                                </li>
                                            )
                                            :
                                            <p className="text-danger">Liste vide</p>
                                        }
                                    </ul>
                                </AccordionItem>
                                {/* {(listProperties && listProperties.length) ?
                                    listProperties.map((item, key) => 
                                        (item?.chooses) ? 
                                            <AccordionItem
                                                title={item?.label}
                                                defaultStatus={true}
                                            >
                                                <ul className="category-list custom-padding custom-height">
                                                    {item?.chooses.map((row, key1) => 
                                                        <li key={`${item?.label}-${key}-${key1}`}>
                                                            <div className="form-check ps-0 m-0 category-list-box">
                                                                <input 
                                                                    readOnly
                                                                    className="checkbox_animated" 
                                                                    name='prop' 
                                                                    type="checkbox"
                                                                    checked={properties[item?.label] && properties[item?.label].includes(row)} 
                                                                    id={`${row}-${key}-${key1}`}
                                                                />
                                                                <label className="form-check-label" htmlFor={`${row}-${key}-${key1}`} onClick={() => handlePropertiesFilter(item?.label, row)} >
                                                                    <span className="name">{row}</span>
                                                                    <span className="number"></span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    )}
                                                </ul>
                                            </AccordionItem>
                                        :
                                        <div />
                                    )
                                    :
                                    <div />
                                } */}
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}