import React, { useContext } from 'react';
import { AlignLeft } from 'react-feather';
import { DataProvider } from '../contexts/DataContext';
import { Link } from 'react-router-dom';

export default function MenuCategories({ toggleCategories = null, status = null }) {
    const { menuCategories } = useContext(DataProvider)

    return (  
        <div className="header-nav-left nav-categories">
            <button className="dropdown-category">
                <AlignLeft />
                <span>Toutes catégories</span>
            </button>

            <div className={`category-dropdown ${status ? 'active' : ''}`}>
                <div className="category-title">
                    <h5>Catégories</h5>
                    <button
                        type="button"
                        className="btn p-0 close-button text-content"
                        onClick={() => toggleCategories(false)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                {(menuCategories && menuCategories.length) && 
                    <ul className="category-list">
                        {menuCategories.map((item, key) => 
                            <li className="onhover-category-list" key={`menu-category-${key}`}>
                                
                                <Link 
                                    to={`/products?categories=${item?.slug}`} 
                                    className="category-name"
                                >
                                    <h6>{item?.name}</h6>
                                    {(item?.active_childrens && item?.active_childrens.length) ? <i className="fa-solid fa-angle-right"></i> : null}
                                </Link>
                                {(item?.active_childrens && item?.active_childrens.length) ?
                                    <div className="onhover-category-box">
                                        <div className="list-1">
                                            <ul>
                                                {item?.active_childrens.map((sub, keysub) => 
                                                    <li key={`menu-sub-category-${keysub}`}>
                                                        <Link 
                                                            to={`/products?categories=${item?.slug},${sub?.slug}`} 
                                                        >
                                                            {sub?.name}
                                                        </Link>
                                                        {(sub?.active_childrens && sub?.active_childrens.length) ?
                                                            <div className="onhover-category-box">
                                                                <div className="list-1">
                                                                    <ul>
                                                                        {sub?.active_childrens.map((sub1, keysub1) => 
                                                                            <li key={`menu-sub-category-${keysub1}`}>
                                                                                <Link 
                                                                                    to={`/products?categories=${item?.slug},${sub?.slug},${sub1?.slug}`} 
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