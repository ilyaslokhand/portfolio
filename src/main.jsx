import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Components/Hero.jsx'
import Work from './Components/Work.jsx'
import React from 'react'
import Expertise from './Components/Expertise.jsx'
import Testimonial from './Components/Testimonial.jsx'
import Footer from './Components/Footer.jsx'
import Header from './Components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero/>
    <Work/>
    <Expertise/>
    <Testimonial/>
    <Footer/>
  </StrictMode>,
)
