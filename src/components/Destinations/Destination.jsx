import Title from "../Title/Title";
import "./Destination.css";
import { destinations } from "../../Data/DestinationsSheet";
const Destination = () => {
  return (
    <div className="destination">
      <div className="container">
        <Title
          title="Explore By Location"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <div className="destination-grid">
          {destinations.map((destination) => (
            <div className="card">
              <div className="img-wrapper">
                <img src={destination.imgUrl} alt="" className="src" />
              </div>
              <div className="overlay">
                <p>
                  <span>Villas {destination.villas}</span>Offices{" "}
                  {destination.offices}
                  <span>
                    Apartments
                    {destination.apartments}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
