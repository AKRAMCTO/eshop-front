import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';

import Breadcrumb from '../components/Breadcrumb';
import Layout from '../components/Layout';
import RightSide from '../components/Checkout/RightSide';
import LeftSide from '../components/Checkout/LeftSide';
import { AuthProvider } from '../contexts/AuthContext';
import { CartAndWishlistProvider } from '../contexts/CartAndWishlistContext';
import { AuthCheckout, GuestCheckout } from '../queries/queries';

export default function Checkout() {
  const { authenticationLoading, authenticationFetching, isLoggedIn, listAddresses } = useContext(AuthProvider);
  const { cartItems, getCartItemsGuestLoading, clearAfterCheckout } = useContext(CartAndWishlistProvider)
  const [ loading, setLoading ] = useState(false)
  const [ orderSuccess, setOrderSuccess ] = useState(null)
  const [ orderError, setOrderError ] = useState(null)
  const [ orderID, setOrderID ] = useState(null)
  
  const [ paymentMethod, setPaymentMethod ] = useState('cmi')
  const [ customer, setCustomer ] = useState(null)
  const [ deliveryAddress, setDeliveryAddress ] = useState(null)
  const [ billingAddress, setBillingAddress ] = useState(null)

  useEffect(() => {
    if(orderID){
      const timer = setTimeout(() => {
        if(orderID) {
          window.location.href = 'http://127.0.0.1:8000/complete-payment/' + orderID
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [orderID])

  const saveData = async (type, data) => {
    switch(type){
      case 'customer':
        setCustomer(data)
      break;
      case 'delivery':
        setDeliveryAddress(data)
      break;
      case 'billing':
        setBillingAddress(data)
      break;
      default:
        console.log('Someting went wrong on save data')
    }

    if(orderSuccess) setOrderSuccess(null)
    if(orderError) setOrderError(null)
    if(loading) setLoading(false)
  }

  const handleSubmitOrder = async () => {
    if(orderSuccess) setOrderSuccess(null)
    if(orderError) setOrderError(null)

    setLoading(true)
    if(isLoggedIn){
      if(paymentMethod !== "cmi" || !deliveryAddress || !billingAddress){
        setOrderError('Veuillez suivre toutes les étapes avant de soumettre')
        setLoading(false)
        return false
      }
      try{
        const res = await AuthCheckout({
          payment_method: paymentMethod,
          delivery_address: deliveryAddress,
          billing_address: billingAddress,

        });
        if (res.status && res?.order_id) {
          // setLoading(false)
          setOrderSuccess('Commande enregistrée avec succès')
          setOrderID(res?.order_id)
          clearAfterCheckout()
        } else {
          setLoading(false)
          setOrderError('La commande a échoué')
        }
      } catch (error) {
        setLoading(false)
        setOrderError(error?.response?.data?.message);
      }
    }else{
      if(paymentMethod !== "cmi" || !deliveryAddress || !billingAddress || !customer){
        setOrderError('Veuillez suivre toutes les étapes avant de soumettre')
        setLoading(false)
        return false
      }
      try{
        const res = await GuestCheckout({
          payment_method: paymentMethod,
          delivery_address: deliveryAddress,
          billing_address: billingAddress,
          customer: customer
        });
        if (res.status && res?.order_id) {
          // setLoading(false)
          setOrderSuccess('Commande enregistrée avec succès')
          setOrderID(res?.order_id)
          clearAfterCheckout()
        } else {
          setLoading(false)
          setOrderError('La commande a échoué')
        }
      } catch (error) {
        setLoading(false)
        setOrderError(error?.response?.data?.message);
      }
    }
  }

  if (getCartItemsGuestLoading || authenticationLoading || authenticationFetching) {
    return <div />
  }
  
  if(!getCartItemsGuestLoading && (!cartItems || cartItems.length < 1)) {
    return <Redirect to='/cart' />
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Commander | Ecowatt`}</title>
      </Helmet>

      <Breadcrumb title={`Commander`} />

      <section className="checkout-section-2 section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <LeftSide 
              deliveryAddress={deliveryAddress} 
              billingAddress={billingAddress} 
              saveData={saveData} 
            />
            <RightSide 
              orderSuccess={orderSuccess} 
              orderError={orderError} 
              loading={loading} 
              handleSubmitting={handleSubmitOrder} 
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
