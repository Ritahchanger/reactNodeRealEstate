import Title from "../../Title/Title";
import "./collections.css";
import Slider from "react-slick";
import estate1 from "../../../assets/houses/etsate3r.jpg";
import estate2 from "../../../assets/houses/estate (1).jpeg";
import estate3 from "../../../assets/houses/estate3r1..jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const collections = () => {
  var settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll:2, 
  };
  return (
    <div className="collections">
      <div className="container">
        <Title title="100,0000$ plus" subtitle="JOIN ELEGANT DESIGNS FOR DECORATED FUTURE" />
        <div className="collections-grid">
          <Slider {...settings}>
            <div className="card-service">
              <div className="img-wrapper">
                <img src={estate3} alt="" />
              </div>
              <div className="card-description">
                <p>Midoroko Buildings</p>
                <p><a href="#" className="price">134.00$</a></p>
              </div>
            </div>
            <div className="card-service">
              <div className="img-wrapper">
                <img src={estate1} alt="" />
              </div>
              <div className="card-description">
                <p>Midoroko Buildings</p>
                <p><a href="#" className="price">129.00$</a></p>
              </div>
            </div>
            <div className="card-service">
              <div className="img-wrapper">
                <img src={estate2} alt="" />
              </div>
              <div className="card-description">
                <p>Lusaka Estate</p>
                <p><a href="#" className="price">99.00$</a></p>
              </div>
            </div>
            <div className="card-service">
              <div className="img-wrapper">
                <img src={estate3} alt="" />
              </div>
              <div className="card-description">
                <p>PiO Appartments</p>
                <p><a href="#" className="price">106.00$</a></p>
              </div>
            </div>
            <div className="card-service">
              <div className="img-wrapper">
                <img src={estate1} alt="" />
              </div>
              <div className="card-description">
                <p>MeryLin Buildings</p>
                <p><a href="#" className="price">109.00$</a></p>
              </div>
            </div>
            <div className="card-service">
              <div className="img-wrapper">
                <img src={estate3} alt="" />
              </div>
              <div className="card-description">
                <p>Midoroko Buildings</p>
                <p><a href="#" className="price">110.00$</a></p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default collections;
