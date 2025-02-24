import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BudgetFiltering from "./budget_filtering/budget_filtering";
import EventOrganizerProfile from "./components/event_organizer_profile/event_organizer_profile";
import Navigation from "./components/navigation/navigation";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<BudgetFiltering />} />
        <Route path="/event-organizer-profile" element={<EventOrganizerProfile />} />
      </Routes>
    </Router>
  </StrictMode>
);
