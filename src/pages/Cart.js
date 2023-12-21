import React, { useContext, useState } from 'react';
import { InfinitySpin, TailSpin } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import { Redirect, Link } from 'react-router-dom';


import { AuthProvider } from '../contexts/AuthContext';
import { CartAndWishlistProvider } from '../contexts/CartAndWishlistContext';
import Breadcrumb from '../components/Breadcrumb';
import Layout from '../components/Layout';
import PageCartItem from '../components/Cart/PageCartItem';
import moment from 'moment';
import 'moment/locale/fr';

export default function Cart() {
  const { isLoggedIn, authenticationLoading, authenticationFetching, userData } = useContext(AuthProvider);
  const { cartItems, getCartItemsGuestLoading, cartItemsLoading, cartCalculation, 
    removeFromCartMutation, removeGuestCartItem, updateToCartMutation, storeGuestCartItem
  } = useContext(CartAndWishlistProvider)
  const [loading, setLoading] = useState(null);

  if (authenticationLoading || authenticationFetching) {
    return <div />
  }

  var fr = moment().locale('fr');
  const newDate = fr.add(30, 'days').format('dddd D MMMM YYYY')

  const handleUpdateToCard  = async (data) => {
    setLoading(data?.id);
    try {
        if(isLoggedIn) await updateToCartMutation(data);
        else await storeGuestCartItem(data);
        setLoading(null);
        // setAddItemInWishlist(true);
    } catch (error) {
        setLoading(null);
    }
  };

  const RemoveCartItem  = async (move) => {
    setLoading(move);
    try {
        if(isLoggedIn) await removeFromCartMutation(move);
        else await removeGuestCartItem(move);
        setLoading(null);
        // setAddItemInWishlist(true);
    } catch (error) {
        // // console.log('addToWishListMutation error => ', error)
        // if (error.response.data.message === 'Item founded on the Wishlist') {
        //     setAddItemInWishlist(true);
        // }
        setLoading(null);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>{`Panier | Ecowatt`}</title>
      </Helmet>

      <Breadcrumb title={`Panier`} />

      <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-5 g-3">
            {(getCartItemsGuestLoading || cartItemsLoading) ?
              <div className="col-12 min-vh-100 px-4 py-2 d-flex align-items-center justify-content-center">
                <InfinitySpin
                  type="ThreeDots"
                  color="#2A3466"
                  height={220}
                  width={220}
                  visible={(getCartItemsGuestLoading || cartItemsLoading)}
                />
              </div>
              : ((cartItems && cartItems.length) ?
                <>
                  {(isLoggedIn && userData && userData?.type === 'seller' && userData?.status === 1) ?
                    <div className="col-12">
                      <div className="btn btn-animation proceed-btn fw-bold" style={{ cursor: 'default' }}>
                        Votre Compte n'est pas encore validé.<br />Vous ne pouvez pas encore faire des commandes.
                      </div>
                    </div>
                    :
                    <div />
                  }
                  <div className="col-xxl-9">
                    <div className="cart-table">
                      <div className="table-responsive-xl">
                        <table className="table">
                          <tbody>
                            {cartItems.map((item, key) =>
                              <PageCartItem key={`cart-item-${key}`} newDate={newDate} item={item} loading={loading} handleUpdateToCard={handleUpdateToCard} RemoveCartItem={RemoveCartItem} />
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {cartCalculation ? 
                    <div className="col-xxl-3">
                      <div className="summery-box p-sticky">
                        <div className="summery-header">
                          <h3>Total du panier</h3>
                        </div>
                        <div className="summery-contain">
                          {/* <div className="coupon-cart">
                            <h6 className="text-content mb-2">Appliquer le coupon</h6>
                            <div className="mb-3 coupon-box input-group">
                              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Entrez le code de coupon ici..." />
                              <button className="btn-apply">Appliquer</button>
                            </div>
                          </div> */}
                          <ul>
                            <li>
                              <h4>Total</h4>
                              <h4 className="price">{cartCalculation?.subtotal} DH TTC</h4>
                            </li>

                            {/* <li>
                              <h4>Coupon de réduction</h4>
                              <h4 className="price">(-) {cartCalculation?.coupon_cost}</h4>
                            </li> */}

                            <li className="align-items-start">
                              <h4>Expédition</h4>
                              <h4 className="price text-end">{cartCalculation?.shipping_cost} DH TTC</h4>
                            </li>
                          </ul>
                        </div>
                        <ul className="summery-total">
                          <li className="list-total border-top-0">
                            <h4>Total (DH TTC)</h4>
                            <h4 className="price theme-color">{cartCalculation?.total} <span>DH TTC</span></h4>
                          </li>
                        </ul>
                        <div className="button-group cart-button">
                          <ul>
                            {(!isLoggedIn || (isLoggedIn && userData && userData?.status !== 1)) ?
                              <li>
                                <Link to={'/checkout'} className="btn btn-animation proceed-btn fw-bold">Processus de paiement</Link>
                              </li>
                            : <div />
                            }
                            <li>
                              <Link to={'/'} className="btn btn-light shopping-button text-dark">
                                <i className="fa-solid fa-arrow-left-long"></i>
                                &nbsp;
                                Retour aux achats
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {loading &&
                            <div className='laoding-cart-item'>
                                <TailSpin
                                    type="ThreeDots"
                                    color="#2A3466"
                                    height={50}
                                    width={50}
                                />
                            </div>
                        }
                      </div>
                    </div>
                    :
                    <div />
                  }
                </>
              :
                <div className="col-12"><h2 className="text-center my-5">Aucune produit trouvée</h2></div>
              )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
