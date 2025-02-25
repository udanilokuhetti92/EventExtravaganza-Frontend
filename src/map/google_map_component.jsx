import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

export default function GoogleMapComponent() {
  const containerStyle = {
    width: "50%",
    height: "300px",
  };

  const center = {
    lat: 7.290572, // Latitude (San Francisco)
    lng: 80.633728, // Longitude
  };

  const points = [
    { lat: 37.7749, lng: -122.4194 },
    { lat: 37.7849, lng: -122.4294 },
    { lat: 37.7649, lng: -122.4094 },
    { lat: 37.7549, lng: -122.4394 },
  ];
  

  return (
    <LoadScript googleMapsApiKey="AIzaSyCMZnyi5d0x6b-x0zvDPLXPogYe9PbstXQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
      {/* <MarkerF position={{ lat: 37.7749, lng: -122.4194 }} /> */}
      {points.map((point, index) => (
          <MarkerF key={index} position={point} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}