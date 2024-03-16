import React, { useState } from "react";
import "./authentication.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Please enter your email.";
    }
    if (!formData.password) {
      newErrors.password = "Please enter your password.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="signup">
      <div className="container">
        <p className="form-title">
          <a href="#">LOGIN</a>
        </p>
        <form onSubmit={handleSubmit} className="authentication-form">
          <div className="input-group">
            <p>Email</p>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error" style={{color:"red"}}>{errors.email}</p>}
          </div>
          <div className="input-group">
            <p>Password</p>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
              {errors.email && <p className="error" style={{color:"red"}}>{errors.password}</p>}
          </div>

          <div className="input-group">
            <input type="submit" name="submit" value="LOGIN" />
          </div>
          <p className="authentication-linker">
            Dont have an account create one-?<Link to="/signup">SIGNUP</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
