import React, { useContext } from 'react';
import { CartAndWishlistProvider } from '../../contexts/CartAndWishlistContext';
import { TailSpin } from 'react-loader-spinner';
import SuccessSnackbar from '../SuccessSnackbar';
import ErrorSnackbar from '../ErrorSnackbar';
import moment from 'moment';

export default function RightSide({ cartCalculation, orderSuccess, orderError, loading, isConfirmed, handleSubmitting }) {
    const { cartItems } = useContext(CartAndWishlistProvider);

    var fr = moment().locale('fr');

    return (
        <div className="col-lg-4">
            <div className="right-side-summery-box">
                <div className="summery-box-2">
                    <div className="summery-header">
                        <h3>Résumé de la commande</h3>
                    </div>

                    <ul className="summery-contain">
                        {cartItems.map((item, key) =>
                            <>
                                <li key={`checkout-cart-item-${key}`}>
                                    <img src={item?.image_link} className="img-fluid blur-up lazyloaded checkout-image" alt={item?.name} />
                                    <h4>{item?.name} <span>X {item?.quantity}</span></h4>
                                    {/* <h4 className="price">{item?.total} DH TTC</h4> */}
                                    {(item?.discount && item?.new_price) ? 
                                        <h4 className='price'>{item?.total} DH TTC <del className="text-content">-{item?.new_price?.discount}% Remise</del></h4>
                                        :
                                        <h4 className='price'>{item?.total} DH TTC</h4>
                                    }
                                </li>
                                {(item?.is_active === 2) ? 
                                    <p className={`mb-3 mt-0 text-primary font-bold`} style={{'lineHeight': '1.1'}}>
                                        - Si vous commandez cet article, vous recevrez votre commande le {fr.add(30, 'days').format('dddd D MMMM YYYY')}
                                    </p>
                                    :
                                    <div />
                                }
                            </>
                        )}
                    </ul>

                    {cartCalculation &&
                        <ul className="summery-total">
                            <li>
                                <h4>Total</h4>
                                <h4 className="price">{cartCalculation?.subtotal} DH TTC</h4>
                            </li>

                            <li>
                                <h4>Expédition</h4>
                                <h4 className="price">{cartCalculation?.shipping_cost} DH TTC</h4>
                            </li>

                            <li className="list-total">
                                <h4>Total (DH TTC)</h4>
                                <h4 className="price">{cartCalculation?.total} DH TTC</h4>
                            </li>
                        </ul>
                    }
                </div>

                <button 
                    type="button" 
                    className="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold"
                    onClick={handleSubmitting}
                    disabled={loading || !isConfirmed}
                >
                    {(loading) ? 
                        <TailSpin
                            color="#fff"
                            height={16}
                            width={16}
                            visible={loading}
                        />
                    :
                        "Commander"
                    }
                </button>

                {(orderError) && <ErrorSnackbar message={orderError} />}
                {(orderSuccess) && <SuccessSnackbar message={orderSuccess} />}
            </div>
        </div>
    )
}