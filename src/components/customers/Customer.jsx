import React from "react";
import Title from "../Title/Title";
import FirstImage from "../../assets/images1/customer/team-1.jpg";
import "./Customer.css"
import { customerData } from "../../Data/Customer";

const Customer = () => {
  return (
    <div className="customers">
      <div className="container">
        <Title
          title="Our Featured Agents"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <div className="customer-grid">
          {customerData.map((customer) => (
            <div className="card">
              <button className="custom-btn">{customer.listings}</button>
              <div className="customer-img">
                <img src={customer.urlImage} />
                <p>
                  <span className="location icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  {customer.location}
                </p>
                <p>{customer.customerName}</p>
                <p className="social-media">
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-twitter"></i>
                </p>
                <div className="view-btns">
                  <button class="btn"><i class="fa-solid fa-message"></i></button>
                  <button class="btn"><i class="fa-solid fa-phone"></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
