import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Login() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3004/login", userInfo);
      if (res.data.success) {
        toast.success(res.data.message);
        login(res.data.token, res.data.user);
        setTimeout(() => {
          navigate("/");
        }, 2000)

      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occurred during login. Please try again.");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center"
      style={{ paddingTop: "12rem", paddingBottom: "6rem" }}
    >
      <div className="col-12 col-md-6 col-lg-5">
        <div className="eyebrow justify-content-center">Welcome back</div>
        <h1 className="display-flux-md mb-4 text-center">Login</h1>
        <div className="auth-card-flux">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label-flux">
                Email address
              </label>
              <input
                type="email"
                className="form-control-flux"
                name="email"
                aria-describedby="emailHelp"
                value={userInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label-flux">
                Password
              </label>
              <input
                type="password"
                className="form-control-flux"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn-flux btn-flux-full">
              Login
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;
