import React from "react";
import Navbar from "./Navbar";
import one from "../img/one-removebg-preview.png";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero-section">
        <div className="left">
          <h1>Think. Make. Solve.</h1>
          <div>
            <img src="" alt="line" />
            <p>What we Do</p>
          </div>
          <p>
            we enjoy creating delightful, human-centered digital experiences.
          </p>
          <button>Learn More</button>
        </div>
        <div className="right">
          <img src={one} alt="image over 3d model" className="hero-right-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
