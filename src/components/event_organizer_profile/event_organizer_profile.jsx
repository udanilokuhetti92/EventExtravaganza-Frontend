import React from 'react';
import styles from './event_organizer_profile.module.css';

export default function EventOrganizerProfile() {
  // This would typically come from backend/API
  const organizer = {
    name: "Udani Lokuhetti",
    city: "Colombo",
    email: "udanilokuhetti22@gmail.com",
    contactNumber: "+94(76) 0876 502"
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.profileImage}>
          <div className={styles.imagePlaceholder}>
            {organizer.name.charAt(0)}
          </div>
        </div>
        <h1 className={styles.name}>{organizer.name}</h1>
      </div>

      <div className={styles.profileContent}>
        <div className={styles.infoSection}>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <label>City</label>
              <p>{organizer.city}</p>
            </div>
            <div className={styles.infoItem}>
              <label>Email</label>
              <p>{organizer.email}</p>
            </div>
            <div className={styles.infoItem}>
              <label>Contact Number</label>
              <p>{organizer.contactNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}