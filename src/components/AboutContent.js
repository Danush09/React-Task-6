import "./AboutContentStyles.css"
import React from 'react'
import {Link } from "react-router-dom";
import React1 from "../assests/react1.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>ABOUT Me</h1><br/>
            <p>I'm a web Devloper. I love to create websites.</p>
            <Link to="/Contact"><button className="btn">Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src={React1}  className="img" alt="image"/>
                </div>
                <div className="img-stack-bottom">
                    <img src={React1}  className="img" alt="image"/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
