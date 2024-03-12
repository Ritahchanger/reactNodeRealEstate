import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/images1/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavBar] = useState(false);
  const handleNavbar = () => {
    setShowNavBar(!showNavbar);
  };

  return (
    <div>
      <nav className="nav">
        <div className="container flex-apart">
          <div className="logo">
            <img src={Logo} alt="" className="logos" />
          </div>
          <div className={`navigation ${showNavbar ? 'active' : null }`}>
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
          <p className="menu-icon" onClick={handleNavbar}>
            <i class="fa-solid fa-bars"></i>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
