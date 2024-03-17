import util from "../../../assets/houses/commitee.cms";
import "./PropertyManagement.css";
const PropertyManagement = () => {
  return (
    <div className="propery-managemenet">
      <div className="container">
        <div className="row flex">
          <div className="col">
            <p className="column-sections-title">PROPERTY EVALUATIONS</p>
            <img src={util} alt="" />
          </div>
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quod optio officia explicabo vero sit quis
              necessitatibus reprehenderit porro eveniet alias labore id unde
              veritatis est iste voluptas quaerat, repellendus temporibus libero
              animi, perspiciatis recusandae debitis! Aliquid id necessitatibus
              blanditiis non laudantium optio, sit cupiditate, quas at est,
              eaque inventore nisi fugit facilis laboriosam minus praesentium?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagement;
