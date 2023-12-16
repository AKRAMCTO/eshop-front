import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, useHistory, Link} from 'react-router-dom';

import Breadcrumb from '../components/Breadcrumb';
import Layout from '../components/Layout';
import RightSide from '../components/Checkout/RightSide';
import LeftSide from '../components/Checkout/LeftSide';
import { AuthProvider } from '../contexts/AuthContext';
import { CartAndWishlistProvider } from '../contexts/CartAndWishlistContext';
import { AuthCheckout, GuestCheckout, getCalculatedDeliveryAuth, getCalculatedDeliveryGuest } from '../queries/queries';
import { AlertTriangle } from 'react-feather';

export default function Checkout() {
  const history = useHistory();
  const { authenticationLoading, authenticationFetching, userData, isLoggedIn } = useContext(AuthProvider);
  const { cartItems, cartCalculation, clearGuestCartItem, getCartItemsGuestLoading } = useContext(CartAndWishlistProvider)
  const [ loading, setLoading ] = useState(false)
  const [ orderSuccess, setOrderSuccess ] = useState(null)
  const [ orderError, setOrderError ] = useState(null)
  const [ orderID, setOrderID ] = useState(null)
  const [ redirect, setRedirect ] = useState(null)
  
  const [ paymentMethod, setPaymentMethod ] = useState(null)
  const [ deliveryMethod, setDeliveryMethod ] = useState(null)
  const [ customer, setCustomer ] = useState(null)
  const [ deliveryAddress, setDeliveryAddress ] = useState(null)
  const [ billingAddress, setBillingAddress ] = useState(null)
  const [ isConfirmed, setIsConfirmed ] = useState(false)
  const [ wrapcartCalculation, setWrapCartCalculation ] = useState(cartCalculation)

  useEffect(() => {
    if(orderID){
      const timer = setTimeout(() => {
        if(orderID && redirect){
          if(!isLoggedIn) {
            clearGuestCartItem()
          }
          // window.location.href = 'http://127.0.0.1:8000/complete-payment/' + orderID
          window.location.href = 'https://dev.ecowatt.ma/complete-payment/' + orderID
        }else{
          history.push({    // no need
            pathname: "/order-success",
            state: { paid: paymentMethod }
          })
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [redirect])

  useEffect(() => {
    if(isLoggedIn){
      setIsConfirmed((deliveryAddress && billingAddress && deliveryMethod && paymentMethod) ? true : false)
    }else{
      setIsConfirmed((deliveryAddress && customer && deliveryMethod && paymentMethod) ? true : false)
    }
  }, [deliveryAddress, billingAddress, deliveryMethod, customer, paymentMethod])

  useEffect(() => {
    console.log(
      'deliveryAddress => ' ,deliveryAddress,
      'deliveryMethod => ', deliveryMethod,
    )
    if(deliveryAddress && deliveryMethod && deliveryMethod !== 'in_place'){
      if(isLoggedIn){
        getCalculatedDeliveryAuth(deliveryAddress, deliveryMethod)
                                .then(function(response) {
                                  setWrapCartCalculation({
                                    subtotal: response?.subtotal ?? 0,
                                    discount: response?.discount ?? 0,
                                    shipping_cost: response?.shipping_cost ?? 0,
                                    coupon_cost: response?.coupon_cost ?? 0,
                                    total: response?.total ?? 0
                                  })
                                })
      }else{
        getCalculatedDeliveryGuest(deliveryAddress?.city, deliveryMethod)
                                .then(function(response) {
                                  setWrapCartCalculation({
                                    subtotal: response?.subtotal ?? 0,
                                    discount: response?.discount ?? 0,
                                    shipping_cost: response?.shipping_cost ?? 0,
                                    coupon_cost: response?.coupon_cost ?? 0,
                                    total: response?.total ?? 0
                                  })
                                })
      }
    }else if(deliveryMethod === 'in_place'){
      setWrapCartCalculation(cartCalculation)
    }
  }, [deliveryAddress, deliveryMethod])

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
      case 'deliveryMethod':
        setDeliveryMethod(data)
      break;
      case 'payment':
        setPaymentMethod(data)
      break;
      default:
        // console.log('Someting went wrong on save data')
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
      if(!paymentMethod || !deliveryAddress || !billingAddress || !deliveryMethod){
        setOrderError('Veuillez suivre toutes les étapes avant de soumettre')
        setLoading(false)
        return false
      }
      try{
        const res = await AuthCheckout({
          payment_method: paymentMethod,
          delivery_address: deliveryAddress,
          billing_address: billingAddress,
          delivery_method: deliveryMethod,
        });
        if (res.status && res?.order_id) {
          // setLoading(false)
          setRedirect(res?.continue_payment)
          setOrderSuccess('Commande enregistrée avec succès')
          setOrderID(res?.order_id)
        } else {
          setLoading(false)
          setOrderError('La commande a échoué')
        }
      } catch (error) {
        setLoading(false)
        setOrderError(error?.response?.data?.message);
      }
    }else{
      // || !billingAddress
      if(!paymentMethod || !deliveryAddress || !customer || !deliveryMethod){
        setOrderError('Veuillez suivre toutes les étapes avant de soumettre')
        setLoading(false)
        return false
      }
      try{
        const res = await GuestCheckout({
          payment_method: paymentMethod,
          delivery_address: deliveryAddress,
          delivery_method: deliveryMethod,
          customer: customer
        });
        if (res.status && res?.order_id) {
          // setLoading(false)
          setRedirect(res?.continue_payment)
          setOrderSuccess('Commande enregistrée avec succès')
          setOrderID(res?.order_id)
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
          {(isLoggedIn && userData && userData?.type === 'seller' && userData?.status === 1) ?
            <div className='text-center my-5 py-3 px-0 row justify-content-center'>
              <div className='col-12 col-md-7'>
                <AlertTriangle className='text-warning mb-4 text-lg' style={{ width: 100, height: 100 }} />
                <h3 className='fs-3 mb-1'>Votre Compte n'est pas encore validé.</h3>
                <h3 className='fs-3 mb-4'>Vous ne pouvez pas encore faire des commandes.</h3>
                <Link className="btn btn-animation proceed-btn d-inline-block fw-bold" to={`/`}><i className="fa-solid fa-arrow-left-long"></i>&nbsp; Retour a l'accueil</Link>
              </div>
            </div>
          :
            <div className="row g-sm-4 g-3">
              <LeftSide 
                deliveryAddress={deliveryAddress} 
                billingAddress={billingAddress} 
                saveData={saveData} 
                paymentMethod={paymentMethod}
                deliveryMethod={deliveryMethod}
                loading={loading}
              />
              <RightSide 
                orderSuccess={orderSuccess} 
                orderError={orderError} 
                loading={loading} 
                handleSubmitting={handleSubmitOrder} 
                isConfirmed={isConfirmed} 
                cartCalculation={wrapcartCalculation}
              />
            </div>
           }
        </div>
      </section>
    </Layout>
  )
}
