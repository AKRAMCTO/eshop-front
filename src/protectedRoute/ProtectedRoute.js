import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import Loading from '../components/Loading';
import { AuthProvider } from '../contexts/AuthContext';

export default function ProtectedRoute({ Component, path, ...args }) { 
  const { authenticationLoading, userId } = useContext(AuthProvider);

  return (
    <Route
      {...args}
      path={path}
      render={({ location }) => {
        if (authenticationLoading)
          return (
            <Loading />
          );
        if (userId) {
          return <Component userId={userId} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: `/login`,
                state: { from: location },
              }}
            />
          );
        }
      }}
    />
  );
}
