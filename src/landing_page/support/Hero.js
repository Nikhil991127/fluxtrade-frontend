import React from "react";

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Pulse user manual",
];

const featuredLinks = [
  "Current Takeovers and Delisting - November 2025",
  "Latest Intraday leverages - MIS & CO",
];

function Hero() {
  return (
    <section
      className="container-fluid hero-support-flux"
      style={{ paddingTop: "8rem", paddingBottom: "3rem" }}
    >
      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <h1 className="display-flux-md mb-0">Support Portal</h1>
          <a href="#" className="link-flux">
            Track Tickets
          </a>
        </div>

        {/* Content */}
        <div className="row gy-4">

          {/* Left Section */}
          <div className="col-12 col-lg-6">
            <h2 className="fs-4 mb-3">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <input
              type="text"
              className="form-control-flux mb-3"
              placeholder="Eg. how do I activate F&O"
            />

            <div className="d-flex flex-wrap gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="fs-6"
                  style={{ color: "var(--text-dim)", textDecoration: "none" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-lg-6">
            <h2 className="fs-4 mb-3">Featured</h2>
            <ol className="ps-3">
              {featuredLinks.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href="#" style={{ color: "var(--text-dim)", textDecoration: "none" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ol>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
