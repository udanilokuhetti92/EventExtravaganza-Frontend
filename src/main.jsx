import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BudgetFiltering from './budget_filtering/budget_filtering'
import Checklist from './checklist/checklist'
import Home_page from './components/home_page/home_page'
import Home from './components/home_page/home'
import Event_Organizer_Login from './components/log_in/event_organizer_login/event_organizer_login'
import Event_Planner_Login from './components/log_in/event_planner_login/event_planner_login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>

        <Route path='/' element={<Home_page/>} />
        <Route path='/organizer_login' element={<Event_Organizer_Login/>} />
        <Route path='/planner_login' element={<Event_Planner_Login/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Budget_Filtering' element={<BudgetFiltering/>} />
        {/* <BudgetFiltering/> */}
        {/* {<Checklist/>} */}
      </Routes>
    </Router>
    
  </StrictMode>
)
