import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container" style={{ paddingTop: "12rem", paddingBottom: "6rem" }}>
      <div className="row text-center">
        <div className="eyebrow justify-content-center">Page not found</div>
        <h1 className="notfound-code mb-3">404</h1>
        <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
        <div>
          <Link to="/" className="btn-flux">Back to home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
