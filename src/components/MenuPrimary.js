import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function MenuPrimary({ menu, toggleMenu }) {

    return (  
        <div className="header-nav-middle">
            <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                <div className={`offcanvas offcanvas-collapse order-xl-2 ${(menu) ? 'show' : ''}`} id="primaryMenu">
                    <div className="offcanvas-header navbar-shadow">
                        <h5>Menu</h5>
                        <button
                            className="btn-close lead"
                            type="button"
                            onClick={() => toggleMenu(false)}
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/`}>Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/page/lentreprise`}>L’entreprise</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/page/notre-savoir-faire`}>Notre savoir faire</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/page-404`}>Page 404</Link>
                            </li>

                            {/* <li className="nav-item">
                                <a className="nav-link" href="./pages/seller-grid.html">
                                    Nos magasin
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="./pages/about-us.html">
                                    A propos de nous
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="./pages/contact-us.html">
                                    Contactez-nous
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="./pages/blog-list.html">
                                    Blog
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className={`offcanvas-backdrop fade ${(menu) ? 'show' : ''}`} style={{ visibility: (menu) ? 'visible' : 'hidden' }}></div>
            </div>
        </div>
    )
}