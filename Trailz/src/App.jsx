import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Services from './Services.jsx'
import Team from './Team.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

function App() {
   return (
    <>
     <link rel="icon" type="image/png" href="GXz.png"></link>

    <Header />
    <Hero />
    <Services />
    <Team />
    <Projects /> 
    <Contact />
    <Footer />

    </>
  )
}

export default App
