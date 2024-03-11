import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1 className="higher-title">
            Search your next
            <br />
            home
          </h1>
          <p>Find new & features property located in your local city</p>
        </div>


        <div className="search-home ">
            <div className="card">
                <p className="card-title">
                    City/Street
                </p>
                <input type="text" placeholder="Location" />
            </div>
            <div className="card">
                <p className="card-title">
                    Property/Type
                </p>
                <input type="text" placeholder="Property Type"/>
            </div>
            <div className="card">
                <p className="card-title">
                    Price Range
                </p>
                <input type="text" placeholder="Price Range" />
            </div>
            <div className="card">
                <p className="search_name">
                    Advanced Filter 
                </p>
                <button className="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
