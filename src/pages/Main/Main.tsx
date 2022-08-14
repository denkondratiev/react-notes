import { useEffect } from 'react';
import { db, FBUserData } from '../../firebase';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuthUser } from '../../hooks/useAuthUser';
import { collection, getDocs } from 'firebase/firestore';
import { setUser } from '../../store/slices/userSlice';
import log from '../../services/Loger';

import IconLogo from '../../icons/IconLogo';

import styles from './Main.module.css';

const Main = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAuthUser();

  const getUserProfile = async () => {
    try {
      if (!user.isAuth) {
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
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className={styles.container}>
      <aside className={styles.asideMenu}>
        <IconLogo width="196px" height="26px" className={styles.iconLogo} />
        <p>Folder 1</p>
        <p>Folder 2</p>
      </aside>
      <main className={styles.main}>notes part</main>
      <article className={styles.article}>
        <div className={styles.articleHeader}>article header</div>
        <div className={styles.articleBlock}>
          <div>Time: 16.10.87 13:00</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            perferendis delectus quibusdam dolorem praesentium aspernatur ex sit
            quo autem commodi eos facere mollitia ducimus et est doloribus rem,
            nemo qui. Hic, sunt modi, ipsa nesciunt tempore minus magnam
            delectus quae repudiandae ratione minima eius eveniet? Quam, libero?
            Fugiat, nam quibusdam.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Main;
