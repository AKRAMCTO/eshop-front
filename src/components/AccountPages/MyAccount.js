import React from "react";

export default function MyAccount({ userData, SelectModelForm }) {

    return (
        <div className="dashboard-home">
            <div className="title">
                <h2>Mon compte</h2>
                <span className="title-leaf">
                    <img src={require("./../../assets/svg/leaf.svg")} alt="" className="icon-width bg-gray" />
                </span>
            </div>

            <div className="dashboard-user-name">
                <h6 className="text-content">Hello, <b className="text-title">{userData?.full_name}</b></h6>
                <p className="text-content">From your Mon compte Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or Modifier information.</p>
            </div>

            <div className="total-box">
                <div className="row g-sm-4 g-3">
                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="totle-contain">
                            <img src={require("./../../assets/images/order.svg")} className="img-1 blur-up lazyload" alt="" />
                            <img src={require("./../../assets/images/order.svg")} className="blur-up lazyload" alt="" />
                            <div className="totle-detail">
                                <h5>Total Order</h5>
                                <h3>3658</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="totle-contain">
                            <img src={require("../../assets/images/pending.svg")} className="img-1 blur-up lazyload" alt="" />
                            <img src={require("../../assets/images/pending.svg")} className="blur-up lazyload" alt="" />
                            <div className="totle-detail">
                                <h5>Total Pending Order</h5>
                                <h3>254</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                        <div className="totle-contain">
                            <img src={require("../../assets/images/wishlist.svg")} className="img-1 blur-up lazyload" alt="" />
                            <img src={require("../../assets/images/wishlist.svg")} className="blur-up lazyload" alt="" />
                            <div className="totle-detail">
                                <h5>Total Wishlist</h5>
                                <h3>32158</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

                <div className="col-xxl-6">
                    <div className="dashboard-contant-title">
                        <h4>Newsletters <a>Modifier</a></h4>
                    </div>
                    <div className="dashboard-detail">
                        <h6 className="text-content">You are currently not subscribed to any newsletter</h6>
                    </div>
                </div>

                <div className="col-12">
                    <div className="dashboard-contant-title">
                        <h4>Address Book <a>Modifier</a></h4>
                    </div>

                    <div className="row g-4">
                        <div className="col-xxl-6">
                            <div className="dashboard-detail">
                                <h6 className="text-content">Default Billing Address</h6>
                                <h6 className="text-content">You have not set a default billing address.</h6>
                                <a>Modifier Address</a>
                            </div>
                        </div>

                        <div className="col-xxl-6">
                            <div className="dashboard-detail">
                                <h6 className="text-content">Default Shipping Address</h6>
                                <h6 className="text-content">You have not set a default shipping address.</h6>
                                <a>Modifier Address</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}