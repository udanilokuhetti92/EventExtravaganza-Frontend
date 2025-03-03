import React, { useState } from "react";
import Navigation from "../components/navigation/navigation";
import styles from "../location_filtering/location_filtering.module.css";
import GoogleMapComponent from "../map/google_map_component";

export default function LocationFiltering() {
  const [eventPlanners, setEventPlanners] = useState([]);
  const [location, setLocation] = useState("");
  const [searchedLocation, setSearchedLocation] = useState("");

  // Function to receive nameData from child
  const handlePlannerData = (data) => {
    if (Array.isArray(data)) {
      setEventPlanners(data); // Ensure data is an array before setting state
    } else {
      console.error("Invalid data received: ", data);
    }
  };

  function handleSearch() {
    setSearchedLocation(location); // Trigger search with the inputted location
  }

  return (
    <div className="box1">
      <div className="container">
        <Navigation />
        <h3 className="h3">
          <span className="green-pipe">|</span> Extravaganza Unit
        </h3>
        <p className={styles.p1}>
          Loved By Event Organizers.
          <br />
          Built for <span className={styles["box-text"]}>Location Filtering</span>
        </p>
        <p className={styles.p2}>
          Finding the perfect event planner within your area. Simply <br />
          enter your location, and our system will instantly display a list of
          available event planners.
        </p>
        <div className={styles["google-map"]}>
          <GoogleMapComponent
            location={searchedLocation}
            sendEventPlanners={handlePlannerData}
          />
        </div>

        <label className={styles.span1} htmlFor="location-input">Location:</label>
        <input
          id="location-input"
          className="input1"
          type="text"
          placeholder="Enter Your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          aria-label="Enter your location"
        />
        <button className="button1" onClick={handleSearch} aria-label="Search for event planners">
          Search
        </button>
        <p className="event-count">Total Event Planners Found: {eventPlanners.length}</p>

        <div className={styles.tablediv}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Event Planner Name</th>
                <th>City</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
              {eventPlanners.length > 0 ? (
                eventPlanners.map((planner, index) => (
                  <tr key={index}>
                    <td>{planner.FullName || "N/A"}</td>
                    <td>{planner.City || "N/A"}</td>
                    <td>
                      {planner.profile ? (
                        <a href={planner.profile} target="_blank" rel="noopener noreferrer">
                          View Profile
                        </a>
                      ) : (
                        "No Profile"
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>No event planners found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
