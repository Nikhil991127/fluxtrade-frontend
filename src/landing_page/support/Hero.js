import React from "react";

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
];

const featuredLinks = [
  "Current Takeovers and Delisting - November 2025",
  "Latest Intraday leverages - MIS & CO",
];

function Hero() {
  return (
    <section
      id="supportHero"
      className="container-fluid py-5 mt-5"
    >
      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <h1 className="fs-3 mb-0">Support Portal</h1>
          <a href="#" className="fs-5 text-decoration-none">
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
              className="form-control mb-3"
              placeholder="Eg. how do I activate F&O"
            />

            <div className="d-flex flex-wrap gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-decoration-none fs-6"
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
                  <a href="#" className="text-decoration-none">
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
