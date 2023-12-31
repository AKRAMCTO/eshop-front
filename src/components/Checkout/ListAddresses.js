import React, { useEffect, useState } from 'react';
import AddAddress from './AddAddress';

export default function ListAddresses({ loading, defaultChecked, checkTheSameAddress, current, type, addresses, save, isAuthenticated, useAs = false, currentDeliveryAddress }) {
    const [show, setShow] = useState(false)

    const modelOpen = () => {
        setShow(true)
    }
    const modelClose = () => {
        setShow(false)
    }

    const saveAddress = (item) => {
        // console.log('save this => ', item)
        if(isAuthenticated){
            if(current !== item) {
                save(item)
            }
        }else{
            save(item)
        }
    }

    useEffect(() => {
        if(type === "delivery" && !current && addresses.length){
            saveAddress(addresses[0]?.id)
        }
    }, [addresses])

    // const checkTheSameAddress = (event) => {
    //     // console.log('event => ', event)
    //     setDefaultChecked(event)
    //     saveAddress((event) ? currentDeliveryAddress : null)
    // }

    // useEffect(() => {
    //     if(useAs && defaultChecked && current !== currentDeliveryAddress){
    //         saveAddress(currentDeliveryAddress)
    //     }
    // }, [currentDeliveryAddress])

    useEffect(() => {
        // console.log('useEffect defaultChecked => ', defaultChecked)
    }, [defaultChecked])

    if(isAuthenticated){
        return (
            <div className="checkout-box box-popup">
                <div className="d-flex align-items-center justify-content-between checkout-title">
                    <h4>Address de {type === 'delivery' ? 'Livraison' : 'facturation'}</h4>
                    {((useAs && !defaultChecked) || !useAs) && (
                        <>
                            <button
                                className="btn new-address-button"
                                type="button"
                                onClick={(!loading) ? () => modelOpen() : null}
                                disabled={loading}
                                >
                                + Ajouter un nouveau
                            </button>
                            {(!loading && show) && <AddAddress type={type} modelClose={modelClose} isAuthenticated={isAuthenticated} />}
                        </>
                    )}
                </div>

                {(useAs) ? 
                    <div className="checkout-detail mb-3">
                        <label htmlFor="useAs" className="d-flex align-items-center justify-content-start">
                            <input type="checkbox" id="useAs" checked={defaultChecked} onChange={(!loading) ? (event) => checkTheSameAddress(event.target.checked) : null} />&nbsp;
                            Utiliser l'adresse de livraison comme adresse de facturation
                        </label>
                    </div>
                    :
                    <div />
                }
                {((useAs && !defaultChecked) || !useAs) && (
                    addresses && addresses.length ?
                        <div className="checkout-detail">
                            <div className="row g-4">
                                {addresses.map((item, key) =>
                                    <div className="col-xxl-6 col-lg-12 col-md-6" key={`address-delivery-${key}`}>
                                        <div className="delivery-address-box" onClick={(!loading) ? () => saveAddress(item?.id) : null}>
                                            <div>
                                                <div className="form-check">
                                                    {(current === item?.id) ? <input readOnly className="form-check-input" checked type="radio" id="flexRadioDefault1" /> : <div/>}
                                                </div>
                                                <div className="label">
                                                    <label>{item?.type === 'delivery' ? 'Livraison' : 'Facture'}</label>
                                                </div>
                                                <ul className="delivery-address-detail">
                                                    {(item?.country) &&
                                                        <li>
                                                            <p className="text-content">
                                                                <span className="text-title">Pays: {item?.country?.name}</span>
                                                            </p>
                                                        </li>
                                                    }
                                                    {(item?.city) &&
                                                        <li>
                                                            <p className="text-content">
                                                                <span className="text-title">Ville: {item?.city?.name}</span>
                                                            </p>
                                                        </li>
                                                    }
                                                    {(item?.line_1) &&
                                                        <li>
                                                            <p className="text-content">
                                                                <span className="text-title">Line 1: {item?.line_1}</span>
                                                            </p>
                                                        </li>
                                                    }
                                                    {(item?.line_2) &&
                                                        <li>
                                                            <p className="text-content">
                                                                <span className="text-title">Line 2: {item?.line_2}</span>
                                                            </p>
                                                        </li>
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        :
                        <h3>Aucune adresse trouvée</h3>
                    )
                }
            </div>
        )
    }

    return(
        <div className="checkout-box">
            <div className="d-flex align-items-center justify-content-between checkout-title">
                <h4>Address de {type === 'delivery' ? 'Livraison' : 'facturation'}</h4>
            </div>
            {(useAs) ?
                <div className="checkout-detail mb-3">
                    <label htmlFor="useAs" className="d-flex align-items-center justify-content-start">
                        <input type="checkbox" id="useAs" checked={defaultChecked} onChange={(event) => checkTheSameAddress(event.target.checked)} />&nbsp;
                        Utiliser l'adresse de livraison comme adresse de facturation
                    </label>
                </div>
                :
                <div />
            }
            {((useAs && !defaultChecked) || !useAs) && <AddAddress type={type} isAuthenticated={isAuthenticated} saveAddress={saveAddress} />}
        </div>
    )
}