import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Eye } from "react-feather";
import { AuthProvider } from "../../contexts/AuthContext";

export default function MyProfile({ userData, SelectModelForm }) {    
    return (
        <div className="dashboard-profile">
            <div className="title">
                <h2>Mon Profil</h2>
                <span className="title-leaf">
                    <img src={require("./../../assets/svg/leaf.png")} alt="" className="icon-width bg-gray" />
                </span>
            </div>

            <div className="profile-detail dashboard-bg-box">
                <div className="dashboard-title">
                    <h3>Nom de profil</h3>
                </div>
                <div className="profile-name-detail">
                    <div className="d-sm-flex align-items-center d-block">
                        <h3>{userData?.full_name}</h3>
                    </div>
                    <button type="button" onClick={() => SelectModelForm('profile')}>Modifier</button>
                </div>

                <div className="location-profile">
                    <ul>
                        {(userData?.email) &&
                            <li>
                                <div className="location-box">
                                    <i data-feather="mail"></i>
                                    <h6>{ userData?.email }</h6>
                                </div>
                            </li>
                        }

                        <li>
                            <div className="location-box">
                                <i data-feather="check-square"></i>
                                <h6>{userData.type === 'professional' ? 'Professionnel' : (userData.type === 'seller' ? 'Privilégié' : 'Particulier')}</h6>
                            </div>
                        </li>

                        {(userData.type === 'professional' || userData.type === 'seller') &&
                            <li>
                                <div className="location-box">
                                    <i data-feather="map-pin"></i>
                                    <h6>{userData?.confirmation ? 'Confirmer' : 'Non confirmer'}</h6>
                                </div>
                            </li>
                        }
                    </ul>
                </div>
            </div>

            <div className="profile-about dashboard-bg-box">
                <div className="row">
                    <div className="col-xxl-7">
                        <div className="dashboard-title mb-3">
                            <h3>Profil À propos</h3>
                        </div>

                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    {(userData?.mobile) &&
                                        <tr>
                                            <td>Phone Number :</td>
                                            <td>
                                                <Link to={`tel:${userData?.mobile}`}>{userData?.mobile ?? '-'}</Link>
                                            </td>
                                        </tr>
                                    }
                                    {(userData.type === 'professional' || userData.type === 'seller') && 
                                        <tr>
                                            <td>{(userData.type === 'seller') ? 'Raison sociale' : 'RC'} :</td>
                                            <td>{userData?.rc}</td>
                                        </tr>
                                    }
                                    {(userData.type === 'professional' || userData.type === 'seller') && 
                                        <tr>
                                            <td>ICE :</td>
                                            <td>{userData?.ice}</td>
                                        </tr>
                                    }
                                    {(userData.type === 'seller') && 
                                        <tr>
                                            <td>RC (PDF) :</td>
                                            <td>
                                                <a rel="noreferrer" href={userData?.full_rc_file} target="_blank">
                                                    <Eye />
                                                </a>
                                            </td>
                                        </tr>
                                    }
                                    {/* {(userData.type === 'seller') && 
                                        <tr>
                                            <td>ICE (PDF) :</td>
                                            <td>
                                                <a rel="noreferrer" href={userData?.full_ice_file} target="_blank">
                                                    <Eye />
                                                </a>
                                            </td>
                                        </tr>
                                    } */}
                                    {(userData.type === 'seller') && 
                                        <tr>
                                            <td>CIN (PDF) :</td>
                                            <td>
                                                <a rel="noreferrer" href={userData?.full_cin_file} target="_blank">
                                                    <Eye />
                                                </a>
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="dashboard-title mb-3">
                            <h3>Login Details</h3>
                        </div>

                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    {userData?.email && 
                                        <tr>
                                            <td>Email :</td>
                                            <td>{userData?.email}</td>
                                        </tr>
                                    }
                                    <tr>
                                        <td>Password :</td>
                                        <td>
                                            ●●●●●● &nbsp;&nbsp;
                                            <button type="button" onClick={() => SelectModelForm('password')}>Modifier</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-xxl-5">
                        <div className="profile-image">
                            <img src={require("./../../assets/images/dashboard-profile.png")} className="img-fluid blur-up lazyload" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}