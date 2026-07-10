import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const tickerItems = [
  { label: "FLX50", value: "9,412.30", dir: "up" },
  { label: "VRTX", value: "2,204.85", dir: "down" },
  { label: "NOVA", value: "1,118.40", dir: "up" },
  { label: "ARIA", value: "764.20", dir: "up" },
  { label: "PLSM", value: "3,590.75", dir: "down" },
  { label: "GRDN", value: "512.60", dir: "up" },
];

function TickerRail() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker-rail">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className={item.dir === "up" ? "ticker-up" : "ticker-down"}>
            {item.label} {item.dir === "up" ? "▲" : "▼"} {item.value}
          </span>
        ))}
      </div>
    </div>
  );
}

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
      // The dashboard runs on a different origin, so it can't read this
      // origin's localStorage. Pass the token once via URL; the dashboard
      // adopts it into its own localStorage on load and strips it from the URL.
      const token = localStorage.getItem("token");
      window.location.href = token
        ? `http://localhost:3001/?token=${encodeURIComponent(token)}`
        : "http://localhost:3001/";
    } else {
      toast.error("Please log in to access the dashboard", {
        position: "top-center",
        autoClose: 3000,
      });
      setTimeout(() => navigate("/login"), 1000);
    }
  };

  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-flux">
        <div className="container-fluid px-4 py-2">

          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <span>Fluxtrade<span className="dot">.</span></span>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 align-items-lg-center">

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
                  className="btn-flux btn-flux-sm"
                  onClick={goToDashboard}
                >
                  Dashboard
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <TickerRail />
    </div>
  );
}

export default Navbar;
