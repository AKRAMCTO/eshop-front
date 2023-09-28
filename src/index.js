import React from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';

import './css/vendors/bootstrap.css'
import './css/animate.min.css'
import './css/bulk-style.css'
import './css/style.css'

import AuthContextProvider from './contexts/AuthContext';
import DataContextProvider from './contexts/DataContext';
import CartAndWishlistContext from './contexts/CartAndWishlistContext';

const localCart = localStorage.getItem('ecowattCart');
if (!localCart) {
  localStorage.setItem('ecowattCart', JSON.stringify([]));
}
const localWish = localStorage.getItem('ecowattWishlist');
if (!localWish) {
  localStorage.setItem('ecowattWishlist', JSON.stringify([]));
}

const queryClient = new QueryClient()

const root = createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <DataContextProvider>
        <CartAndWishlistContext>
          <App />
        </CartAndWishlistContext>
      </DataContextProvider>
    </AuthContextProvider>
  </QueryClientProvider>
);