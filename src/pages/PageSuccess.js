import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, Redirect, Link } from 'react-router-dom';
import { ThumbsUp } from 'react-feather';

import Breadcrumb from '../components/Breadcrumb';
import Layout from '../components/Layout';
import { AuthProvider } from '../contexts/AuthContext';
import { CartAndWishlistProvider } from '../contexts/CartAndWishlistContext';

export default function PageSuccess() {
  const location = useLocation()
  const {paid} = location.state ?? {}

  const { isLoggedIn, ordersLoading, ordersFetching, userData } = useContext(AuthProvider);
  const { clearAfterCheckout } = useContext(CartAndWishlistProvider)
  // const location = useLocation()
  // const queryParameters = new URLSearchParams(location.search)
  // const invoice = queryParameters.get("invoice") ?? null;

  useEffect(() => {
    clearAfterCheckout()
  }, [])

  if(ordersLoading || ordersFetching){
    return <div />
  }

  // if(!invoice){
  //   return <Redirect to='/' />
  // }

  return (
    <Layout>
      <Helmet>
        <title>{`Commander | Ecowatt`}</title>
      </Helmet>

      <Breadcrumb title={`Commander`} />

      <div className='height: calc(30px + 20 * (100vw - 320px) / 1600)'></div>
      
      <section className="breadscrumb-section pt-0 mt-4 mb-5">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain breadscrumb-order">
                <div className="order-box">
                  <div className="order-image">
                    <div className="checkmark">
                      <ThumbsUp />
                    </div>
                  </div>

                  <div className="order-contain mt-3">
                    {(isLoggedIn && userData && (userData?.type === 'professional' || (userData?.type === 'seller' && !paid))) ?
                      <>
                        <h3 className="theme-color">Succès de la commande</h3>
                        <h5 className="text-content">Le paiement est réussi et votre commande est en route.</h5>
                        <h5 className="text-content mb-2">Si vous souhaitez une facture, Vous pouvez la télécharger en cliquant sur le button ci-dessous.</h5>
                        <Link to={`/account/orders`} className="quick-access d-inline-block mt-3">Accédez à mes commandes</Link>
                      </>
                      :
                      null
                    }

                    {(isLoggedIn && userData && userData?.type === 'seller' && ["cheque", "effet"].includes(paid)) ?
                      <>
                        <h3 className="theme-color">Commande Initié</h3>
                        <h5 className="text-content mb-2">Votre commande a été initié et elle est en cours de traitement. </h5>
                        <h5 className="text-content mb-2">Notre équipe dévouée travaille activement pour préparer et expédier votre commande dans les plus brefs délais.</h5>
                        <h5 className="text-content mb-2">Si vous souhaitez une facture, vous pouvez la demander à l'équipe support via l'email suivant : support@ecowatt.com</h5>
                        <Link to={`/account/orders`} className="quick-access d-inline-block mt-3">Accédez à mes commandes</Link>
                      </>
                      :
                      null
                    }

                    {((isLoggedIn && userData && userData?.type === 'individual') || !isLoggedIn) ?
                      <>
                        <h3 className="theme-color">Succès de la commande</h3>
                        <h5 className="text-content">Le paiement est réussi et votre commande est en route.</h5>            
                        <h5 className="text-content mb-2">Si vous souhaitez une facture, vous pouvez la demander à l'équipe support via l'email suivant : support@ ecowatt.com</h5>
                        <h5 className="text-content mb-2">Vous recevrez le bon de commande par votre mail</h5>
                        {isLoggedIn ?
                          <Link to={`/account/orders`} className="quick-access d-inline-block mt-3">Accédez à mes commandes</Link>
                          : 
                          <Link to={`/check-order`} className="quick-access d-inline-block mt-3">Vérifier L'état de votre commande</Link>
                        }
                      </>
                    :
                    null
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
