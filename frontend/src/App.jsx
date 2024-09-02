import React from "react"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Process from "./components/Process"
import Footer from "./components/Footer"
import WhyUs from './components/WhyUs'

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Process />
      <Services />
      <Testimonials />
      <WhyUs />
      <Footer />
    </div>
  )
}

export default App
