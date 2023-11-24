import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, Redirect, Link } from 'react-router-dom';
import { ThumbsUp } from 'react-feather';

import Breadcrumb from '../components/Breadcrumb';
import Layout from '../components/Layout';
import { AuthProvider } from '../contexts/AuthContext';

export default function PageSuccess() {
  const { isLoggedIn, ordersLoading, ordersFetching } = useContext(AuthProvider);
  const location = useLocation()
  const queryParameters = new URLSearchParams(location.search)
  const invoice = queryParameters.get("invoice") ?? null

  if(ordersLoading || ordersFetching){
    return <div />
  }

  if(!invoice){
    return <Redirect to='/' />
  }

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
                    <h3 className="theme-color">Succès de la commande</h3>
                    <h5 className="text-content">Le paiement est réussi et votre commande est en route</h5>
                    <h5 className="text-content mb-2">Si vous souhaitez une facture, vous pouvez la demander à l'équipe support via l'email suivant : support@ ecowatt.com</h5>
                    {isLoggedIn ?
                      <Link to={`/account/orders`} className="quick-access d-inline-block mt-3">Accédez à mes commandes</Link>
                      : 
                      (invoice) ? 
                      <>
                        <h5 className="text-content mb-2">Vous recevrez le bon de commande par votre mail</h5>
                        <h6>Identifiant de transaction: {invoice}</h6>
                        <Link to={`/check-order`} className="quick-access d-inline-block mt-3">Vérifier L'état de votre commande</Link>
                      </>
                      : <div />
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
