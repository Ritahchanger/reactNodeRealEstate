import React from "react";
import "./AboutContent.css";
import aboutImage from "../../assets/images2/immio.jpg";
const AboutContent = () => {
  return (
    <div className="about-content container">
      <div className="row flex">
        <div className="col">
          <p className="header">Our<br/>agency Story</p>
          <p className="header-description">Check out our agency story and work process</p>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip.
          </p>
          <button className="custom-btn">More About Us</button>
        </div>
        <div className="col">
          <img src={aboutImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
