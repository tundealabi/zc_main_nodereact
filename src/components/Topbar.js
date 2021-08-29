import React from 'react';
import profile from '../assets/profilepic.png'
import settings from '../assets/settings.svg'
import styles from '../styles/Topbar.module.css';

export const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search here"
        />
        <img src={settings} alt="settings" />
        <div className={styles.profile}>
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};
