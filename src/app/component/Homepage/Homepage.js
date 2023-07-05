import React from 'react';
import styles from './Homepage.module.css';

function Homepage() {
  return (
    <div className={styles.container}>
      <h2>BlockChain Based Birth Registration System</h2>
      <img src="/image/body.png" alt="body" className={styles.image} />
    </div>
  );
}

export default Homepage;
