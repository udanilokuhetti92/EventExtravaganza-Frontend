import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.nav}>
      <div className={styles.mainbox}>
        <nav className={styles.navbar}>
          <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
          <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
            <li onClick={() => navigate('/Home')} className={styles.li1}>Home</li>
            <li className={styles.list2}>
              Services
              <div className={styles.dropdown}>
                <li onClick={() => navigate('/budget_filtering')}>Budget Filtering</li>
                <li onClick={() => navigate('/LocationBase_Filtering')}>Location Filtering</li>
                <li onClick={()=> navigate('/Invitation')}>Send Invitations</li>
                <li>Chat Bot</li>
              </div>
            </li>
            <li className={styles.li1}>Inbox</li>
            <li className={styles.li1} onClick={() => navigate('/Organizer_Profile')}>Profile</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
