import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import RatingSystem from "../../rating_system/rating_system"; // Import rating system
import styles from "./event_planner_profile.module.css";

export default function EventPlannerProfile() {
  const [ratings, setRatings] = useState([
    {
      id: "1",
      rating: 5,
      comment:
        "Excellent attention to detail and great communication throughout the event planning process. The wedding was perfectly organized!",
      organizerName: "John Doe",
      createdAt: "2024-02-12T10:00:00Z",
    },
    {
      id: "2",
      rating: 4,
      comment:
        "Very professional and responsive. The corporate event was well-executed, though there were minor timing issues.",
      organizerName: "Pasan De Silva",
      createdAt: "2024-02-10T15:30:00Z",
    },
    {
      id: "3",
      rating: 4,
      comment:
        "Outstanding service! The birthday party exceeded our expectations. Every detail was perfect, from decorations to catering.",
      organizerName: "Sara Kalpani",
      createdAt: "2024-02-08T09:15:00Z",
    },
  ]);

  const plannerData = {
    name: "Sarah Johnson",
    profilePicture: "/placeholder.svg?height=200&width=200",
    city: "Colombo",
    email: "sarah.johnson@email.com",
    contactNumber: "+94 77 123 4567",
    gender: "Female",
    address: "123 Event Street, Colombo 07",
    speciality: "Wedding",
    budget: "200000",
    experience: "8 years",
    rating: 4.5,
  };

  const handleSubmitRating = (rating, comment) => {
    const newRating = {
      id: Date.now().toString(),
      rating,
      comment,
      organizerName: "Current User",
      createdAt: new Date().toISOString(),
    };

    setRatings((prevRatings) => [newRating, ...prevRatings]);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? styles.starFilled : styles.starEmpty
        }`}
      />
    ));
  };

  return (
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
          <div className={styles.ratingContainer}>
            <div className={styles.stars}>{renderStars(plannerData.rating)}</div>
            <span className={styles.ratingText}>{plannerData.rating} out of 5</span>
          </div>
          <Link to="/checklist" className={styles.checklistButton}>
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
              </div>
            </div>
          </div>

          <div className={styles.infoSection}>
            <h2>Reviews & Ratings</h2>
            <RatingSystem ratings={ratings} onSubmit={handleSubmitRating} />
            </div>
          </div>
      </div>
    </div>
  );
}
