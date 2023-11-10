import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterCategory({ items }) {

    if(!items || !items.length) return null
    return (
        <div className="footer-contain">
            <ul>
                {items.map((item, key) =>
                    <li key={key}>
                        <Link 
                            to={{
                                pathname: "/products",
                                state: {category: item?.slug}
                            }} 
                            className="text-content"
                        >
                            {item?.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}