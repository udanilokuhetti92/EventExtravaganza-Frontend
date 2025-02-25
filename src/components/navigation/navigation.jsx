import React from 'react'
import styles from '../navigation/navigation.module.css'

export default function () {
  return (
    <div className={styles.nav}>
        <div className={styles.navbox}>
            <h1 className={styles.h1}>Extravaganza</h1>

            <ul className={styles.list}>
                <li className={styles.list2}>Home</li>
                <li className={styles.list2}>About </li>
                <li className={styles.list2}>Services</li>
                <li className={styles.list2}>Inbox</li>
                <li className={styles.list2}>Profile</li>
            </ul>
        </div>
        <hr style={{ border: "1px solid black" }} />
    </div>
  )
}
