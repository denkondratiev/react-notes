import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthUser } from '../../hooks/useAuthUser';
import { getAuth, signOut } from 'firebase/auth';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeUser } from '../../store/slices/userSlice';
import CookiesService from '../../services/CookiesService';
import log from '../../services/Loger';

import IconLogo from '../../icons/IconLogo';
import Button from '../Button/Button';

import styles from './SideBar.module.css';

export default function SideBar() {
  const { isAuth } = useAuthUser();

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      setIsLoading(true);
      const auth = getAuth();
      if (auth) {
        await signOut(auth);
        CookiesService.removeSessionCookie();
        dispatch(removeUser());
        navigate('/');
      }
    } catch (error: any) {
      log.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <aside className={styles.aside}>
      <IconLogo width="196px" height="26px" className={styles.logo} />
      {isAuth && (
        <Button onClick={logOutHandler} isLoading={isLoading}>
          Log out
        </Button>
      )}
      <div className={styles.list}>
        <p>Folder 1</p>
        <p>Folder 2</p>
      </div>
    </aside>
  );
}
