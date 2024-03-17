import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/images1/logo.png";
import { Link } from "react-router-dom";

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
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <Link to="/signup"><button className="btn">SIGN IN</button></Link>
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
