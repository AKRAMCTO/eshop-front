import React, { useContext } from 'react';
import { CartAndWishlistProvider } from '../../contexts/CartAndWishlistContext';
import { TailSpin } from 'react-loader-spinner';
import SuccessSnackbar from '../SuccessSnackbar';
import ErrorSnackbar from '../ErrorSnackbar';

export default function RightSide({ orderSuccess, orderError, loading, handleSubmitting }) {
    const { cartItems, cartCalculation } = useContext(CartAndWishlistProvider);

    return (
        <div className="col-lg-4">
            <div className="right-side-summery-box">
                <div className="summery-box-2">
                    <div className="summery-header">
                        <h3>Résumé de la commande</h3>
                    </div>

                    <ul className="summery-contain">
                        {cartItems.map((item, key) =>
                            <li key={`checkout-cart-item-${key}`}>
                                <img src={item?.image_link} className="img-fluid blur-up lazyloaded checkout-image" alt={item?.name} />
                                <h4>{item?.name} <span>X {item?.quantity}</span></h4>
                                <h4 className="price">{item?.total} DH TTC</h4>
                            </li>
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
                    disabled={loading}
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