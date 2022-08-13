import React from 'react';

const MainLayout = React.lazy(() => import('../layouts/MainLayout/MainLayout'));
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
        element: <div>Main page</div>,
      },
    ],
  },
  { path: '*', element: <NotExistPage /> },
];

export default routesMain;
