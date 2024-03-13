import "../../components/Banner/Banner";
import BannerImage from "../../components/../assets/images2/about.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
        <img src={BannerImage} className="banner-image"/>
        <div className="banner-overlay">
        <div className="container">
        <p className="page-name-text">About Us</p>
          <p className="page-expectation">
            About Us - Who We Are?
          </p>
          <button className="custom-btn">VISIT DEVELOPER</button>
        </div>
        </div>
    </div>
  );
};

export default Banner;
