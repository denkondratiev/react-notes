import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './FormWrapper.module.css';

type Props = {
  children: React.ReactNode;
};

function FormWrapper({ children }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.linksWrapper}>
        <NavLink
          to={'/login'}
          className={(nav) =>
            classNames(styles.link, nav.isActive ? styles.linkActive : '')
          }
        >
          Sign in
        </NavLink>
        <NavLink
          to={'/signup'}
          className={(nav) =>
            classNames(styles.link, nav.isActive ? styles.linkActive : '')
          }
        >
          Sign up
        </NavLink>
      </div>
      {children}
    </div>
  );
}

export default FormWrapper;
