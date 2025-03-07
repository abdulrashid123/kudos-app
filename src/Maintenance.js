import React from 'react';
import styles from './Maintenance.module.css'


const Maintenance = () => {
  return (
    <div className={styles.container}>
      <img src='/maintenance page.png' alt="Maintenance" className={styles.image} />
      <h1 className={styles.title}>Site Under Maintenance !</h1>
      <p className={styles.message}>We're currently performing some updates. We'll be back online shortly!</p>
      <p className={styles.contact}>If you need immediate assistance, please contact us at <a href="mailto:abdulrashidalaskar@gmail.com" className={styles.email}>abdulrashidalaskar@gmail.com</a></p>
    </div>
  );
}

export default Maintenance;
