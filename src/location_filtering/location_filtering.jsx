import React, { useState } from "react";
import Navigation from "../components/navigation/navigation";
import "../location_filtering/location_filtering.css";
import GoogleMapComponent from "../map/google_map_component";

export default function LocationFiltering() {
  const [location, setLocation] = useState(""); // State for input value
  const [searchLocation, setSearchLocation] = useState(""); // State for triggering API call

  function handleSearch() {
    setSearchLocation(location); // Update search location on button click
  }

  return (
    <div className="box1">
      <div className="container">
        <Navigation />
        <h3 className="h3">
          <span className="green-pipe">|</span> Extravaganza unit
        </h3>
        <p className="p1">
          Loved By Event Organizers.
          <br />
          Built for <span className="box-text">Location Filtering</span>
        </p>
        <p className="p2">
          Finding the perfect event planner within your area. Simply <br />
          enter your location, and our system will instantly display a list of
          available event planners in your area.
        </p>
        <div className="google-map">
          <GoogleMapComponent location={searchLocation} />
        </div>

        <span className="span1">Location:</span>
        <input
          className="input1"
          type="text"
          placeholder="Enter Your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)} // Update state on input change
        />
        <button className="button1" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
