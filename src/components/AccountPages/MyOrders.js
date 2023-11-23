import React, { useContext, useState } from "react";
import { AuthProvider } from "../../contexts/AuthContext";
import { Helmet } from "react-helmet";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import OrderStatus from "../OrderStatus";

export default function MyOrders() {
    const { listOrders, ordersLoading, ordersFetching }  = useContext(AuthProvider)
    const [selectedOrder, setSelectedOrder] = useState(null)

    const showOrder = (id) => {
        if(id === selectedOrder) setSelectedOrder(null)
        else setSelectedOrder(id)
    }
    const OrderDate = (date_creation) => {
        let date = new Date(date_creation)
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

            {(ordersLoading || ordersFetching) ?
                <div className="min-vh-100 px-4 py-2 d-flex align-items-center justify-content-center">
                    <InfinitySpin
                        type="ThreeDots"
                        color="#2A3466"
                        height={220}
                        width={220}
                        visible={ordersLoading || ordersFetching}
                    />
                </div>
                :
                (
                    (!listOrders || !listOrders.length) ?
                        <h2 className="text-center my-5">Aucune commande trouvée</h2>
                :
                    <div className="order-contain">
                        {listOrders.map((item, key) => 
                            <div className="order-box dashboard-bg-box" key={`commande-${key}`}>
                                <div className="order-container" onClick={() => showOrder(item?.id)}>
                                    <div className="order-detail">
                                        <h4>
                                            <div className="order-icon">
                                                <i data-feather="box"></i>
                                            </div>
                                            &nbsp;
                                            Ref 
                                            <span>{ item?.id }</span>
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
                                                                <h5>{productItem?.total_ttc} DH TTC</h5>
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
                        )}
                    </div>
                )
            }
        </div>
    );
}