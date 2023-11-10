import React from 'react';
import { Link } from 'react-router-dom';

export default function PopupProductCart({ closePopup }) {

    const goToCart = () => {
        // closePopup()
        window.location.href = '/cart';
    }

    return (
        <div className={`product-popup modal fade theme-modal show`}>
            <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Produit ajouté à votre panier</h5>
                    </div>
                    <div className="buttons">
                        <button type="button" onClick={() => closePopup()}>Continuer vos achats</button>
                        <button type="button" onClick={() => goToCart()}>Voir le panier</button>
                    </div>
                </div>
            </div>
        </div>
    )
}