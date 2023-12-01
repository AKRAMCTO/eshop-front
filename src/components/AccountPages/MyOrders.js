import React, { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../contexts/AuthContext";
import { Helmet } from "react-helmet";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import OrderStatus from "../OrderStatus";
import Pagination from "../Products/Pagination";
import { Package, Truck } from "react-feather";

const perPage = 8
const PageSize = 1

export default function MyOrders() {
    const {listOrders, ordersLoading, ordersFetching}  = useContext(AuthProvider)
    const [selectedOrder, setSelectedOrder] = useState(null)
    const [page, setPage] = useState(1)
    const [maxPages, setMaxPages] = useState(1)
    const [copyOrders, setCopyOrders] = useState([])
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    
    // filter
    const [code, setCode] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        if(ordersLoading || ordersFetching){
            setLoading(true)
        }
    }, [ordersLoading, ordersFetching])

    useEffect(() => {
        structureOrders()
    }, [listOrders])

    useEffect(() => {
        if(!ordersLoading && !ordersFetching){
            setCopyOrders(listOrders)
        }
    }, [listOrders])

    useEffect(() => {
        structureOrders()
    }, [code, status])

    const structureOrders = () => {
        let result = filterOrder()
        if(result && result.length){
            let total = result.length
            let totalPages = Math.ceil(total / perPage)
            setMaxPages(totalPages)

            if(totalPages === 1){
                setOrders(result)
            }else{
                const offset = perPage * (page - 1)
                console.log(offset, (perPage * page))
                setOrders(result.slice(offset, perPage * page))
            }
        }else{
            setOrders([])
            setPage(1)
            setMaxPages(1)
        }
        window.scrollTo(0, 0);
    }
    const handlePage = (selected) => {
        if(selected !== page) {
            setLoading(true)
            setPage(selected)
            if(maxPages === 1){
                setOrders(copyOrders)
            }else{
                const offset = perPage * (selected - 1)
                setOrders(copyOrders.slice(offset, perPage * selected))
            }
            window.scrollTo(0, 0);
        }
    }
    const filterOrder = () => {
        let copylistOrders = []

        if(listOrders && listOrders.length){
            copylistOrders = [...listOrders]

            if(code && code.length){
                copylistOrders = copylistOrders.filter((item) => item?.ref.toLowerCase().includes(code.toLowerCase()));
                console.log('1 copylistOrders => ', copylistOrders)
            }
            if(status){
                copylistOrders = copylistOrders.filter((item) => item?.status == status);
                console.log('2 copylistOrders => ', copylistOrders)
            }

            setCopyOrders(copylistOrders)
        }

        return copylistOrders;
    }
    useEffect(() => {
        if(!ordersLoading && !ordersFetching) setLoading(false)
    }, [orders])

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
    const showOrder = (id) => {
        if(id === selectedOrder) setSelectedOrder(null)
        else setSelectedOrder(id)
    }
    const OrderDate = (date_creation) => {
        let date = new Date(date_creation * 1000)
        return date.toLocaleDateString("en-US")
    }

    return (
        <div className="dashboard-order">
            <Helmet>
                <title>Mes commandes | Ecowatt</title>
            </Helmet>

            <div className="title">
                <h2>Historique de mes commandes</h2>
                <span className="title-leaf title-leaf-gray">
                    <img src={require("./../../assets/svg/leaf.png")} alt="" className="icon-width bg-gray" />
                </span>
            </div>

            {/* {(ordersLoading || ordersFetching) ? */}
            {(loading) ?
                <div className="min-vh-100 px-4 py-2 d-flex align-items-center justify-content-center">
                    <InfinitySpin
                        type="ThreeDots"
                        color="#2A3466"
                        height={220}
                        width={220}
                        // visible={ordersLoading || ordersFetching}
                        visible={loading}
                    />
                </div>
                :
                (
                    (!listOrders || !listOrders.length) ?
                        <h2 className="text-center my-5">Aucune commande trouvée</h2>
                :
                    <>
                        <div className="filter">
                            <div className="form-group">
                                <label>Code</label>
                                <input type="text" onChange={(event) => setCode(event.target.value)} className="form-control" value={code} />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select className="form-control" onChange={(event) => setStatus(event.target.value)} value={status}>
                                    <option></option>
                                    <option value={`1`}>Validée</option>
                                    <option value={`2`}>En cours</option>
                                    <option value={`3`}>Livrée</option>
                                    <option value={`0`}>Initiée</option>
                                    <option value={`-1`}>Annulée</option>
                                </select>
                            </div>
                        </div>
                        {(!orders || !orders.length) ?
                            <h2 className="text-center my-5">Vous n'avez pas encore passer aucune commande.</h2>
                            :
                            <div className="order-contain">
                                {orders.map((item, key) => 
                                    <div className="order-box dashboard-bg-box" key={`commande-${key}`}>
                                        <div className="order-container" onClick={() => showOrder(item?.id)}>
                                            <div className="order-detail">
                                                <h4>
                                                    <div className="order-icon">
                                                        <i data-feather="box"></i>
                                                    </div>
                                                    &nbsp;
                                                    Ref 
                                                    <span>{ item?.ref }</span>
                                                </h4>
                                            </div>
                                            <div className="order-detail">
                                                <h4>Statut <span>{ OrderStatus(item?.status) }</span></h4>
                                            </div>
                                            <div className="order-detail">
                                                {/* <h4>La date <span>{ item?.created_at }</span></h4> */}
                                                <h4>La date <span>{ OrderDate(item?.date_creation) }</span></h4>
                                            </div>
                                        </div>
                                        <div className={`order-items ${selectedOrder === item?.id && 'show'}`}>
                                            {(item?.lines && item?.lines.length) && 
                                                (item?.lines.map((productItem, productKey) => 
                                                    <div className="product-order-detail" key={`commande-${key}-${productKey}`}>
                                                        {/* <Link to={`/product/${productItem?.product?.slug}`} className="order-image">
                                                            <img src={productItem?.image} className="blur-up lazyload" alt={productItem?.product?.title} />
                                                        </Link> */}
                                                        <div className="order-wrap">
                                                            {/* <Link to={`/product/${productItem?.product?.slug}`}> */}
                                                                {/* <h3>{productItem?.product?.title}</h3> */}
                                                                <h3>{productItem?.product_label}</h3>
                                                            {/* </Link> */}
                                                            <ul className="product-size mt-2">
                                                                <li>
                                                                    <div className="size-box">
                                                                        <h6 className="text-content">Prix : </h6>
                                                                        {/* <h5>{productItem?.price} DH TTC</h5> */}
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
                                            {(item?.new_tracking && item?.new_status) ? 
                                                <div className="col-12 order-detail mt-4">
                                                    <div className="row g-sm-4 g-3">
                                                        <div className="col-6">
                                                            <div className="order-details-contain">
                                                                <div className="order-tracking-icon">
                                                                    <Package className="text-content" />
                                                                </div>
                                                                <div className="order-details-name">
                                                                    <h5 className="text-content">Code de suivi</h5>
                                                                    <h2 className="theme-color">{item?.new_tracking}</h2>
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
                                                                    <img src={require('./../../assets/images/logo-ctm.png')} className="img-fluid blur-up lazyload" alt="CTM"/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-12 overflow-hidden">
                                                            <ol className="progtrckr">
                                                                <li className={(currentStatus(item?.new_status) >= 1 && currentStatus(item?.new_status) < 5) ? "progtrckr-done" : "progtrckr-todo"}>
                                                                    <h5>En cours de préparation</h5>
                                                                    {/* <h6>05:43 AM</h6> */}
                                                                </li>
                                                                <li className={(currentStatus(item?.new_status) >= 2 && currentStatus(item?.new_status) < 5) ? "progtrckr-done" : "progtrckr-todo"}>
                                                                    <h5>Colis collecté et Expédié</h5>
                                                                    {/* <h6>01:21 PM</h6> */}
                                                                </li>
                                                                <li className={(currentStatus(item?.new_status) >= 3 && currentStatus(item?.new_status) < 5) ? "progtrckr-done" : "progtrckr-todo"}>
                                                                    <h5>En cours de livraison</h5>
                                                                    {/* <h6>Processing</h6> */}
                                                                </li>
                                                                <li className={(currentStatus(item?.new_status) === 4) ? "progtrckr-done" : "progtrckr-todo"}>
                                                                    <h5>Livré</h5>
                                                                    {/* <h6>Processing</h6> */}
                                                                </li>
                                                                {(currentStatus(item?.new_status) === 5) ? 
                                                                    <li className="progtrckr-done">
                                                                        <h5>Echec de livraison</h5>
                                                                        {/* <h6>Pending</h6> */}
                                                                    </li>
                                                                    : null    
                                                                }
                                                                {(currentStatus(item?.new_status) === 6) ? 
                                                                    <li className="progtrckr-done">
                                                                        <h5>Retourné</h5>
                                                                        {/* <h6>Pending</h6> */}
                                                                    </li>
                                                                    : null    
                                                                }
                                                                {(currentStatus(item?.new_status) === 7) ? 
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
                                )}
                                {(maxPages > 1) && 
                                    <Pagination
                                        className="pagination-bar"
                                        currentPage={page}
                                        totalCount={maxPages}
                                        pageSize={PageSize}
                                        onPageChange={page => handlePage(page)}
                                    />
                                }
                            </div>
                        }
                    </>
                )
            }
        </div>
    );
}