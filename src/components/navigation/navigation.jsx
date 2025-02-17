import React from 'react';
import styles from '../navigation/navigation.module.css';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.navbox}>
        <h1 className={styles.h1}>Extravaganza</h1>

        <ul className={styles.list}>
          <li className={styles.li}><Link to="/budget-filtering">Budget <br/> Filtering</Link></li>
          <li className={styles.li}><Link to="/search-venues">Search <br/> Venues</Link></li>
          <li className={styles.li}><Link to="/customer-support">Customer <br/> Support</Link></li>
          <li className={styles.list2}><Link to="/notifications">Notifications</Link></li>
          <li className={styles.list2}><Link to="/profile">Profile</Link></li>
          <li className={styles.list2}><Link to="/ratings">Ratings</Link></li> {/* Added Ratings */}
        </ul>
      </div>
      <hr style={{ border: "1px solid black" }} />
    </div>
  );
}

