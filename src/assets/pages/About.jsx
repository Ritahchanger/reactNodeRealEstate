import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import AboutContent from "../../components/AboutContent/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutContent/>
      <Footer />
    </div>
  );
};

export default About;
