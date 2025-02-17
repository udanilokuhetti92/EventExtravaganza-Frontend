import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Chatbot from './chatbot/chatbot'
import Navigation from './navigation/navigation'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {<Chatbot /> }
    {<Navigation />}
    
    
  </StrictMode>
)
