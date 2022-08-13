import classnames from 'classnames';
import React, { memo } from 'react';

import styles from './Loader.module.css';

type Props = {
  className?: string;
};

const Loader: React.FC<Props> = memo(({ className = '' }) => (
  <div className={classnames(styles.wrapper, className)}>
    <div className={styles.loader} />
  </div>
));

export default Loader;
