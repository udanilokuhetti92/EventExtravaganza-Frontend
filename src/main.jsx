import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.jsx";
import Ratings from "./rating_system/ratings.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/ratings" element={<Ratings />} />
      </Routes>

    </Router>
  </React.StrictMode>
);

