import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './ContactForm.jsx'
import ContactForm from './ContactForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContactForm/>
  </StrictMode>,
)
