import "./Package.css";
import { subscriptions } from "../../Data/Subscription";
import Title from "../Title/Title";
const Package = () => {
  return (
    <div className="package">
      <div className="container">
        <Title
          title="Select Your Package"
          subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <div className="grid-package">
          {subscriptions.map((subscription) => (
            <div className="card">
              {subscription.type.toLowerCase() === "standard" ? (
                <button className="custom-btn">BEST VALUE</button>
              ) : null}

              <p className="type">{subscription.type}</p>
              <p className="amount">{subscription.amount}</p>
              <p className="subscription">{subscription.subscription}</p>
              <ul className="card-ul">
                {subscription.services.map((service, index) => (
                  <li key={index}>
                    <p>{service}</p>
                  </li>
                ))}
              </ul>
              <button className="custom-btn">START {subscription.type}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
