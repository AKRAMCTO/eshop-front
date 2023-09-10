import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterMenu({ items }) {

    if(!items || !items.length) return null
    return (
        <div className="footer-contain">
            <ul>
                {items.map((page, key) =>
                    <li key={key}>
                        <Link to={`/page/${page?.slug}`} className="text-content">
                            {page?.title}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}