import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import styles from './AuthLayout.module.css';

export default function AuthLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname === '/') {
      navigate('/login');
    }
  }, [location?.pathname, navigate]);

  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
}
