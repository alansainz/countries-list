import React from 'react';
import styles from './DataRow.module.scss';

function DataRow({ title, data }: { title: string; data: string }) {
  return (
    <p className={styles.dataRow}>
      <b>{title}</b>
      {data}
    </p>
  );
}

export default DataRow;
