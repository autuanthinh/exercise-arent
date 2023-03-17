import { createRef, lazy } from 'react';

const LoginPage = lazy(() => import('pages/Login'));

const HomePage = lazy(() => import('pages/HomePage'));
const RecordPage = lazy(() => import('pages/RecordPage'));
const ColumnPage = lazy(() => import('pages/ColumnPage'));

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
    : [{ path: '/', name: 'Login', element: <LoginPage />, nodeRef: createRef<RefElement>() }];
}

export type RoutesType = ReturnType<typeof createRoutes>;
