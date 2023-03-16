import { createContext } from 'react';
import { RoutesType } from 'App/routers/routers';

export const AppContext = createContext<{
  isLoggedIn?: boolean;
  setLoggedIn?: (value: boolean) => void;
}>({});

export const AppRoutesContext = createContext<RoutesType | undefined>(undefined);
