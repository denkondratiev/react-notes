import Loader from '../../components/Loader/Loader';
import SideBar from '../../components/SideBar/SideBar';
import useGetProfile from '../../hooks/useGetProfile';

import styles from './Main.module.css';

const Main = (): JSX.Element => {
  const { isLoading } = useGetProfile();

  if (isLoading) return <Loader />;

  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.main}>
        <div className={styles.notesListPart}>notes part</div>
        <div className={styles.notePart}>
          <div className={styles.notePartHeader}>article header</div>
          <div className={styles.notePartBlock}>
            <div>Time: 16.10.87 13:00</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium perferendis delectus quibusdam dolorem praesentium
              aspernatur ex sit quo autem commodi eos facere mollitia ducimus et
              est doloribus rem, nemo qui. Hic, sunt modi, ipsa nesciunt tempore
              minus magnam delectus quae repudiandae ratione minima eius
              eveniet? Quam, libero? Fugiat, nam quibusdam.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
