import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BudgetFiltering from './budget_filtering/budget_filtering'
import Home_page from './components/home_page/home_page'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home_page/>
    {/* <BudgetFiltering/> */}
    
  </StrictMode>
)
