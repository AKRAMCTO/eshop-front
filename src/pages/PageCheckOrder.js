import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import ErrorSnackbar from "../components/ErrorSnackbar";
import { TailSpin } from "react-loader-spinner";
import { getOrder } from "../queries/queries";
import { Link } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import OrderStatus from "../components/OrderStatus";
import { Package, Truck } from "react-feather";

export default function PageCheckOrder() {
    const {isLoggedIn}= useContext(AuthProvider)
    const [order, setOrder] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [orderRef, setOrderRef] = useState(null)
    const [orderEmail, setOrderEmail] = useState(null)

    useEffect(() => {
        if(loading) {
            if(isError) setIsError(false)
            setOrder(null)
        }
    }, [loading])

    const fetchOrder = async () => {
        if(orderRef && orderEmail){
        // if(orderRef){
            if(isError) setIsError(false)
            setLoading(true)
            try {
                const res = await getOrder({ref: orderRef, email: orderEmail});
                // const res = await getOrder({ref: orderRef});
                if (res.message === 'success') {
                    setOrder(res?.data)
                }else{
                    setIsError(true)
                }
            } catch (error) {
                setIsError(true)
            }
            setLoading(false)
        }else{
            setIsError(true)
        }
    }

    const OrderDate = (date_creation) => {
        let date = new Date(date_creation * 1000)
        return date.toLocaleDateString("en-US")
    }
    const addOrderRed = async (key) => {
        setOrderRef(key)
        if(isError) setIsError(false)
    }
    const addOrderEmail = async (key) => {
        setOrderEmail(key)
        if(isError) setIsError(false)
    }
    const currentStatus = (current) => {
        let status_1 = ["draft", "registred"]
        let status_2 = ["deposit", "shipped"]
        let status_3 = ["arrived", "out_for_delivery"]
        let status_4 = ["Delivered"]
        let status_5 = ["delivery_fail"]
        let status_6 = ["returned", "returned_after", "returned_delivered"]
        let status_7 = ["canceled"]

        if(status_1.includes(current)){
            return 1;
        }else if(status_2.includes(current)){
            return 2;
        }else if(status_3.includes(current)){
            return 3;
        }else if(status_4.includes(current)){
            return 4;
        }else if(status_5.includes(current)){
            return 5;
        }else if(status_6.includes(current)){
            return 6;
        }else if(status_7.includes(current)){
            return 7;
        }
        return null
    }

    if(isLoggedIn){
        return <Redirect to={`/`} />
    }

    return (
        <Layout>
            <Helmet>
                <title>{`Vérifier l'état des commandes | Ecowatt`}</title>
            </Helmet>

            <Breadcrumb title="Vérifier l'état des commandes" />

            <section className="section-404 section-lg-space">
                
                <div className="container-fluid-lg">
                    <div className="row flex-column align-items-center justify-content-center">
                        <div className="col-12 col-md-6">
                            <div className="form-floating theme-form-floating">
                                <input type="text" autoFocus className={`form-control text-center ${isError ? 'input-error' : ''}`} id="orderRef" name="orderRef" value={orderRef} onChange={e => addOrderRed(e.target.value)} />
                                <label htmlFor="orderRef">Ref</label>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-4">
                            <div className="form-floating theme-form-floating">
                                <input type="text" className={`form-control text-center ${isError ? 'input-error' : ''}`} id="email" name="email" value={orderEmail} onChange={e => addOrderEmail(e.target.value)} />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button
                                className="btn theme-bg-color btn-md fw-bold text-light mt-4 mx-auto" 
                                type="submit"
                                disabled={loading}
                                onClick={fetchOrder}
                            >
                                {loading ?
                                    <TailSpin
                                        type="ThreeDots"
                                        color="#fff"
                                        height={20}
                                        width={20}
                                        visible={loading}
                                    />
                                    :
                                    'Chercher'
                                }
                            </button>
                        </div>
                        {isError && <div className="col-12 col-md-6"><ErrorSnackbar message={`Cette commande est introuvable`} /></div>}
                    
                        {order && 
                            <div className="col-12 col-md-8 dashboard-order guest-order">
                                <div className="order-contain">
                                    <div className="order-box dashboard-bg-box">
                                        <div className="order-container">
                                            <div className="order-detail">
                                                <h4>
                                                    <div className="order-icon">
                                                        <i data-feather="box"></i>
                                                    </div>
                                                    &nbsp;
                                                    Ref 
                                                    <span>{ order?.ref }</span>
                                                </h4>
                                            </div>
                                            <div className="order-detail">
                                                <h4>Statut <span>{ OrderStatus(order?.status) }</span></h4>
                                            </div>
                                            <div className="order-detail">
                                                {/* <h4>La date <span>{ item?.created_at }</span></h4> */}
                                                <h4>La date <span>{ OrderDate(order?.date_creation) }</span></h4>
                                            </div>
                                        </div>
                                        
                                        {(order?.delivery_note) ? <div className="link-to-file"><a href={order?.delivery_note} target="_blank"><img src={require('./../assets/images/pdf.png')} alt='Commande' /> Voir la bon de commande</a></div> : <div />}

                                        {(order?.lines && order?.lines.length) && 
                                            (order?.lines.map((productItem, productKey) => 
                                                <div className="product-order-detail" key={`guest-order-${productKey}`}>
                                                    <div className="order-wrap">
                                                        <h3>{productItem?.product_label}</h3>
                                                        <ul className="mt-2 product-size">
                                                            <li>
                                                                <div className="size-box">
                                                                    <h6 className="text-content">Prix : </h6>
                                                                    <h5>{Math.round(productItem?.total_ttc * 100) / 100} DH TTC</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="size-box">
                                                                    <h6 className="text-content">Quantité : </h6>
                                                                    <h5>x{productItem?.qty}</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        {(order?.new_tracking && order?.new_status) ? 
                                            <div className="col-12 order-detail mt-4">
                                                <div className="row g-sm-4 g-3">
                                                    <div className="col-6">
                                                        <div className="order-details-contain">
                                                            <div className="order-tracking-icon">
                                                                <Package className="text-content" />
                                                            </div>
                                                            <div className="order-details-name">
                                                                <h5 className="text-content">Code de suivi</h5>
                                                                <h2 className="theme-color">{order?.new_tracking}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="order-details-contain">
                                                            <div className="order-tracking-icon">
                                                                <Truck className="text-content" />
                                                            </div>

                                                            <div className="order-details-name">
                                                                <h5 className="text-content">Service</h5>
                                                                <img src={require('./../assets/images/ctm.png')} className="img-fluid blur-up lazyload" alt="CTM"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 overflow-hidden">
                                                        <ol className="progtrckr">
                                                            <li className={(currentStatus(order?.new_status) >= 1 && currentStatus(order?.new_status) < 5) ? "progtrckr-done" : "progtrckr-todo"}>
                                                                <h5>En cours de préparation</h5>
                                                                {/* <h6>05:43 AM</h6> */}
                                                            </li>
                                                            <li className={(currentStatus(order?.new_status) >= 2 && currentStatus(order?.new_status) < 5) ? "progtrckr-done" : "progtrckr-todo"}>
                                                                <h5>Colis collecté et Expédié</h5>
                                                                {/* <h6>01:21 PM</h6> */}
                                                            </li>
                                                            <li className={(currentStatus(order?.new_status) >= 3 && currentStatus(order?.new_status) < 5) ? "progtrckr-done" : "progtrckr-todo"}>
                                                                <h5>En cours de livraison</h5>
                                                                {/* <h6>Processing</h6> */}
                                                            </li>
                                                            <li className={(currentStatus(order?.new_status) === 4) ? "progtrckr-done" : "progtrckr-todo"}>
                                                                <h5>Livré</h5>
                                                                {/* <h6>Processing</h6> */}
                                                            </li>
                                                            {(currentStatus(order?.new_status) === 5) ? 
                                                                <li className="progtrckr-done">
                                                                    <h5>Echec de livraison</h5>
                                                                    {/* <h6>Pending</h6> */}
                                                                </li>
                                                                : null    
                                                            }
                                                            {(currentStatus(order?.new_status) === 6) ? 
                                                                <li className="progtrckr-done">
                                                                    <h5>Retourné</h5>
                                                                    {/* <h6>Pending</h6> */}
                                                                </li>
                                                                : null    
                                                            }
                                                            {(currentStatus(order?.new_status) === 7) ? 
                                                                <li className="progtrckr-done">
                                                                    <h5>livraison annulée</h5>
                                                                    {/* <h6>Pending</h6> */}
                                                                </li>
                                                                : null    
                                                            }
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        :
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>

            </section >

        </Layout >
    );
}