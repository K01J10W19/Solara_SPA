import React from 'react'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Reason from './sections/Reason'
import Services from './sections/Services'
import Process from './sections/Process'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'


function App() {
  return (
    <div className='solara-bg ff-archivo min-vh-100 d-flex flex-column'>
      <Nav />
      <Hero />
      <Reason />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App