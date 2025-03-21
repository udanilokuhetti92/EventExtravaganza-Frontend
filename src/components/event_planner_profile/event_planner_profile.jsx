import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import RatingSystem from "../../rating_system/rating_system"; // Import rating system
import styles from "./event_planner_profile.module.css";
import Navigation from "../../event_planner_site/navigation/navigation";
import Footer from "../../event_planner_site/footer/planner_footer";
import { useNavigate } from 'react-router-dom';


export default function EventPlannerProfile() {

    const navigate = useNavigate();
  

  const plannerData = JSON.parse(localStorage.getItem('planner')) || {
    name: "Udani Lokuhetti",
    city: "Colombo",
    email: "udanilokuhetti22@gmail.com",
    contactNumber: "+94(76) 0876 502",
    gender: "Female",
    address: "123 Event Street, Colombo 07",
    speciality: "Wedding",
    budget: "200000",
  };


  return (
    <div>
      <Navigation/>
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <div className={styles.profileImageContainer}>
              <img
                src={plannerData.profilePicture || "/placeholder.svg"}
                alt={plannerData.name}
                className={styles.profileImage}
              />
            </div>
            <h1 className={styles.profileName}>{plannerData.name}</h1>
            
            <Link to="/Checklist" className={styles.checklistButton}>
              Go to Checklist
            </Link>
          </div>

          <div className={styles.profileInfo}>
            <div className={styles.infoSection}>
              <h2>Contact Information</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <label>Email:</label>
                  <p>{plannerData.email}</p>
                </div>
                <div className={styles.infoItem}>
                  <label>Phone:</label>
                  <p>{plannerData.contactNumber}</p>
                </div>
                <div className={styles.infoItem}>
                  <label>City:</label>
                  <p>{plannerData.city}</p>
                </div>
                <div className={styles.infoItem}>
                  <label>Address:</label>
                  <p>{plannerData.address}</p>
                </div>
              </div>
            </div>

            <div className={styles.infoSection}>
              <h2>Professional Details</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <label>Speciality:</label>
                  <p>{plannerData.speciality}</p>
                </div>
                <div className={styles.infoItem}>
                  <label>Budget Range:</label>
                  <p>LKR {parseInt(plannerData.budget).toLocaleString()}</p>
                </div>
                <div className={styles.infoItem}>
                  <label>Experience:</label>
                  <p>{plannerData.experience}</p>
                </div>
                <div className={styles.infoItem}>
                  <label>Gender:</label>
                  <p>{plannerData.gender}</p>
                  <button className={styles.b1} onClick={()=>navigate('/')}>Log out</button>
                  
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
