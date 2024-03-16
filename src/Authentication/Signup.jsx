import React, { useState } from "react";
import "./authentication.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    sirname: "",
    lastname: "",
    email: "",
    idNo: "",
    phoneNo: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    sirname: "",
    lastname: "",
    email: "",
    idNo: "",
    phoneNo: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const newErrors = {};
    if (!formData.sirname) {
      newErrors.sirname = "Please enter your Sirname.";
    }
    if (!formData.lastname) {
      newErrors.lastname = "Please enter your Lastname.";
    }
    if (!formData.email) {
      newErrors.email = "Please enter your email.";
    }
    if (!formData.idNo) {
      newErrors.idNo = "Please enter your ID number.";
    }
    if (!formData.phoneNo) {
      newErrors.phoneNo = "Please enter your phone number.";
    }
    if (!formData.password) {
      newErrors.password = "Please enter your password.";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
  };

  return (
    <div className="signup">
      <div className="container">
        <p className="form-title">
          <a href="#">SIGNUP</a>
        </p>
        <form onSubmit={handleSubmit} className="authentication-form">
          <div className="row">
            <div className="input-group">
              <p>Sirname</p>
              <input
                type="text"
                name="sirname"
                value={formData.sirname}
                onChange={handleChange}
              />
              {errors.sirname && <p className="error"style={{color:"red"}}>{errors.sirname}</p>}
            </div>
            <div className="input-group">
              <p>Lastname</p>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
              {errors.lastname && <p className="error"style={{color:"red"}}>{errors.lastname}</p>}
            </div>
          </div>
          <div className="input-group">
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error"style={{color:"red"}}>{errors.email}</p>}
          </div>
          <div className="input-group">
            <p>Id no</p>
            <input
              type="text"
              name="idNo"
              value={formData.idNo}
              onChange={handleChange}
            />
            {errors.idNo && <p className="error"style={{color:"red"}}>{errors.idNo}</p>}
          </div>
          <div className="input-group">
            <p>Phone No</p>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
            />
            {errors.phoneNo && <p className="error"style={{color:"red"}}>{errors.phoneNo}</p>}
          </div>
          <div className="row">
            <div className="input-group">
              <p>Password</p>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error"style={{color:"red"}}>{errors.password}</p>}
            </div>
            <div className="input-group">
              <p>Confirm password</p>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error"style={{color:"red"}}>{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          <div className="input-group">
            <input type="submit" name="submit" value="SIGN UP" />
          </div>
          <p className="authentication-linker">
            Have an account-?<Link to="/login">LOGIN</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
