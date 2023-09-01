import React, { useContext } from 'react';
import { AlignLeft } from 'react-feather';

export default function MenuCategories() {
    return (  
        <div className="header-nav-left">
            <button className="dropdown-category">
                <AlignLeft />
                <span>All Categories</span>
            </button>

            <div className="category-dropdown">
                <div className="category-title">
                    <h5>Categories</h5>
                    <button
                        type="button"
                        className="btn p-0 close-button text-content"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <ul className="category-list">
                    <li className="onhover-category-list">
                        <a  className="category-name">
                            <h6>Panneaux solaires</h6>
                            <i className="fa-solid fa-angle-right"></i>
                        </a>

                        <div className="onhover-category-box">
                            <div className="list-1">
                                <ul>
                                    <li>
                                        <a >Canadian solar</a>
                                    </li>
                                    <li>
                                        <a >JA SOLAR</a>
                                    </li>
                                    <li>
                                        <a >JINKO SOLAR</a>
                                    </li>
                                    <li>
                                        <a >TRINA SOLAR</a>
                                    </li>
                                    <li>
                                        <a >ZNSHINE</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="onhover-category-list">
                        <a  className="category-name">
                            <h6>Variateurs pompage solaire</h6>
                            <i className="fa-solid fa-angle-right"></i>
                        </a>

                        <div className="onhover-category-box w-100">
                            <div className="list-1">
                                <ul>
                                    <li>
                                        <a >
                                            Variateur de vitesse pour pompage
                                        </a>
                                    </li>
                                    <li>
                                        <a >solaire</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="onhover-category-list">
                        <a  className="category-name">
                            <h6>Onduleur solaire On grid</h6>
                            <i className="fa-solid fa-angle-right"></i>
                        </a>

                        <div className="onhover-category-box">
                            <div className="list-1">
                                <ul>
                                    <li>
                                        <a >HUAWEI</a>
                                    </li>
                                    <li>
                                        <a >Onduleur HUAWEI</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="onhover-category-list">
                        <a  className="category-name">
                            <h6>Onduleur Off-grid Hybride</h6>
                            <i className="fa-solid fa-angle-right"></i>
                        </a>

                        <div className="onhover-category-box w-100">
                            <div className="list-1">
                                <ul>
                                    <li>
                                        <a >Onduleur Phocos</a>
                                    </li>
                                    <li>
                                        <a >Onduleur STECA</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="onhover-category-list">
                        <a  className="category-name">
                            <h6>Cable solaire</h6>
                            <i className="fa-solid fa-angle-right"></i>
                        </a>
                    </li>

                    <li className="onhover-category-list">
                        <a  className="category-name">
                            <h6>Groupe moto pompe</h6>
                            <i className="fa-solid fa-angle-right"></i>
                        </a>
                    </li>

                    <li className="onhover-category-list">
                        <a  className="category-name">
                            <h6>Structure métallique</h6>
                            <i className="fa-solid fa-angle-right"></i>
                        </a>

                        <div className="onhover-category-box">
                            <div className="list-1">
                                <ul>
                                    <li>
                                        <a >SAutres</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="onhover-category-list">
                        <a  className="category-name">
                            <h6>Batteries solaires</h6>
                            <i className="fa-solid fa-angle-right"></i>
                        </a>
                    </li>

                    <li className="onhover-category-list">
                        <a  className="category-name">
                            <h6>Projecteurs solaires</h6>
                            <i className="fa-solid fa-angle-right"></i>
                        </a>
                    </li>

                    <li className="onhover-category-list">
                        <a  className="category-name">
                            <h6>Accessoires Électriques</h6>
                            <i className="fa-solid fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}