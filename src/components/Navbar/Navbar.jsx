import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images1/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="container flex-apart">
          <div className="logo">
            <img src={Logo} alt="" className="logos" />
          </div>
          <div className="navigation">
            <ul className="flex-apart">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Contact</li>

              <li>
                <button className="btn">SIGN IN</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
