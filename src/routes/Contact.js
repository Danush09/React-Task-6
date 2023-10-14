import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Heroimage2 from '../components/Heroimage2';
import Form from '../components/Form';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="CONTACT" text="Contact me for any works" />
      <Form />
   <Footer />
    </div>
  )
}

export default Contact
