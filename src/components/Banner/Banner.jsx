import "../../components/Banner/Banner";
import "./Banner.css";
const Banner = ({BannerImage,bannerTitle,pageExpectation}) => {
  return (
    <div className="banner">
        <img src={BannerImage} className="banner-image"/>
        <div className="banner-overlay">
        <div className="container">
        <p className="page-name-text">{bannerTitle}</p>
          <p className="page-expectation">
            {pageExpectation}
          </p>
          <button className="custom-btn">VISIT DEVELOPER</button>
        </div>
        </div>
    </div>
  );
};

export default Banner;
