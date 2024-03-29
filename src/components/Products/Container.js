import React from 'react';
import Sidebar from './Sidebar';
import Filter from './Filter';
import { InfinitySpin } from 'react-loader-spinner';
import ProductBox from '../Product/ProductBox';
import Pagination from './Pagination';

const PageSize = 1

export default function Container({
                                    // isLoading,
                                    
                                    isLoadingProducts,
                                    isLoadingCategories,
                                    isLoadingBrands,
                                    isLoadingMeasures,
                                    isLoadingProperties,
                                    
                                    removeItem, 
                                    // handleData, 
                                    search, 
                                    categories, 
                                    brands, 
                                    measures, 
                                    properties,
                                    showProperties,
                                    // sort, 
                                    sort, 
                                    page, 
                                    number, 
                                    listCategories,
                                    listBrands,
                                    listMeasures,
                                    listProperties,
                                    handleCategoriesFilter,
                                    handleBrandsFilter,
                                    handleMeasuresFilter,
                                    handlePropertiesFilter,
                                    handleShowMenu,
                                    showMenu,
                                    handleSort,
                                    handleNumber,
                                    handleGrid,
                                    grid,
                                    products,
                                    maxPages,
                                    handlePage,
                                    handleAttributes
                                }) {

    return (
        <div className="container-fluid-lg">
            <div className="row">
                
                <Sidebar
                    // isLoading={isLoading} 
                    
                    isLoadingProducts={isLoadingProducts}
                    isLoadingCategories={isLoadingCategories}
                    isLoadingBrands={isLoadingBrands}
                    isLoadingProperties={isLoadingProperties}

                    removeItem={removeItem} 
                    listCategories={listCategories} 
                    listBrands={listBrands} 
                    listMeasures={listMeasures} 
                    listProperties={listProperties} 
                    search={search} 
                    categories={categories} 
                    brands={brands} 
                    measures={measures} 
                    properties={properties} 
                    showProperties={showProperties} 
                    handleCategoriesFilter={handleCategoriesFilter}
                    handleBrandsFilter={handleBrandsFilter}
                    handleMeasuresFilter={handleMeasuresFilter}
                    handlePropertiesFilter={handlePropertiesFilter}
                    handleShowMenu={handleShowMenu}
                    handleAttributes={handleAttributes}
                    showMenu={showMenu}
                />

                <div className="col-12 col-lg-9">
                    <Filter
                        handleSort={handleSort} 
                        sort={sort} 
                        handleNumber={handleNumber} 
                        number={number} 
                        handleGrid={handleGrid} 
                        grid={grid} 
                        handleShowMenu={handleShowMenu}
                    />
                    
                    {/* {(isLoading && isLoading?.status && isLoading?.type === 'products') ? */}
                    {(isLoadingProducts) ?
                        <div className="p-4 d-flex align-items-center justify-content-center">
                            <InfinitySpin
                                type="ThreeDots"
                                color="#2A3466"
                                height={220}
                                width={220}
                                // visible={isLoading && isLoading?.status && isLoading?.type === 'products'}
                                visible={isLoadingProducts}
                            />
                        </div>
                        :
                        (
                            (products && products.length) ? 
                                <div
                                    className={`
                                        row g-sm-4 g-3 
                                        ${(grid != 12) ? `row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section row-cols-xxl-${12/grid}` : `row-cols-1`}
                                        
                                    `}
                                >
                                    {products.map((item, key) => 
                                        <div key={`pb-roducts-${item?.slug}`}>
                                            <ProductBox product={item} isWishlist={false} isHorizontal={grid == 12} />
                                        </div>
                                    )}
                                </div>
                            :
                                <h2 className="text-center py-5 my-3">Aucune produit trouvée</h2>
                        )
                    }

                    {/* {(!isLoading && maxPages > 1) &&  */}
                    {(!isLoadingProducts && maxPages > 1) && 
                        <Pagination
                            className="pagination-bar"
                            currentPage={page}
                            totalCount={maxPages}
                            pageSize={PageSize}
                            onPageChange={page => handlePage(page)}
                        />
                        // <nav className="custome-pagination">
                        //     <ul className="pagination justify-content-center">
                        //         {(page > 1) &&
                        //             <li className="page-item" onClick={() => handlePage(1)}>
                        //                 <span className="page-link"><i className="fa-solid fa-angles-left"></i></span>
                        //             </li>
                        //         }
                        //         {
                        //             [...Array(maxPages)].map((_, i) => 
                        //                 <li key={`page-${i}`} className={`${((i+1 === page) && 'active')} page-item`} onClick={() => handlePage(i+1)}>
                        //                     <span className={`page-link`}>{i+1}</span>
                        //                 </li>
                        //             )
                        //         }
                        //         <li className="page-item" onClick={() => handlePage(maxPages)}>
                        //             <span className="page-link"><span className="fa-solid fa-angles-right"></span></span>
                        //         </li>
                        //     </ul>
                        // </nav>
                    }
                </div>
            </div>
        </div>
    )
}