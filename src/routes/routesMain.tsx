import React from 'react';

const MainLayout = React.lazy(() => import('../layouts/MainLayout/MainLayout'));
const Main = React.lazy(() => import('../pages/Main/Main'));
const NotExistPage = React.lazy(
  () => import('../pages/NotExistPage/NotExistPage')
);

const routesMain = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
    ],
  },
  { path: '*', element: <NotExistPage /> },
];

export default routesMain;
