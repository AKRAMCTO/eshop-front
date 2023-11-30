import React from 'react';

export default function OrderStatus(status) {
    switch (status) {
        case '0':
            return 'Initiée' 
        case '1':
            return 'Validée' 
        case '2':
            return 'En cours' 
        case '3':
            return 'Livrée' 
        default:
            return 'Annulée'
    }
}
