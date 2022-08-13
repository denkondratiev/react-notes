import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import routesMain from './routes/RoutesMain';
import routesAuth from './routes/RoutesAuth';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App routesMain={routesMain} routesAuth={routesAuth} />
    </BrowserRouter>
  </React.StrictMode>
);
