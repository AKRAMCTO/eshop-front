import React, { useContext, useEffect, useState } from 'react';
import { Minus, Plus } from 'react-feather';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';
import { TailSpin } from 'react-loader-spinner';

export default function PageCartItem({ newDate, item, loading, handleUpdateToCard, RemoveCartItem }) {
    const { isLoggedIn } = useContext(AuthProvider)
    const [ quantity, setQuantity ] = useState(item?.quantity)
    const [ load, setLoad ] = useState(false)
    const [ quantityUpdated, setQuantityUpdated ] = useState(false)

    useEffect(() => {
        let id = (isLoggedIn) ? item?.cart_id : item?.id

        if(loading === id && !load) {
            setLoad(true)
        } else if (load) {
            setLoad(false)
        }
    }, [loading])

    useEffect(() => {
        if(quantityUpdated){
            updateItem()
            setQuantityUpdated(false)
        }
    }, [quantityUpdated])

    const toggleQuantity  = async (move) => {
        if(move === 'minus'){
            if(quantity > 1) {
                setQuantity(quantity - 1)
                setQuantityUpdated(true)
            }
        }else{
            setQuantity(quantity + 1)
            setQuantityUpdated(true)
        }
    };

    const updateItem = async () => {
        // let data = (isLoggedIn) ? item?.cart_id : item?.id
        let data = {cart_id: item?.cart_id, id: item?.id, quantity: quantity}
        // console.log(data)
        handleUpdateToCard(data)
    };
    const RemoveItem  = async () => {
        let id = (isLoggedIn) ? item?.cart_id : item?.id
        RemoveCartItem(id)
    };


    return (
        <>
            {(item?.is_active === 2) ? 
                <tr>
                    <td colSpan={5} className='pb-2 pt-3 border-0'>
                        <p className={`m-0 text-primary font-bold`}>
                            - Si vous commandez cet article, vous recevrez votre commande le {newDate}
                        </p>
                    </td>
                </tr>
                :
                <div className='pb-2 pt-3'></div>
            }
            <tr className="product-box-contain">
                <td className="product-detail pt-0">
                    <div className="product border-0">
                        <Link to={`/product/${item?.slug}`} className="product-image">
                            <img src={item?.image_link} className="img-fluid blur-up lazyload" alt={item?.name} />
                        </Link>
                        <div className="product-detail">
                            <ul>
                                <li className="name">
                                    <Link to={`/product/${item?.slug}`}>{item?.name}</Link>
                                </li>
                                {/* <li className="text-content"><span className="text-title">Sold By:</span> Fresho</li> */}
                                <li className="text-content d-inline-block"><span className="text-title">Quantité</span> x{quantity}</li>
                            </ul>
                        </div>
                    </div>
                </td>

                <td className="price pt-0">
                    {(item?.discount && item?.new_price) ? 
                        <h5 className='text-center'>{item?.discount} DH TTC <del className="text-content">{item?.price} DH TTC</del></h5>
                        :
                        <h5 className='text-center'>{item?.price} DH TTC</h5>
                    }
                </td>

                <td className="quantity pt-0">
                    <div className="quantity-price">
                        <div className="cart_qty">
                            <div className="input-group">
                                <button type="button" className="btn qty-left-minus" onClick={() => toggleQuantity('minus')}>
                                    <Minus />
                                </button>
                                <input className="form-control input-number qty-input" type="text" readOnly value={quantity} />
                                <button type="button" className="btn qty-right-plus" onClick={() => toggleQuantity('plus')}>
                                    <Plus />
                                </button>
                            </div>
                        </div>
                    </div>
                </td>

                <td className="subtotal pt-0">
                    {(item?.discount && item?.new_price) ? 
                        <h5 className='text-center'>{item?.total} DH TTC <del className="text-content">-{item?.new_price?.discount}% Remise</del></h5>
                        :
                        <h5 className='text-center'>{item?.total} DH TTC</h5>
                    }
                </td>

                <td className="save-remove pt-0">
                    {/* <a className="save notifi-wishlist">Garder pour plus tard</a> */}
                    <button type="button" className="remove close_button" onClick={RemoveItem}>Retirer</button>
                    {loading &&
                        <div className='laoding-cart-item'>
                            <TailSpin
                                type="ThreeDots"
                                color="#2A3466"
                                height={35}
                                width={35}
                            />
                        </div>
                    }
                </td>
            </tr>
        </>
    )
}