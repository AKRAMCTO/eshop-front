import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

import { AuthProvider } from '../contexts/AuthContext';
import { CartAndWishlistProvider } from '../contexts/CartAndWishlistContext';
import ProductBox from '../components/Product/ProductBox';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../components/Breadcrumb';
import Layout from '../components/Layout';

export default function GuestWishlist() {
  const { isLoggedIn, authenticationLoading, authenticationFetching } = useContext(AuthProvider);
  const {wishlistItems, getWishlistItemsGuestLoading} = useContext(CartAndWishlistProvider)

  if (authenticationLoading || authenticationFetching) {
    return <div />
  }
  if (isLoggedIn) {
    return <Redirect to={`/account/wishlist`} />;
  }

  return (
    <Layout>
      <Helmet>
          <title>{`Wishlist | Ecowatt`}</title>
      </Helmet>
      
      <Breadcrumb title={`Tableau de bord utilisateur`} />

      <section className="user-dashboard-section section-b-space">
        <div className="container-fluid-lg">
          <div className="dashboard-right-sidebar">
            <div className="dashboard-wishlist">
                <div className="title">
                    <h2>Wishlist</h2>
                    <span className="title-leaf title-leaf-gray">
                        <img src={require("./../assets/svg/leaf.png")} alt="" className="icon-width bg-gray" />
                    </span>
                </div>
                <div className="row g-sm-4 g-3">
                    {getWishlistItemsGuestLoading ? 
                        <div className="min-vh-100 px-4 py-2 d-flex align-items-center justify-content-center">
                            <InfinitySpin
                                type="ThreeDots"
                                color="#2A3466"
                                height={220}
                                width={220}
                                visible={getWishlistItemsGuestLoading}
                            />
                        </div>
                    : ((wishlistItems && wishlistItems.length) ? 
                      wishlistItems.map((item, key) => 
                        <div className="col-xxl-3 col-lg-4 col-sm-6" key={`wishlist-${key}`}>
                          <ProductBox product={item} isWishlist={true}  />
                        </div>
                      )
                    :
                      <h2 className="text-center my-5">Aucune produit trouvée</h2>
                    )}
                </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
