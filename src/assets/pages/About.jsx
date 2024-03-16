import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import AboutContent from "../../components/AboutContent/AboutContent";
import aboutImage from "../images2/about.jpg"

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner BannerImage={aboutImage} bannerTitle="About Us" pageExpectation="About Us - Who We Are" />
      <AboutContent/>
      <Footer />
    </div>
  );
};

export default About;
