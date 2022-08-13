import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Session from '../models/session.model';

import './App.css';

type AppProps = {
  readonly routesMain: RouteObject[];
  readonly routesAuth: RouteObject[];
};

function App({ routesMain, routesAuth }: AppProps) {
  const mainPages = useRoutes(routesMain);
  const authPages = useRoutes(routesAuth);

  const token = Session.getSessionCookie();

  return token ? (
    <React.Suspense fallback={<Loader className="loader" />}>
      {mainPages}
    </React.Suspense>
  ) : (
    <React.Suspense fallback={<Loader className="loader" />}>
      {authPages}
    </React.Suspense>
  );
}

export default App;
