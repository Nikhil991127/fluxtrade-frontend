
 //retrieved
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <section className="container my-5">
      <ToastContainer />

      {/* Header */}
      <div className="text-center mb-5 px-3">
        <h1 className="text-muted fw-bold">
          Open a free demat and trading account online
        </h1>
        <p className="fs-5 text-muted">
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </p>
      </div>

      {/* Content */}
      <div className="row align-items-center gy-4">

        {/* Image */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src="media/images/signup.png"
            alt="Signup"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Form */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm p-4">
            <h2 className="mb-4 text-center">Signup Now</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  value={newUser.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={newUser.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Create Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={newUser.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="btn btn-primary btn-lg w-100">
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
