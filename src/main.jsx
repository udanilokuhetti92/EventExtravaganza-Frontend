import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {chatbot} from './chatbot/chatbot'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {chatbot}
  </StrictMode>
)
