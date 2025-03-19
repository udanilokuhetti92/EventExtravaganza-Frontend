import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.nav}>
      <div className={styles.mainbox}>
        <nav className={styles.navbar}>
          <button 
            className={styles.hamburger} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
            <li onClick={() => navigate('/Home')} className={styles.navItem}>
              Home
            </li>
            <li className={styles.navItem}>
              <span className={styles.servicesTrigger}>Services</span>
              <ul className={styles.dropdown}>
                <li onClick={() => navigate('/Budget_Filtering')}>Budget Filtering</li>
                <li onClick={() => navigate('/LocationBase_Filtering')}>Location Filtering</li>
                <li onClick={() => navigate('/Invitation')}>Send Invitations</li>
                <li>Chat Bot</li>
              </ul>
            </li>
            <li className={styles.navItem}>Inbox</li>
            <li 
              className={styles.navItem} 
              onClick={() => navigate('/Organizer_Profile')}
            >
              Profile
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}