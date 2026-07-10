import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AreaPanel } from "../Illustrations";

function Signup() {
  const [newUser, setNewUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3004/signup", newUser);
      toast.success(res.data.message);

      setNewUser({
        fullName: "",
        email: "",
        password: "",
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <section className="container" style={{ paddingTop: "9rem", paddingBottom: "4rem" }}>
      <ToastContainer />

      {/* Header */}
      <div className="text-center mb-5 px-3">
        <div className="eyebrow justify-content-center">Get started</div>
        <h1 className="display-flux-md">
          Open a free demat and trading account online
        </h1>
        <p className="fs-5">
          Start investing brokerage free and join a growing community of
          traders who wanted something quieter.
        </p>
      </div>

      {/* Content */}
      <div className="row align-items-center gy-4">

        {/* Illustration */}
        <div className="col-12 col-lg-6">
          <AreaPanel label="NEW ACCOUNTS // THIS MONTH" tone="coral" seed={1} height={280} />
        </div>

        {/* Form */}
        <div className="col-12 col-lg-6">
          <div className="auth-card-flux">
            <h2 className="mb-4 text-center display-flux-md">Signup now</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label-flux">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control-flux"
                  value={newUser.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label-flux">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control-flux"
                  value={newUser.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label-flux">
                  Create password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control-flux"
                  value={newUser.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="btn-flux btn-flux-full">
                Signup
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Signup;
