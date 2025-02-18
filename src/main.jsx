import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./components/navigation/navigation.jsx";
import Ratings from "./rating_system/ratings.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        {/* Set Ratings as the default page */}
        <Route path="/" element={<Ratings />} />
        <Route path="/ratings" element={<Ratings />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
