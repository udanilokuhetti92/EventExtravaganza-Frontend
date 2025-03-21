import React, { useState } from "react";
import Navigation from "../components/navigation/navigation";
import styles from "../location_filtering/location_filtering.module.css";
import GoogleMapComponent from "../map/google_map_component";

export default function LocationFiltering() {
  const [eventPlanners, setEventPlanners] = useState([]);
  const [location, setLocation] = useState("");
  const [searchedLocation, setSearchedLocation] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to receive data from child
  const handlePlannerData = (data) => {
    setIsLoading(false);
    if (Array.isArray(data)) {
      console.log("Received event planners:", data.length);
      setEventPlanners(data);
    } else {
      console.error("Invalid data received: ", data);
      setEventPlanners([]);
    }
  };

  function handleSearch() {
    if (!location.trim()) {
      alert("Please enter a valid location.");
      return;
    }
    setIsLoading(true);
    setSearchedLocation(location);
  }

  // Handle Enter key press in search input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="box1">
      <div className="container">
        <Navigation />
        <h3 className="h3">
          <span className={styles["green-pipe"]}>|</span> Extravaganza Unit
        </h3>
        <p className={styles.p1}>
          Loved By Event Organizers.
          <br />
          Built for <span className={styles["box-text"]}>Location Filtering</span>
        </p>

        {/* Accordion */}
        <div className={styles.accordion}>
          <button
            className={styles.accordionButton}
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          >
            About Location Filtering {isAccordionOpen ? "▲" : "▼"}
          </button>
          {isAccordionOpen && (
            <div className={styles.accordionContent}>
              <p>
                Finding the perfect event planner within your area. Simply <br />
                enter your location, and our system will instantly display a list of
                available event planners.
              </p>
            </div>
          )}
        </div>

        {/* Search Input */}
        <div className={styles.searchContainer}>
          <label className={styles.span1} htmlFor="location-input">
            Location:
          </label>
          <input
            id="location-input"
            className="input1"
            type="text"
            placeholder="Enter Your Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={handleKeyPress}
            aria-label="Enter your location"
          />
          <button
            className="button1"
            onClick={handleSearch}
            disabled={isLoading}
            aria-label="Search for event planners"
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        </div>

        {/* Google Map */}
        <div className={styles["google-map"]}>
          <GoogleMapComponent
            location={searchedLocation}
            sendEventPlanners={handlePlannerData}
          />
        </div>

        {/* Event Count */}
        <p className={styles["event-count"]}>
          Total Event Planners Found: {eventPlanners.length}
        </p>

        {/* Event Planners Table */}
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
                    <td>{planner.FullName || "No Data Available"}</td>
                    <td>{planner.City || "No Data Available"}</td>
                    <td>
                      {planner.profile ? (
                        <a
                          href={planner.profile}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Profile
                        </a>
                      ) : (
                        "No Profile Available"
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    {searchedLocation ? "No event planners found" : "Search for a location to see event planners"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}