import React from 'react';

const AuthLayout = React.lazy(() => import('../layouts/AuthLayout/AuthLayout'));
const Login = React.lazy(() => import('../pages/Login/Login'));
const SignUp = React.lazy(() => import('../pages/SignUp/SignUp'));
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
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
  { path: '*', element: <NotExistPage /> },
];

export default routesAuth;
