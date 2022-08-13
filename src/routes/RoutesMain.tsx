import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import Login from '../pages/Login/Login';
import NotExistPage from '../pages/NotExistPage/NotExistPage';

// const ForgotPasswordScreen = React.lazy(
//   () => import('../screens/forgotPassword/forgotPassword.screen'),
// );

const routesMain = [
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  { path: '*', element: <NotExistPage /> },
];

export default routesMain;
