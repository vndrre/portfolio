import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CustomCursor from './components/CustomCursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='hidden md:hidden lg:flex'>
      <CustomCursor />
    </div>
    <App />
  </StrictMode>,
)
