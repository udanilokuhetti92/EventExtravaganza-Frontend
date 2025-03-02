import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../navigation/navigation.module.css';

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.navbox}>
        <h1 className={styles.h1}>Extravaganza</h1>

        <ul className={styles.list}>
          <li className={styles.list2}><Link to="/" className={styles.link}>Home</Link></li>
          <li className={styles.list2}><Link to="/about" className={styles.link}>About</Link></li>
          <li className={styles.list2}>
            Services
            <div className={styles.dropdown}>
              <li><Link to="/budget-filtering" className={styles.link}>Budget Filtering</Link></li>
              <li><Link to="/search-venues" className={styles.link}>Search Venues</Link></li>
              <li><Link to="/chat-bot" className={styles.link}>Chat Bot</Link></li>
            </div>
          </li>
          <li className={styles.list2}><Link to="/inbox" className={styles.link}>Inbox</Link></li>
          <b><li className={styles.list3}><Link to="/profile" className={styles.link}>Profile</Link></li></b>
        </ul>
      </div>
      <hr style={{ border: "2px solid black" }} />
    </div>
  );
}
