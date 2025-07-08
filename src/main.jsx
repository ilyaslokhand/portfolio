import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Components/Hero.jsx'
import Work from './Components/Work.jsx'
import React from 'react'
import Expertise from './Components/Expertise.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
    <Work/>
    <Expertise/>
  </StrictMode>,
)
