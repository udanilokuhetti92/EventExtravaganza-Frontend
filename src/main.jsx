import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BudgetFiltering from './budget_filtering/budget_filtering'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BudgetFiltering/>
  </StrictMode>
)
