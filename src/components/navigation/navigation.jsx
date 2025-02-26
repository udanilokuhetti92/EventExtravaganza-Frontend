import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../navigation/navigation.module.css';

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.navbox}>
        <h1 className={styles.h1}>Extravaganza</h1>

        <ul className={styles.list}>
          <li className={styles.list2}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          </li>
          <li className={styles.list2}>
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
          </li>
          <li className={styles.list2}>
            Services
            <div className={styles.dropdown}>
              <li><Link to="/budget-filtering" style={{ color: 'inherit', textDecoration: 'none' }}>Budget Filtering</Link></li>
              <li><Link to="/search-venues" style={{ color: 'inherit', textDecoration: 'none' }}>Search Venues</Link></li>
              <li><Link to="/chat-bot" style={{ color: 'inherit', textDecoration: 'none' }}>Chat Bot</Link></li>
            </div>
          </li>
          <li className={styles.list2}>
            <Link to="/inbox" style={{ color: 'inherit', textDecoration: 'none' }}>Inbox</Link>
          </li>
          <b><li className={styles.list3}>
            <Link to="/profile" style={{ color: 'inherit', textDecoration: 'none' }}>Profile</Link>
          </li></b>
        </ul>
      </div>
      <hr style={{ border: "2px solid black" }} />
    </div>
  );
}