import React from 'react';
import Headers from './Header'
import Menu from './Menu'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className={`theme-color`}>
      <Headers />
      <Menu />
      {children}
      <Footer />
    </div>
  );
}
