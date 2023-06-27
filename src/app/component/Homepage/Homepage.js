import React from 'react';
import styles from './Homepage.module.css';

function Homepage() {
  return (
    <div className={styles.container}>
      <h1>BlockChain Based Birth Registration System</h1>
      <img src="/image/body.png" alt="body" className={styles.image} />
    </div>
  );
}

export default Homepage;
