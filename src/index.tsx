import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import routesMain from './routes/routesMain';
import routesAuth from './routes/routesAuth';
import App from './app/App';
import './firebase';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App routesMain={routesMain} routesAuth={routesAuth} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
