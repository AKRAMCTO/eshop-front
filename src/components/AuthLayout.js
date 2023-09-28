import React, { useContext } from 'react';
import Loading from './Loading';
import { Redirect } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';

export default function AuthLayout({ children }) {
  const { isLoggedIn, authenticationFetching, authenticationLoading } = useContext(AuthProvider);

  if(authenticationFetching || authenticationLoading){
    return <Loading />
  }

  if(isLoggedIn) {
    return <Redirect to="/" />
  }

  return children
}
