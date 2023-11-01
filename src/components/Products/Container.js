import React from 'react';
import { useQuery } from 'react-query';
import Sidebar from './Sidebar';
import Filter from './Filter';
import { InfinitySpin } from 'react-loader-spinner';
import { getProducts } from '../../queries/queries';
import ProductBox from '../Product/ProductBox';

export default function Container({
                                    isLoading,
                                    // handleData, 
                                    categories, 
                                    brands, 
                                    // sort, 
                                    page, 
                                    listCategories,
                                    listBrands,
                                    handleCategoriesFilter,
                                    handleBrandsFilter,
                                    handleShowMenu,
                                    showMenu,
                                    handleSort,
                                    handleGrid,
                                    grid,
                                    products,
                                    maxPages,
                                    handlePage
                                }) {

    return (
        <div className="container-fluid-lg">
            <div className="row">
                
                <Sidebar
                    isLoading={isLoading} 
                    listCategories={listCategories} 
                    categories={categories} 
                    listBrands={listBrands} 
                    brands={brands} 
                    handleCategoriesFilter={handleCategoriesFilter}
                    handleBrandsFilter={handleBrandsFilter}
                    handleShowMenu={handleShowMenu}
                    showMenu={showMenu}
                />

                <div className="col-custome-9">

                    <Filter
                        handleSort={handleSort} 
                        handleGrid={handleGrid} 
                        grid={grid} 
                        handleShowMenu={handleShowMenu}
                    />
                    
                    {(isLoading && isLoading?.status && isLoading?.type === 'products') ?
                        <div className="p-4 d-flex align-items-center justify-content-center">
                            <InfinitySpin
                                type="ThreeDots"
                                color="#2A3466"
                                height={220}
                                width={220}
                                visible={isLoading && isLoading?.status && isLoading?.type === 'products'}
                            />
                        </div>
                        :
                        (
                            (products && products.length) ? 
                                <div
                                    className={`
                                        row g-sm-4 g-3 
                                        row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section
                                        row-cols-xxl-${12/grid}
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

                    {(maxPages > 1) && 
                        <nav className="custome-pagination">
                            <ul className="pagination justify-content-center">
                                {(page > 1) &&
                                    <li className="page-item" onClick={() => handlePage(1)}>
                                        <span className="page-link"><i className="fa-solid fa-angles-left"></i></span>
                                    </li>
                                }
                                {
                                    [...Array(maxPages)].map((_, i) => 
                                        <li key={`page-${i}`} className={`${((i+1 === page) && 'active')} page-item`} onClick={() => handlePage(i+1)}>
                                            <span className={`page-link`}>{i+1}</span>
                                        </li>
                                    )
                                }
                                <li className="page-item" onClick={() => handlePage(maxPages)}>
                                    <span className="page-link"><span className="fa-solid fa-angles-right"></span></span>
                                </li>
                            </ul>
                        </nav>
                    }
                </div>
            </div>
        </div>
    )
}