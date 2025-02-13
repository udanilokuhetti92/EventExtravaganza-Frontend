import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Chatbot from './chatbot/chatbot'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {<Chatbot /> }
    
  </StrictMode>
)
