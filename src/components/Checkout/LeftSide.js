import React, { useContext, useEffect, useState } from 'react';
import { Map, Target, User } from 'react-feather';
import { AuthProvider } from '../../contexts/AuthContext';
import { InfinitySpin } from 'react-loader-spinner';
import ListAddresses from './ListAddresses';
import AddCustomerInfos from './AddCustomerInfos';

export default function LeftSide({ deliveryAddress, billingAddress, saveData }) {
    const { isLoggedIn, listAddresses, addressesLoading, addressesFetching }  = useContext(AuthProvider)
    const [billingAddresses, setBillingAddresses] = useState([])
    const [deliveryAddresses, setDeliveryAddresses] = useState([])

    useEffect(() => {
        if(!addressesFetching && !addressesLoading && listAddresses && listAddresses.length){
            let addressDelivery = listAddresses.filter(function (el) {return el.type === 'delivery'});
            if(addressDelivery && addressDelivery.length) setDeliveryAddresses(addressDelivery)

            let addressBilling = listAddresses.filter(function (el) {return el.type === 'billing'});
            if(addressBilling && addressBilling.length) setBillingAddresses(addressBilling)
        }
    }, [addressesLoading, addressesFetching])


    const saveCustomer = (data) => {
        saveData('customer', data)
    }
    const saveDeliveryAddress = (data) => {
        saveData('delivery', data)
    }
    const saveBillingAddress = (data) => {
        saveData('billing', data)
    }
    
    return (
        <div className="col-lg-8">
            <div className="left-sidebar-checkout">
                <div className="checkout-detail-box">
                    <ul>
                        {(!isLoggedIn) && <li>
                                <div className="checkout-icon">
                                    <User />
                                </div>
                                <AddCustomerInfos save={saveCustomer} />
                            </li>
                        }
                        <li>
                            <div className="checkout-icon">
                                <Map />
                            </div>

                            {(addressesLoading || addressesFetching) ?
                                <div className="checkout-box">
                                    <div className="min-vh-100 px-4 py-2 d-flex align-items-center justify-content-center">
                                        <InfinitySpin
                                            type="ThreeDots"
                                            color="#2A3466"
                                            height={220}
                                            width={220}
                                            visible={addressesLoading || addressesFetching}
                                        />
                                    </div>
                                </div>
                                :
                                <>
                                    <ListAddresses current={deliveryAddress} type="delivery" addresses={deliveryAddresses} save={saveDeliveryAddress} isAuthenticated={isLoggedIn} />
                                    <ListAddresses currentDeliveryAddress={deliveryAddress} current={billingAddress} type="billing" addresses={billingAddresses} save={saveBillingAddress} isAuthenticated={isLoggedIn} useAs={(deliveryAddresses && deliveryAddresses.length)} />
                                </>
                            }
                        </li>

                        <li>
                            <div className="checkout-icon">
                                <Target />
                            </div>
                            <div className="checkout-box">
                                <div className="checkout-title">
                                    <h4>Modalité de paiement</h4>
                                </div>

                                <div className="checkout-detail payment-details">
                                    <div className="bg-white w-100 d-flex align-items-center justify-content-between p-4">
                                        <div className='d-flex align-items-center'>
                                            <input
                                                className="form-check-input my-0" 
                                                type="radio"
                                                name="flexRadioDefault" 
                                                id="credit" 
                                                checked
                                                readOnly
                                            />
                                            <span className='d-block ml-5'>CMI</span>
                                        </div>
                                        <img alt='cmi payment' src={require('./../../assets/images/cmi.png')} />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}