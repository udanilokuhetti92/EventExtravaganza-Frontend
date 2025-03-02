import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

export default function GoogleMapComponent({ location }) {
  const [points, setPoints] = useState([]); // To store the coordinates
  const [error, setError] = useState(null); // To store error message


  const containerStyle = {
    width: "50%",
    height: "300px",
  };

  const center = {
    lat: 7.290572, // Default center
    lng: 80.633728,
  };

  useEffect(
    function () {
      if (!location) return; // Don't fetch if no location

      async function fetchLocation() {
       

        try {
          const response = await axios.get(
            `http://localhost:5000/planner/getAll?city=${location}`
          );

          if (response.data.length === 0) {
           

            setError("No event planners found in this location."); // Set error if no data
          } else {
            const locationData = [];
            for (let i = 0; i < response.data.length; i++) {
              locationData.push({
                lat: response.data[i].latitude,
                lng: response.data[i].longitude,
              });
            }

            setPoints(locationData);
            setError(null); // Clear any previous errors
          
          }
        } catch (error) {
          setError("Error fetching location data. Please try again."); // Set error message
        } finally {
        
        }
      }

      fetchLocation();
    },
    [location] // Re-run when location changes
  );

  
  return (
    <div>
      {error && <div style={{ color: "red" }}>{error}
    </div>} 
     
     
      
  <div className="test">
  {!error && points.length > 0 && (
        <LoadScript googleMapsApiKey="AIzaSyCMZnyi5d0x6b-x0zvDPLXPogYe9PbstXQ">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
            {points.map((point, index) => (
              <MarkerF key={index} position={point} />
            ))}
          </GoogleMap>
        </LoadScript>
      )}
  </div>
    </div>
  );
}

