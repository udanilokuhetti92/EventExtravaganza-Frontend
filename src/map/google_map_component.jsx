import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

export default function GoogleMapComponent({ location,sendEventPlanners}) {
  const [points, setPoints] = useState([]); // To store the coordinates
  const [error, setError] = useState(null); // To store error message
  const [center, setCenter] = useState({ lat: 7.290572, lng:  80.633728 });

  const containerStyle = {
    width: "50%",
    height: "300px",
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
            sendEventPlanners([]);

            setError("No event planners found in this location."); // Set error if no data
          } else {
            // eventPlanners = response.data;
            sendEventPlanners( response.data);
            const locationData = [];
            for (let i = 0; i < response.data.length; i++) {
              locationData.push({
                lat: parseFloat( response.data[i].latitude),
                lng: parseFloat(response.data[i].longitude),
              });
            }
            const calculatedCenter = getCenter(locationData);
            setCenter(calculatedCenter); 
            setPoints(locationData);
            setError(null); // Clear any previous errors
          
          }
        } catch (error) {
          setError("Error fetching location data. Please try again."); // Set error message
        } finally {
        
        }
      }
      function getCenter(locations) {
        if (locations.length === 0) return null;
      
        let totalLat = 0, totalLng = 0;
      
        locations.forEach(loc => {
          totalLat += loc.lat;
          totalLng += loc.lng;
        });
      
        const center = {
          lat: totalLat / locations.length,
          lng: totalLng / locations.length
        };
      
        return center;
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

