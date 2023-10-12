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
            if(isError) setIsError(false)
            setLoading(true)
            try {
                const res = await getOrder({ref: orderRef, email: orderEmail});
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

    const addOrderRed = async (key) => {
        setOrderRef(key)
        if(isError) setIsError(false)
    }
    const addOrderEmail = async (key) => {
        setOrderEmail(key)
        if(isError) setIsError(false)
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
                                            <div className="order-icon">
                                                <i data-feather="box"></i>
                                            </div>

                                            <div className="order-detail">
                                                <h4>Statut <span>{ OrderStatus(order?.status) }</span></h4>
                                                {/* <h6 className="text-content">Gouda parmesan caerphilly mozzarella cottage cheese cauliflower cheese taleggio gouda.</h6> */}
                                            </div>
                                        </div>
                                        {(order?.items && order?.items.length) && 
                                            (order?.items.map((productItem, productKey) => 
                                                <div className="product-order-detail" key={`guest-order-${productKey}`}>
                                                    <Link to={`/product/${productItem?.product?.slug}`} className="order-image">
                                                        <img src={productItem?.image} className="blur-up lazyload" alt={productItem?.product?.title} />
                                                    </Link>
                                                    <div className="order-wrap">
                                                        <Link to={`/product/${productItem?.product?.slug}`}>
                                                            <h3>{productItem?.product?.title}</h3>
                                                        </Link>
                                                        <ul className="product-size">
                                                            <li>
                                                                <div className="size-box">
                                                                    <h6 className="text-content">Prix : </h6>
                                                                    <h5>{productItem?.price} Dhs</h5>
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