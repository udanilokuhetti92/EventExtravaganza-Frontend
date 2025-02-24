import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from '../navigation/navigation.module.css';

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.navbox}>
        <h1 className={styles.h1}>Extravaganza</h1>

        <ul className={styles.list}>
          <li className={styles.list2}>Home</li>
          <li className={styles.list2}>About</li>
          <li className={styles.list2}>
            Services
            <div className={styles.dropdown}>
              <li>Budget Filtering</li>
              <li>Search Venues</li>
              <li>Chat Bot</li>
            </div>
          </li>
          <li className={styles.list2}>Inbox</li>
          <b>
            <li className={styles.list3}>
              <Link to="/event-organizer-profile" className={styles.link}>Profile</Link>
            </li>
          </b>
        </ul>
      </div>
      <hr style={{ border: "2px solid black" }} />
    </div>
  );
}
