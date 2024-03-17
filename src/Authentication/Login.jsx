import React, { useState } from "react";
import "./authentication.css";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const [emailNotFound, setEmailFound] = useState(false);
  const [passwordNotFound, setPasswordFound] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setEmailFound(false);
    setPasswordFound(false);
  };
  const handleSubmit = async (event) => {
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
      try {
        const response = await axios.post(
          "http://localhost:8000/api/users/login/",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const backendData = response.data;

        !backendData.emailFound ? setEmailFound(true) : setEmailFound(false);
        !backendData.passwordFound
          ? setPasswordFound(true)
          : setPasswordFound(false);

        navigate('/');
      } catch (error) {
        console.log("Error occurred in fetching the data from the backend");
      }
    }
  };

  return (
    <div className="login-page" id="login-page">
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
            {errors.email && (
              <p className="error" style={{ color: "red" }}>
                {errors.email}
              </p>
            )}
            {emailNotFound ? (
              <p className="error" style={{ color: "red" }}>
                User not found
              </p>
            ) : (
              ""
            )}
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
            {errors.password && (
              <p className="error" style={{ color: "red" }}>
                {errors.password}
              </p>
            )}
            {passwordNotFound ? (
              <p className="error" style={{ color: "red" }}>
                Wrong password
              </p>
            ) : (
              ""
            )}
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

export default Login;
