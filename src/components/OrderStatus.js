import React from 'react';

export default function OrderStatus(status) {
    switch (status) {
        case 'new':
            return 'Nouveau' 
        case 'waiting_for_payment':
            return 'en attente de paiement' 
        case 'in_progress':
            return 'En cours' 
        case 'delivered':
            return 'Livré' 
        case 'on_delivery':
            return 'À la livraison' 
        case 'closed':
            return 'Fermé' 
        default:
            return 'Annulé'
    }
}
