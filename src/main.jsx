import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BudgetFiltering from './budget_filtering/budget_filtering'
import Home_page from './components/home_page/home_page'
import Event_Organizer_Login from './components/log_in/event_organizer_login/event_organizer_login'
import Event_Planner_Login from './components/log_in/event_planner_login/event_planner_login'
import Navigation from './components/navigation/navigation'
import EventOrganizerProfile from './components/event_organizer_profile/event_organizer_profile'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/budget-filtering" element={<BudgetFiltering />} />
        <Route path="/organizer-login" element={<Event_Organizer_Login />} />
        <Route path="/planner-login" element={<Event_Planner_Login />} />
        <Route path="/profile" element={<EventOrganizerProfile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)