import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logout successfully", {
      position: "top-right",
    });
  };

  const goToDashboard = (e) => {
    e.preventDefault();

    if (isAuthenticated) {
      window.location.href = "http://localhost:3001/";
    } else {
      toast.error("Please log in to access the dashboard", {
        position: "top-center",
        autoClose: 3000,
      });
      setTimeout(() => navigate("/login"), 1000);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top shadow-sm">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="media/images/stock logo.png"
            alt="logo"
            className="img-fluid"
            style={{ maxWidth: "45px" }}
          />
          <span className="ms-2 fw-bold">Fluxtrade</span>
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">

            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            )}

            {isAuthenticated && (
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="nav-link btn btn-link p-0"
                >
                  Logout
                </button>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

            {/* Dashboard CTA */}
            <li className="nav-item">
              <button
                className="btn btn-primary btn-sm"
                onClick={goToDashboard}
              >
                Dashboard
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
