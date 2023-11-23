import React, { useContext, useEffect, useState } from "react";
import { AuthProvider } from './../../contexts/AuthContext';

export default function MyAccount({ userData, SelectModelForm }) {
    const { listAddresses, addressesLoading, addressesFetching, listOrdersCounter }  = useContext(AuthProvider)
    const [addressDelivery, setAddressDelivery]  = useState(null)
    const [addressInvoice, setAddressInvoice]  = useState(null)

    useEffect(() => {
        if(!addressesFetching && !addressesLoading && listAddresses && listAddresses.length){
            let addressDelivery = listAddresses.filter(function (el) {return el.type === 'delivery' && el.is_default});
            if(addressDelivery && addressDelivery.length) setAddressDelivery(addressDelivery[0])

            let addressBilling = listAddresses.filter(function (el) {return el.type === 'billing' && el.is_default});
            if(addressBilling && addressBilling.length) setAddressInvoice(addressBilling[0])
        }
    }, [addressesLoading, addressesFetching])

    return (
        <div className="dashboard-home">
            <div className="title">
                <h2>Mon compte</h2>
                <span className="title-leaf">
                    <img src={require("./../../assets/svg/leaf.png")} alt="" className="icon-width bg-gray" />
                </span>
            </div>

            <div className="dashboard-user-name">
                <h6 className="text-content">Bonjour, <b className="text-title">{userData?.full_name}</b></h6>
            </div>

            {/* 
                <div className="total-box">
                    <div className="row g-sm-4 g-3">
                        <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                            <div className="totle-contain">
                                <img src={require("./../../assets/images/order.png")} className="img-1 blur-up lazyload" alt="" />
                                <img src={require("./../../assets/images/order.png")} className="blur-up lazyload" alt="" />
                                <div className="totle-detail">
                                    <h5>Total des commandes</h5>
                                    <h3>{ listOrdersCounter }</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                            <div className="totle-contain">
                                <img src={require("../../assets/images/pending.png")} className="img-1 blur-up lazyload" alt="" />
                                <img src={require("../../assets/images/pending.png")} className="blur-up lazyload" alt="" />
                                <div className="totle-detail">
                                    <h5>Total des commandes en attente</h5>
                                    <h3>254</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                            <div className="totle-contain">
                                <img src={require("../../assets/images/wishlist.png")} className="img-1 blur-up lazyload" alt="" />
                                <img src={require("../../assets/images/wishlist.png")} className="blur-up lazyload" alt="" />
                                <div className="totle-detail">
                                    <h5>Listes de souhaits totales</h5>
                                    <h3>32158</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            */}

            <div className="dashboard-title">
                <h3>Information sur le compte</h3>
            </div>

            <div className="row g-4">
                <div className="col-xxl-6">
                    <div className="dashboard-contant-title">
                        <h4>Informations de contact <button type="button" onClick={() => SelectModelForm('profile')}>Modifier</button></h4>
                    </div>
                    <div className="dashboard-detail">
                        <h6 className="text-content">{userData?.full_name}</h6>
                        {(userData?.email) && <h6 className="text-content">{userData?.email}</h6>}
                        <button type="button" onClick={() => SelectModelForm('password')}>Change Password</button>
                    </div>
                </div>

                {/* <div className="col-xxl-6">
                    <div className="dashboard-contant-title">
                        <h4>Newsletters <a>Modifier</a></h4>
                    </div>
                    <div className="dashboard-detail">
                        <h6 className="text-content">You are currently not subscribed to any newsletter</h6>
                    </div>
                </div> */}
                
                <div className="col-12">
                    <div className="dashboard-contant-title">
                        <h4>Les adresses</h4>
                    </div>

                    <div className="row g-4">
                        <div className="col-xxl-6">
                            <div className="dashboard-detail">
                                <h6 className="text-content">adresse de facturation par défaut</h6>
                                {(addressInvoice && addressInvoice?.id) ? 
                                    <div className="table-responsive address-table">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>Pays :</td>
                                                    <td>{(addressInvoice?.country) ? addressInvoice?.country?.name : '-'}</td>
                                                </tr>
                                                <tr>
                                                    <td>Provinces :</td>
                                                    <td>{(addressInvoice?.city) ? addressInvoice?.city?.name : '-'}</td>
                                                </tr>
                                                <tr>
                                                    <td>Line 1 :</td>
                                                    <td>{addressInvoice?.line_1}</td>
                                                </tr>
                                                <tr>
                                                    <td>Line 2 :</td>
                                                    <td>{addressInvoice?.line_2 ?? '-'}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                :
                                    <h6 className="text-content">Vous n'avez pas défini d'adresse de facturation par défaut.</h6>
                                }
                            </div>
                        </div>

                        <div className="col-xxl-6">
                            <div className="dashboard-detail">
                                <h6 className="text-content">Adresse de livraison par défaut</h6>
                                {(addressDelivery && addressDelivery?.id) ? 
                                    <div className="table-responsive address-table">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>Pays :</td>
                                                    <td>{(addressDelivery?.country) ? addressDelivery?.country?.name  : '-'}</td>
                                                </tr>
                                                <tr>
                                                    <td>Provinces :</td>
                                                    <td>{(addressDelivery?.city) ? addressDelivery?.city?.name  : '-'}</td>
                                                </tr>
                                                <tr>
                                                    <td>Line 1 :</td>
                                                    <td>{addressDelivery?.line_1}</td>
                                                </tr>
                                                <tr>
                                                    <td>Line 2 :</td>
                                                    <td>{addressDelivery?.line_2 ?? '-'}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                :
                                    <h6 className="text-content">Vous n'avez pas défini d'adresse de livraison par défaut.</h6>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}