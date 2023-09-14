import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataProvider } from '../../contexts/DataContext';

const Icon = "https://via.placeholder.com/50x50"

export default function PinnedCategories() {
    const { menus } = useContext(DataProvider);

    if(!menus || !menus['categories'] || !menus['categories'].length) return null
    return (
        <div className="category-menu">
            <h3>Acheter par catégories</h3>
            <ul className="border-bottom-0">
                {menus['categories'].map((item, key) =>
                    <li key={key}>
                        <div className="category-list">
                            <img
                                src={item?.full_image ?? Icon}
                                className="lazyload"
                                alt="{item?.name}"
                            />
                            <h5>
                                <Link to={`/products?category=${item?.slug}`} className="text-content">{item?.name}</Link>
                            </h5>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}