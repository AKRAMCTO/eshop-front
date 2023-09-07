import React, { useContext } from 'react';
import Loading from './Loading';
import { Redirect } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';

export default function AuthLayout({ children }) {
  const { userData, userId, authenticationFetching, authenticationLoading } = useContext(AuthProvider);

  if(authenticationFetching || authenticationLoading){
    return <Loading />
  }

  if(userId && userData) {
    return <Redirect to="/" />
  }

  return children
}
