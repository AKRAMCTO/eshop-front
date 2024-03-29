import React, { useContext, useEffect, useState } from 'react';
import { Map, Target, User } from 'react-feather';
import { AuthProvider } from '../../contexts/AuthContext';
import { InfinitySpin } from 'react-loader-spinner';
import ListAddresses from './ListAddresses';
import AddCustomerInfos from './AddCustomerInfos';

export default function LeftSide({ loading, deliveryAddress, billingAddress, deliveryMethod, saveData, paymentMethod }) {
    const { isLoggedIn, userData, listAddresses, addressesLoading, addressesFetching }  = useContext(AuthProvider)
    const [billingAddresses, setBillingAddresses] = useState([])
    const [deliveryAddresses, setDeliveryAddresses] = useState([])
    const [defaultChecked, setDefaultChecked] = useState(true)

    useEffect(() => {
        if(!addressesFetching && !addressesLoading && listAddresses && listAddresses.length){
            let addressDelivery = listAddresses.filter(function (el) {return el.type === 'delivery'});
            if(addressDelivery && addressDelivery.length) setDeliveryAddresses(addressDelivery)

            let addressBilling = listAddresses.filter(function (el) {return el.type === 'billing'});
            if(addressBilling && addressBilling.length) setBillingAddresses(addressBilling)
        }
    }, [addressesLoading, addressesFetching])

    const savePayment = (data) => {
        if(data !== paymentMethod){
            saveData('payment', data)
        }
    }
    const saveDelivery = (data) => {
        if(data !== deliveryMethod){
            saveData('deliveryMethod', data)
        }
    }
    const saveCustomer = (data) => {
        saveData('customer', data)
    }
    const saveDeliveryAddress = (data) => {
        saveData('delivery', data)
        if(defaultChecked){
            saveBillingAddress(data)
        }
    }
    const saveBillingAddress = (data) => {
        saveData('billing', data)
    }
    const checkTheSameAddress = (event) => {
        setDefaultChecked(event)
        if(event) {
            saveBillingAddress(deliveryAddress)
        }else{
            saveBillingAddress(null)
        }
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
                                    <ListAddresses loading={loading} current={deliveryAddress} type="delivery" addresses={deliveryAddresses} save={saveDeliveryAddress} isAuthenticated={isLoggedIn} />
                                    {(isLoggedIn) ? <ListAddresses loading={loading} defaultChecked={defaultChecked} checkTheSameAddress={checkTheSameAddress} currentDeliveryAddress={deliveryAddress} current={billingAddress} type="billing" addresses={billingAddresses} save={saveBillingAddress} isAuthenticated={isLoggedIn} useAs={true} /> : <div />}
                                </>
                            }
                        </li>

                        <li>
                            <div className="checkout-icon">
                                <Target />
                            </div>
                            <div className="checkout-box">
                                <div className={`checkout-title ${(deliveryAddress && billingAddress) ? '' : 'm-0'} `}>
                                    <h4>La livraison</h4>
                                </div>
                                
                                {(deliveryAddress && billingAddress) ? 
                                    <>
                                        <div className="checkout-detail payment-details mb-3" onClick={(!loading) ? () => saveDelivery('ecowatt') : null}>
                                            <div className="bg-white w-100 d-flex align-items-center justify-content-between p-4">
                                                <div className='d-flex align-items-center'>
                                                    <input
                                                        className="form-check-input my-0" 
                                                        type="radio"
                                                        name="deliveryMethod" 
                                                        id="credit" 
                                                        checked={deliveryMethod === 'ecowatt'}
                                                        readOnly
                                                    />
                                                    <span className='d-block ml-5'>Ecowatt Logistique</span>
                                                </div>
                                                <img alt='Ecowatt' src={require('./../../assets/images/ecowatt-log.jpeg')} />
                                            </div>
                                        </div>
                                        <div className="checkout-detail payment-details mb-3" onClick={(!loading) ? () => saveDelivery('ctm') : null}>
                                            <div className="bg-white w-100 d-flex align-items-center justify-content-between p-4">
                                                <div className='d-flex align-items-center'>
                                                    <input
                                                        className="form-check-input my-0" 
                                                        type="radio"
                                                        name="deliveryMethod" 
                                                        id="credit" 
                                                        checked={deliveryMethod === 'ctm'}
                                                        readOnly
                                                    />
                                                    <span className='d-block ml-5'>Livraison CTM</span>
                                                </div>
                                                <img alt='CTM' src={require('./../../assets/images/ctm.png')} />
                                            </div>
                                        </div>
                                        <div className="checkout-detail payment-details" onClick={(!loading) ? () => saveDelivery('in_place') : null}>
                                            <div className="bg-white w-100 d-flex align-items-center justify-content-between p-4">
                                                <div className='d-flex align-items-center'>
                                                    <input
                                                        className="form-check-input my-0" 
                                                        type="radio"
                                                        name="deliveryMethod" 
                                                        id="credit" 
                                                        checked={deliveryMethod === 'in_place'}
                                                        readOnly
                                                    />
                                                    <span className='d-block ml-5'>In-Store Collection</span>
                                                </div>
                                                <img alt='Surplace' src={require('./../../assets/images/in-place.png')} />
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <div />
                                }

                            </div>
                        </li>

                        <li>
                            <div className="checkout-icon">
                                <Target />
                            </div>
                            <div className="checkout-box">
                                <div className={`checkout-title ${(deliveryAddress && billingAddress && deliveryMethod) ? '' : 'm-0'} `}>
                                    <h4>Modalité de paiement</h4>
                                </div>

                                {(deliveryAddress && billingAddress && deliveryMethod) ? 
                                    <>
                                        {(isLoggedIn && userData && userData?.type === 'seller') && (
                                            <>
                                                <div className="checkout-detail payment-details mb-3" onClick={(!loading) ? () => savePayment('cheque') : null}>
                                                    <div className="bg-white w-100 d-flex align-items-center justify-content-between p-4">
                                                        <div className='d-flex align-items-center'>
                                                            <input
                                                                className="form-check-input my-0" 
                                                                type="radio"
                                                                name="paymentMethod" 
                                                                id="cheque" 
                                                                checked={paymentMethod === 'cheque'}
                                                                readOnly
                                                            />
                                                            <span className='d-block ml-5'>Cheque</span>
                                                        </div>
                                                        <img alt='cmi payment' src={require('./../../assets/images/cheque.png')} />
                                                    </div>
                                                </div>
                                                <div className="checkout-detail payment-details mb-3" onClick={(!loading) ? () => savePayment('effet') : null}>
                                                    <div className="bg-white w-100 d-flex align-items-center justify-content-between p-4">
                                                        <div className='d-flex align-items-center'>
                                                            <input
                                                                className="form-check-input my-0" 
                                                                type="radio"
                                                                name="paymentMethod" 
                                                                id="effet" 
                                                                checked={paymentMethod === 'effet'}
                                                                readOnly
                                                            />
                                                            <span className='d-block ml-5'>Effet</span>
                                                        </div>
                                                        <img alt='cmi payment' src={require('./../../assets/images/effet.png')} />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        <div className="checkout-detail payment-details" onClick={(!loading) ? () => savePayment('cmi') : null}>
                                            <div className="bg-white w-100 d-flex align-items-center justify-content-between p-4">
                                                <div className='d-flex align-items-center'>
                                                    <input
                                                        className="form-check-input my-0" 
                                                        type="radio"
                                                        name="paymentMethod" 
                                                        id="credit" 
                                                        checked={paymentMethod === 'cmi'}
                                                        readOnly
                                                    />
                                                    <span className='d-block ml-5'>CMI</span>
                                                </div>
                                                <img alt='cmi payment' src={require('./../../assets/images/cmi.png')} />
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <div />
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}