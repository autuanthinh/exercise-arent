import { createRef } from 'react';

import HomePage from 'pages/HomePage';
import RecordPage from 'pages/RecordPage';
import ColumnPage from 'pages/ColumnPage';

import Login from 'pages/Login';

type RefElement = undefined | HTMLDivElement;

export function createRoutes(isAuth: boolean) {
  return isAuth
    ? [
        { path: '/', name: 'home', element: <HomePage />, nodeRef: createRef<RefElement>() },
        { path: '/record', name: 'record', element: <RecordPage />, nodeRef: createRef<RefElement>() },
        {
          path: '/column',
          name: 'column',
          element: <ColumnPage />,
          nodeRef: createRef<RefElement>(),
        },
      ]
    : [{ path: '/', name: 'Login', element: <Login />, nodeRef: createRef<RefElement>() }];
}

export type RoutesType = ReturnType<typeof createRoutes>;
