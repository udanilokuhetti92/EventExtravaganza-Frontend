import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import BudgetFiltering from './budget_filtering/budget_filtering';
import HomePage from './components/home_page/home_page';
import EventOrganizerLogin from './components/log_in/event_organizer_login/event_organizer_login';
import EventPlannerLogin from './components/log_in/event_planner_login/event_planner_login';
import Navigation from './components/navigation/navigation';
import EventPlannerProfile from './components/event_planner_profile/event_planner_profile';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      {/* <Home/> */}
      {/* {<Event_Organizer_Signin/>} */}
      {/* {<Event_Planner_Signin/>} */}
      {/* {<BudgetFiltering/>} */}
      {/* {<Home_PAGE/>} */}
      {/* {<Navigation/>} */}
      {/* {<Packages/>}  */}
      {/* {<Event_Organizer_Signin/>} */}
      <Routes>

        <Route path='/' element={<Home_page/>} />
        <Route path='/organizer_login' element={<Event_Organizer_Login/>} />
        <Route path='/planner_login' element={<Event_Planner_Login/>} />
        <Route path='/organizer_signin' element={<Event_Organizer_Signin/>}/>
        <Route path='/planner_signin' element={<Event_Planner_Signin/>}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Budget_Filtering' element={<BudgetFiltering/>} />
        <Route path='/Home_PAGE' element={<Home_PAGE/>} />
        <Route path='/Packages' element={<Packages/>} />
        <Route path='/Checklist' element={<Checklist/>} />

        {/* { <EventInvitation/> }
        { <BudgetFiltering/> }
        { <Checklist/> } */}
      </Routes>
    </Router>
  </StrictMode>
);
