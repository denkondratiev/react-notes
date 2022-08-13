import React from 'react';

const AuthLayout = React.lazy(() => import('../layouts/AuthLayout/AuthLayout'));
const Login = React.lazy(() => import('../pages/Login/Login'));
const Register = React.lazy(() => import('../pages/Register/Register'));
const NotExistPage = React.lazy(
  () => import('../pages/NotExistPage/NotExistPage')
);

const routesAuth = [
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  { path: '*', element: <NotExistPage /> },
];

export default routesAuth;
