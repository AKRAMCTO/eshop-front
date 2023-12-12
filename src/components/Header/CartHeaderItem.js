import React, { useContext } from 'react';
import { User } from 'react-feather';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { AuthProvider } from '../../contexts/AuthContext';

export default function CartHeaderItem({ item, loading, RemoveCartItem }) {
    const { isLoggedIn } = useContext(AuthProvider);

    const RemoveItem  = async () => {
        let id = (isLoggedIn) ? item?.cart_id : item?.id
        RemoveCartItem(id)
    };

    return (
        <li className="product-box-contain">
            <div className="drop-cart">
                <Link to={`/product/${item?.slug}`} className="drop-image">
                    <img src={item?.image_link} className="lazyload" alt={item?.name} />
                </Link>

                <div className="drop-contain">
                    <Link to={`/product/${item?.slug}`}>
                        <h5>{item?.name}</h5>
                    </Link>
                    <h6>
                        <span>{item?.quantity}x</span>
                        {(item?.discount && item?.new_price) ? 
                            <>{item?.discount} DH TTC <del className="text-content">-{item?.price}DH TTC</del></>
                            :
                            <>{item?.price} DH TTC</>
                        }
                    </h6>
                    <button 
                        onClick={RemoveItem}
                        className="close-button close_button"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
            {loading &&
                <div className='laoding-cart-item'>
                    <TailSpin
                        type="ThreeDots"
                        color="#2A3466"
                        height={25}
                        width={25}
                    />
                </div>
            }
        </li>
    );
}
