import React from 'react';

export default function Filter({handleSort, sort, handleNumber, number, handleGrid, grid, handleShowMenu}) {
    
    return (
        <div className="show-button">
            <div className="filter-button-group mt-0">
                <div className="filter-button d-inline-block d-lg-none"  onClick={() => handleShowMenu()}>
                    <i className="fa-solid fa-filter"></i> Filter Menu
                </div>
            </div>

            <div className="top-filter-menu">
                <div className="category-dropdown">
                    <div className='space-right d-flex align-items-center'>
                        <h5 className="text-content">Trier par :</h5>
                        <div className="dropdown">
                            <select className="dropdown-toggle" onChange={(event) => handleSort(event.target.value)}>
                                <option></option>
                                {/* <option value="latest">Dernier</option>
                                <option value="pop">Popularité</option> */}
                                <option selected={sort === 'priceLow'} value="priceLow">Prix bas – élevé</option>
                                <option selected={sort === 'priceHigh'} value="priceHigh">Prix élevé - bas</option>
                                <option selected={sort === 'aToz'} value="aToz">A - Z</option>
                                <option selected={sort === 'zToa'} value="zToa">Z-A</option>
                            </select>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <h5 className="text-content">Number :</h5>
                        <div className="dropdown">
                            <select className="dropdown-toggle" onChange={(event) => handleNumber(event.target.value)}>
                                <option selected={number === 15} value={15}>15</option>
                                <option selected={number === 30} value={30}>30</option>
                                <option selected={number === 60} value={60}>60</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid-option d-none d-md-block">
                    <ul>
                        <li className={`three-grid ${(grid == 4) && 'active'}`} onClick={() => handleGrid('4')}>
                            <img src={require("./../../assets/images/grid-3.png")} className="blur-up lazyload" alt="" />
                        </li>
                        <li className={`grid-btn d-xxl-inline-flex d-none ${(grid == 3) && 'active'}`} onClick={() => handleGrid('3')}>
                            <img src={require("./../../assets/images/grid-4.png")} className="blur-up lazyload d-lg-inline-block d-none" alt="" />
                            <img src={require("./../../assets/images/grid.png")} className="blur-up lazyload img-fluid d-lg-none d-inline-block" alt="" />
                        </li>
                        <li className={`list-btn ${(grid == 12) && 'active'}`} onClick={() => handleGrid('12')}>
                            <img src={require("./../../assets/images/list.png")} className="blur-up lazyload" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}