import React, { useState } from "react";
import validate from "../../validateInfo";
import useForm from "../../useForm";
import "../../Form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import jwt from "jwt-decode";

const SignIn = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [UserRoles] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(username, password).then(
        (response) => {
          console.log(response);
          const tokenData = jwt(response.token);
          console.log(tokenData);
          localStorage.setItem("token", JSON.stringify(response.token));
          if (tokenData.UserRoles == "Admin") {
            console.log("Hello");
            navigate("/admin-dashboard");
          } else {
            navigate("/");
          }
        },
        (error) => {
          window.alert("you are failed to sign in");
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form-content-right">
        <form onSubmit={handleLogin} className="form" noValidate>
          <h1>Sign in to your account by filling out the information below.</h1>
          <div className="form-inputs">
            <label className="form-label">Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>

          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <button type="submit" className="form-input-btn">
            Sign In
          </button>
          <span className="form-input-login">
            Haven't an account? SignUp <a href="Sign-up">here</a>
          </span>
        </form>
      </div>
    </>
  );
};

export default SignIn;
