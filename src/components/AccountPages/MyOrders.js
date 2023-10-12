import React, { useContext } from "react";
import { AuthProvider } from "../../contexts/AuthContext";
import { Helmet } from "react-helmet";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import OrderStatus from "../OrderStatus";

export default function MyOrders() {
    const { listOrders, ordersLoading, ordersFetching }  = useContext(AuthProvider)

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

            <div className="order-contain">
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
                        listOrders.map((item, key) => 
                            <div className="order-box dashboard-bg-box" key={`commande-${key}`}>
                                <div className="order-container">
                                    <div className="order-icon">
                                        <i data-feather="box"></i>
                                    </div>

                                    <div className="order-detail">
                                        <h4>Statut <span>{ OrderStatus(item?.status) }</span></h4>
                                        {/* <h6 className="text-content">Gouda parmesan caerphilly mozzarella cottage cheese cauliflower cheese taleggio gouda.</h6> */}
                                    </div>
                                </div>
                                {(item?.items && item?.items.length) && 
                                    (item?.items.map((productItem, productKey) => 
                                        <div className="product-order-detail" key={`commande-${key}-${productKey}`}>
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
                        )
                    )
                }
            </div>
        </div>
    );
}