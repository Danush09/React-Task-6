import "./footerstyle.css"
import React from "react";

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
      <div className=" footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                <div>
                    <p>123 Housing Society.</p>
                    <p>India.</p>
                </div>
            </div>
            <div className="phone">
                <h4>               <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />1-2323-3434-23
</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />danushnaren04@gmail.com
</h4>
            </div>
        </div>


        <div className="right">
            <h4>About me</h4>
            <p>This is Danush, student and looking for internships. I enjoy devloping new web designs and prjects.</p>
            <div className="social">
            <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} />
            <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} />
            <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer 
