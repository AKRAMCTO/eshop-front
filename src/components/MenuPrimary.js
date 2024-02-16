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
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={`/`}>Accueil</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to={`/a-propos-de-nous`}>À propos de nous</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/contactez-nous`}>Contactez-nous</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/centre-d-aide`}>Centre d'aide</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={`/page/page-1`}>L’entreprise</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={`/page/page-1`}>L’entreprise</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/page/page-2`}>Notre savoir faire</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/page-404`}>Page 404</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className={`offcanvas-backdrop fade ${(menu) ? 'show' : ''}`} style={{ visibility: (menu) ? 'visible' : 'hidden' }}></div>
            </div>
        </div>
    )
}