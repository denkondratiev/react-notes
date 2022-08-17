import { useState, useEffect } from 'react';
import { useAuthUser } from './useAuthUser';
import { db, FBUserData } from '../firebase';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { collection, getDocs } from 'firebase/firestore';
import { setUser } from '../store/slices/userSlice';
import log from '../services/Loger';

import type { User } from '../store/store.types';

export default function useGetProfile(): {
  isLoading: boolean;
  user: User;
} {
  const { isAuth } = useAuthUser();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const getUserProfile = async () => {
    try {
      if (!isAuth) {
        const userCollection = collection(db, 'users');
        const data = await getDocs(userCollection);
        const userData = data.docs.map((doc) => ({
          ...doc.data(),
        })) as FBUserData[];

        if (userData[0]) {
          dispatch(
            setUser({
              fullName: userData[0].displayName,
              email: userData[0].email,
              id: userData[0].id,
              password: userData[0].password,
            })
          );
        }
      }
    } catch (error: any) {
      log.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, [isAuth]);

  return {
    isLoading,
    user,
  };
}
