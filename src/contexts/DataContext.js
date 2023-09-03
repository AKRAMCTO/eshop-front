import React, { useEffect } from 'react';

import { useQuery } from 'react-query';

import {
  getMenus,
  getSiteSettings,
} from './../queries/queries';
import { useMediaQuery } from 'react-responsive';

export const DataProvider = React.createContext();

export default function DataContextProvider({ children }) {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  const isMobile = useMediaQuery({ maxWidth: 767 })

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
  const { data: menus } = useQuery('menus', getMenus, {
    retry: true,
    refetchOnWindowFocus: false,
    // keepPreviousData: true
  });

  return (
    <DataProvider.Provider
      value={{
        settings, 
        menus,
        isDesktop,
        isTablet,
        isMobile
      }}
    >
      {children}
    </DataProvider.Provider>
  );
}
