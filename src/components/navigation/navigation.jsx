import React from 'react';
import styles from './navigation.module.css';
import { useNavigate } from "react-router-dom";

export default function Navigation() {

  const navigate = useNavigate();
  return (
    <div className={styles.nav}>
      <div className={styles.navbox}>
        <h1 className={styles.h1}>Extravaganza</h1>

        <ul className={styles.list}>
          <li onClick={()=> navigate("/Home")} className={styles.list2}>Home</li>
          <li className={styles.list2}>About</li>
          <li className={styles.list2}>
            Services
            <div className={styles.dropdown}>
              <li  onClick={()=> navigate("/Budget_Filtering")}>Budget Filtering</li>
              <li>Location Filtering</li>
              <li>Chat Bot</li>
            </div>
          </li>
          <li className={styles.list2}>Inbox</li>
          <b><li className={styles.list3}>Profile</li></b>
        </ul>
      </div>
      <hr style={{ border: "1px solid black" }} />
    </div>
  );
}