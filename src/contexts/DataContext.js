import React, { useEffect } from 'react';

import { useQuery } from 'react-query';

import {
  getSiteSettings,
} from './../queries/queries';

export const DataProvider = React.createContext();

export default function DataContextProvider({ children }) {
  // const prefferedLanguage = localStorage.getItem('prefferedEcowattLanguage');
  // const [language, setLanguage] = React.useState(() => {
  //   if (prefferedLanguage) {
  //     return prefferedLanguage;
  //   } else {
  //     return 'fr';
  //   }
  // });

  // const handleLanguageChange = lang => {
  //   localStorage.setItem('prefferedEcowattLanguage', lang);
  //   setLanguage(lang);
  // };

  const { data: settings } = useQuery('settings', getSiteSettings, {
    retry: true,
    refetchOnWindowFocus: false,
    // keepPreviousData: true
  });

  return (
    <DataProvider.Provider
      value={{
        settings
      }}
    >
      {children}
    </DataProvider.Provider>
  );
}
