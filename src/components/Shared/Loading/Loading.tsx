import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Loading.module.scss';

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.innerContainer}>
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
    </div>
  );
}

export default Loading;
