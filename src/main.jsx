import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Chatbot from './chatbot/chatbot'
import Navigation from './chatbot/navigation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {<Chatbot /> }
    {<Navigation />}
  </StrictMode>
)
