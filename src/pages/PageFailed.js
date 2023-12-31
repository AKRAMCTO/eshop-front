import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';

import Breadcrumb from '../components/Breadcrumb';
import Layout from '../components/Layout';
import { ThumbsDown } from 'react-feather';

export default function PageFailed() {

  // if(!getCartItemsGuestLoading && (!cartItems || cartItems.length < 1)) {
  //   return <Redirect to='/cart' />
  // }

  return (
    <Layout>
      <Helmet>
        <title>{`Commander | Ecowatt`}</title>
      </Helmet>

      <Breadcrumb title={`Commander`} />

      <section className="breadscrumb-section pt-0 mt-4 mb-5">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain breadscrumb-order">
                <div className="order-box failed-order">
                  <div className="order-image">
                    <div className="checkmark">
                      <ThumbsDown />
                    </div>
                  </div>

                  <div className="order-contain">
                    <h3 className="theme-color">Commande échouée</h3>
                    <h5 className="text-content">Le paiement a échoué et votre commande annulée</h5>
                    {/* <h6>identifiant de transaction: 1708031724431131</h6> */}
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
