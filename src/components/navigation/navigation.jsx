import React from 'react'
import styles from '../navigation/navigation.module.css'

export default function () {
  return (
    <div className={styles.nav}>
        <div className={styles.navbox}>
            <h1 className={styles.h1}>Extravaganza</h1>

            <ul className={styles.list}>
                <li className={styles.li}>Budget <br/> Filtering</li>
                <li className={styles.li}>Search <br/> Venues</li>
                <li className={styles.li}>Customer <br/> Support</li>
                <li className={styles.list2}>Notifications</li>
                <li className={styles.list2}>Profile</li>
            </ul>
        </div>
        <hr style={{ border: "1px solid black" }} />
    </div>
  )
}
