import React from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import DataContextProvider from './contexts/DataContext';

import './css/vendors/bootstrap.css'
import './css/animate.min.css'
import './css/bulk-style.css'
import './css/style.css'
import AuthContextProvider from './contexts/AuthContext';

const queryClient = new QueryClient()

const root = createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </AuthContextProvider>
  </QueryClientProvider>
);