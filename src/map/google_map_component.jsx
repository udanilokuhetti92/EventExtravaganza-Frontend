import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

export default function GoogleMapComponent() {
  const containerStyle = {
    width: "50%",
    height: "300px",
  };

  const center = {
    lat: 37.7749, // Latitude (San Francisco)
    lng: -122.4194, // Longitude
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCMZnyi5d0x6b-x0zvDPLXPogYe9PbstXQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <MarkerF position={{ lat: 37.7749, lng: -122.4194 }} />
      </GoogleMap>
    </LoadScript>
  );
}