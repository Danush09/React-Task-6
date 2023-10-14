import React from "react" ;
import "./Heroimagestyle.css";
import IntroImg from "../assests/intro-bg.jpg";
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'M A STUDENT.</p>   
            <h1>Web Devloper</h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn-light">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimage
