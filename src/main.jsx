import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BudgetFiltering from './budget_filtering/budget_filtering';
import { Star } from "lucide-react";
import HomePage from './components/home_page/home_page';
import EventOrganizerLogin from './components/log_in/event_organizer_login/event_organizer_login';
import EventPlannerLogin from './components/log_in/event_planner_login/event_planner_login';
import Navigation from './components/navigation/navigation';
import EventPlannerProfile from './components/event_planner_profile/event_planner_profile';
import LocationFiltering from './location_filtering/location_filtering';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/budget-filtering" element={<BudgetFiltering />} />
        <Route path="/organizer-login" element={<EventOrganizerLogin />} />
        <Route path="/planner-login" element={<EventPlannerLogin />} />
        <Route path="/profile" element={<EventPlannerProfile />} />
        <Route path="/LocationBase_Filtering" element={<LocationFiltering/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
