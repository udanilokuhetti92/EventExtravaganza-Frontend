import React from "react";
import { Link } from "react-router-dom";
import styles from "../navigation/navigation.module.css";

export default function Navigation() {
  return (
    <div>
        <div className={styles.mainbox}>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <li className={styles.li1}> Home</li>
                    <li className={styles.li1}>Packages</li>
                    <li className={styles.li1}>Projects</li>
                    <li className={styles.li1}>Inbox</li>
                    <li className={styles.li1}>Profile</li>
                </ul>
            </nav>
        </div>
    </div>
  );
}
