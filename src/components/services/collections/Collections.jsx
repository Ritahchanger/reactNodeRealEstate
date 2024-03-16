import Title from "../../Title/Title";
import "./collections.css";
import  servicesFrom from"../../../assets/images2/pricing.jpg"
const collections = () => {
  return (
    <div className="collections">
      <div className="container">
        <Title title="Collections" subtitle="SAMPLES OF WHAT WE HAVE" />
        <div className="grid">
          <div className="card-service">
            <div className="img-wrapper">
              <img src={servicesFrom} alt=""/>
            </div>
            <div className="card-description">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default collections;
