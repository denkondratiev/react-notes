import { useEffect } from 'react';
import {
  Route,
  RouteObject,
  Routes,
  useNavigate,
  useRoutes,
} from 'react-router-dom';
import Session from '../models/session.model';

import './App.css';

type Props = {
  readonly routesMain: RouteObject[];
  readonly routesAuth: RouteObject[];
};

function App(props: Props) {
  const routesMain = useRoutes(props.routesMain);
  const routesAuth = useRoutes(props.routesAuth);

  const navigate = useNavigate();

  const token = Session.getSessionCookie();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" />
      <Route path="/register" />
    </Routes>
  );
}

export default App;
