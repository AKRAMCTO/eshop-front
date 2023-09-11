import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";

import Layout from "./../components/Layout";
import Breadcrumb from "./../components/Breadcrumb";
import LayoutAccount from "./../components/LayoutAccount";
import { AuthProvider } from "./../contexts/AuthContext";

import MyAccount from './../components/AccountPages/MyAccount'
import MyOrders  from './../components/AccountPages/MyOrders'
import MyWishlist  from './../components/AccountPages/MyWishlist'
import MyAddresses  from './../components/AccountPages/MyAddresses'
import MyProfile  from './../components/AccountPages/MyProfile'
// import MyPrivacy  from './../components/AccountPages/MyPrivacy'

import ModelUpdate from "./../components/ModelUpdate";
import Password from "../components/AccountPopups/Password";
import Profile from "../components/AccountPopups/Profile";
import AddAddress from "../components/AccountPopups/AddAddress";
import EditAddress from "../components/AccountPopups/EditAddress";

export default function MyAccountContainer() {
    const { userData } = useContext(AuthProvider);
    const [ type, setType ] = useState('account')
    const [ modelType, setModelType ] = useState(null)
    const [ modelTitle, setModelTitle ] = useState(null)
    const [ modelStatus, setModelStatus ] = useState(false)
    
    const [ currentAddressEdit, setCurrentAddressEdit ] = useState(null)
    const selectCurrentAddress = (address) => {
        setCurrentAddressEdit(address)
        setModelType('editAddress')
        setModelStatus(true)
    }
  
    const SelectModelForm = (formType) => {
        setModelType(formType)
        setModelStatus(true)
    }
    const SelectModelTitle = (title) => {
        setModelTitle(title)
    }
    const modelClose = (status) => {
        setModelStatus(status)
        setModelTitle(null)
    }
    const ChooseType = (newType) => {
      setType(newType)
    }

    return (
        <Layout>
            <Helmet>
                <title>{`Mon compte | Ecowatt`}</title>
            </Helmet>
            
            <Breadcrumb title={`Tableau de bord utilisateur`} />

            <LayoutAccount ChooseType={ChooseType} type={type}>
                {(type === 'account') && <MyAccount userData={userData} SelectModelForm={SelectModelForm} />}
                {(type === 'orders') && <MyOrders />}
                {(type === 'wishlist') && <MyWishlist />}
                {(type === 'addresses') && <MyAddresses selectCurrentAddress={selectCurrentAddress} SelectModelForm={SelectModelForm} />}
                {(type === 'profile') && <MyProfile userData={userData} SelectModelForm={SelectModelForm} />}
                {/* {(type === 'privacy') && <MyPrivacy />} */}
            </LayoutAccount>

            <ModelUpdate title={modelTitle} modelStatus={modelStatus} modelClose={modelClose}>
                {(modelType === 'password') && <Password SelectModelTitle={SelectModelTitle} modelClose={modelClose} />}
                {(modelType === 'profile') && <Profile SelectModelTitle={SelectModelTitle} modelClose={modelClose} />}
                {(modelType === 'addAddress') && <AddAddress SelectModelTitle={SelectModelTitle} modelClose={modelClose} />}
                {(modelType === 'editAddress') && <EditAddress address={currentAddressEdit} SelectModelTitle={SelectModelTitle} modelClose={modelClose} />}
            </ModelUpdate>
        </Layout>
    );
}