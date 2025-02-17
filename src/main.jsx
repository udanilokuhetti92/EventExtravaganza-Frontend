import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BudgetFiltering from './budget_filtering/budget_filtering'
import Home_page from './components/home_page/home_page'
import Event_Organizer_Login from './components/log_in/event_organizer_login/event_organizer_login'
import Event_Planner_Login from './components/log_in/event_planner_login/event_planner_login'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home_page/>
    {/* <BudgetFiltering/> */}
    {/* <Event_Organizer_Login/> */}
    {/* <Event_Planner_Login/> */}
    
  </StrictMode>
)
