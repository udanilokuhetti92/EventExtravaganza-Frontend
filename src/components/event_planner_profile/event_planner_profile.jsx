import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import styles from './event_planner_profile.module.css';

export default function EventPlannerProfile() {
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
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Amazing event planner! Made our wedding day perfect. Very professional and attentive to details.",
        date: "2024-02-15"
      },
      {
        id: 2,
        name: "Jane Smith",
        rating: 4,
        comment: "Very organized and helped us stay within our budget. Great communication throughout the process.",
        date: "2024-02-10"
      },
      {
        id: 3,
        name: "Mike Wilson",
        rating: 5,
        comment: "Exceptional service! Our corporate event was flawless thanks to Sarah's expertise.",
        date: "2024-02-05"
      }
    ]
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? styles.starFilled
            : styles.starEmpty
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
            <div className={styles.stars}>
              {renderStars(plannerData.rating)}
            </div>
            <span className={styles.ratingText}>
              {plannerData.rating} out of 5
            </span>
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
            <div className={styles.reviewsContainer}>
              {plannerData.reviews.map((review) => (
                <div key={review.id} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <h3 className={styles.reviewerName}>{review.name}</h3>
                    <div className={styles.reviewStars}>
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className={styles.reviewComment}>{review.comment}</p>
                  <span className={styles.reviewDate}>
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}