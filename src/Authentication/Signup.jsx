import React, { useState } from "react";
import "./authentication.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [emailFound, setEmailFound] = useState(false);
  const [formData, setFormData] = useState({
    sirName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    sirName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailFound(false);
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formData.sirName) {
      newErrors.sirName = "Please enter your Sirname.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Please enter your Lastname.";
    }
    if (!formData.email) {
      newErrors.email = "Please enter your email.";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phoneNo) {
      newErrors.phoneNo = "Please enter your phone number.";
    } else if (formData.phoneNo.length < 10) {
      newErrors.phoneNo = "Phone number should be 10";
    }
    if (!formData.password) {
      newErrors.password = "Please enter your password.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/users/signup/",
          {
            sirName: formData.sirName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNo: formData.phoneNo,
            password: formData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const backendData = response.data;
        console.log(backendData);

        backendData.emailFound ? setEmailFound(true) : setEmailFound(false);

        navigate("/login")
      } catch (error) {
        console.log("Error occured in fetching the data from the backend");
      }
    }
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="signup">
      <div className="container">
        <p className="form-title">
          <a href="#">SIGNUP</a>
        </p>
        <form
          onSubmit={handleSubmit}
          className="authentication-form"
          noValidate
        >
          <div className="row">
            <div className="input-group">
              <p>Sirname</p>
              <input
                type="text"
                name="sirName"
                value={formData.sirName}
                onChange={handleChange}
              />
              {errors.sirName && (
                <p className="error" style={{ color: "red" }}>
                  {errors.sirName}
                </p>
              )}
            </div>
            <div className="input-group">
              <p>Lastname</p>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="error" style={{ color: "red" }}>
                  {errors.lastName}
                </p>
              )}
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
            {errors.email && (
              <p className="error" style={{ color: "red" }}>
                {errors.email}
              </p>
            )}

            {emailFound && (
              <p className="error" style={{ color: "red" }}>
                We already have this user!
              </p>
            )}
          </div>
          <div className="input-group">
            <p>Phone No</p>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
            />
            {errors.phoneNo && (
              <p className="error" style={{ color: "red" }}>
                {errors.phoneNo}
              </p>
            )}
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
              {errors.password && (
                <p className="error" style={{ color: "red" }}>
                  {errors.password}
                </p>
              )}
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
                <p className="error" style={{ color: "red" }}>
                  {errors.confirmPassword}
                </p>
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
