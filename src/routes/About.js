import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Heroimage2 from '../components/Heroimage2';
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <div>
    <Navbar />
    <Heroimage2 heading="About" text="I am a lerner and trying to build projects"/>
    <AboutContent />
   <Footer />
   </div>
  )
}

export default About
