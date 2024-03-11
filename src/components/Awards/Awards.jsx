import React from "react";
import "./Awards.css";
const Awards = () => {
  return (
    <div className="awards">
      <div className="container">
        <p className="small-title">Our Awards</p>
        <p className="awards-description">
          Over 1,24,000+ Happy User Bieng With
          <br />
          Us Still They Love Our Services
        </p>
        <div className="awards-grid">
          <div className="cards">
            <div className="box">
              <i class="fa fa-trophy"></i>
            </div>
            <p className="numbers">32 M</p>
            <p className="trophy-type">Blue Burmin Award</p>
          </div>
          <div className="cards">
            <div className="box">
              <i class="fa-regular fa-lightbulb"></i>
            </div>
            <p className="numbers">43 M</p>
            <p className="trophy-type">Mombasa Developers</p>
          </div>
          <div className="cards">
            <div className="box">
              <i class="fa fa-briefcase"></i>
            </div>
            <p className="numbers">51 M</p>
            <p className="trophy-type">Safaricom Tour</p>
          </div>
          <div className="cards">
            <div className="box">
              <i class="fa-solid fa-heart"></i>
            </div>
            <p className="numbers">42 M</p>
            <p className="trophy-type">Cocacola Coders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
