import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterMenu({ items }) {

    if(!items || !items.length) return null
    return (
        <div className="footer-contain">
            <ul>
                {items.map((item, key) =>
                    <li key={key}>
                        <Link to={`/page/${item?.slug}`} className="text-content">
                            {item?.title}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}