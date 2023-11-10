import React, { useContext } from 'react';
import Headers from './Header'
import Menu from './Menu'
import Footer from './Footer'
import { CartAndWishlistProvider } from '../contexts/CartAndWishlistContext';
import PopupProductCart from './Product/PopupProductCart';

export default function Layout({ children }) {
  const {showPopup, closePopup} = useContext(CartAndWishlistProvider)
  return (
    <div className={`theme-color`}>
      <Headers />
      <Menu />
      {children}
      {(showPopup) ? <PopupProductCart closePopup={closePopup} /> : null}
      <Footer />
    </div>
  );
}
