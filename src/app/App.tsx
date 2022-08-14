import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import CookiesService from '../services/CookiesService';

import './App.css';

type AppProps = {
  readonly routesMain: RouteObject[];
  readonly routesAuth: RouteObject[];
};

function App({ routesMain, routesAuth }: AppProps) {
  const mainPages = useRoutes(routesMain);
  const authPages = useRoutes(routesAuth);

  const token = CookiesService.getSessionCookie();

  return (
    <React.Suspense fallback={<Loader className="loader" />}>
      {token ? mainPages : authPages}
    </React.Suspense>
  );
}

export default App;
