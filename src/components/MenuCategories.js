import React, { useContext } from 'react';
import { AlignLeft } from 'react-feather';
import { DataProvider } from '../contexts/DataContext';
import { Link } from 'react-router-dom';

export default function MenuCategories() {
    const { menuCategories } = useContext(DataProvider)

    return (  
        <div className="header-nav-left">
            <button className="dropdown-category">
                <AlignLeft />
                <span>Toutes catégories</span>
            </button>

            <div className="category-dropdown">
                <div className="category-title">
                    <h5>Catégories</h5>
                    <button
                        type="button"
                        className="btn p-0 close-button text-content"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                {(menuCategories && menuCategories.length) && 
                    <ul className="category-list">
                        {menuCategories.map((item, key) => 
                            <li className="onhover-category-list" key={`menu-category-${key}`}>
                                <Link 
                                    to={{
                                        pathname: "/products",
                                        state: {category: item?.slug}
                                    }} 
                                    className="category-name"
                                >
                                    <h6>{item?.name}</h6>
                                    {(item?.childrens && item?.childrens.length) ? <i className="fa-solid fa-angle-right"></i> : null}
                                </Link>
                                {(item?.childrens && item?.childrens.length) ?
                                    <div className="onhover-category-box">
                                        <div className="list-1">
                                            <ul>
                                                {item?.childrens.map((sub, keysub) => 
                                                    <li key={`menu-sub-category-${keysub}`}>
                                                        <Link 
                                                            to={{
                                                                pathname: "/products",
                                                                state: {category: sub?.slug}
                                                            }} 
                                                        >
                                                            {sub?.name}
                                                        </Link>
                                                        {(sub?.childrens && sub?.childrens.length) ?
                                                            <div className="onhover-category-box">
                                                                <div className="list-1">
                                                                    <ul>
                                                                        {sub?.childrens.map((sub1, keysub1) => 
                                                                            <li key={`menu-sub-category-${keysub1}`}>
                                                                                <Link 
                                                                                    to={{
                                                                                        pathname: "/products",
                                                                                        state: {category: sub1?.slug}
                                                                                    }} 
                                                                                >{sub1?.name}</Link>
                                                                            </li>
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            :
                                                            null
                                                        }
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    :
                                    null
                                }
                            </li>
                        )}
                    </ul>
                }
            </div>
        </div>
    )
}