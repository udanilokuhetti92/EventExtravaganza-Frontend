import React, { useState, useEffect } from "react";
import styles from "./event_organizer_profile.module.css"; // Import the CSS file

export default function EventOrganizerProfile() {
  // State to manage profile data
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    eventDate: "",
    eventType: "",
    email: "",
    location: "",
  });

  // Fetch profile data (Simulating fetching from backend)
  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("eventOrganizerProfile"));
    if (storedProfile) {
      setProfile(storedProfile);
    }
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Simulating saving to backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("eventOrganizerProfile", JSON.stringify(formData));
    setProfile(formData);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Event Organizer Profile</h2>

      {/* If profile exists, show details */}
      {profile ? (
        <div className={styles.profileCard}>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Contact Number:</strong> {profile.contactNumber}</p>
          <p><strong>Event Date:</strong> {profile.eventDate}</p>
          <p><strong>Event Type:</strong> {profile.eventType}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Location:</strong> {profile.location}</p>
        </div>
      ) : (
        // If no profile, show the form
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Contact Number:</label>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

          <label>Event Date:</label>
          <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />

          <label>Event Type:</label>
          <select name="eventType" value={formData.eventType} onChange={handleChange} required>
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Party">Party</option>
          </select>

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Location:</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />

          <button type="submit" className={styles.submitButton}>Create Profile</button>
        </form>
      )}
    </div>
  );
}
