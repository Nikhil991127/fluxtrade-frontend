import React from "react";

function Education() {
  return (
    <section className="container mt-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
          <img
            src="media/images/education.svg"
            alt="Market Education"
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-lg-6">
          <h1 className="mb-3 fs-2 text-center text-lg-start">
            Free and open market education
          </h1>

          <p className="text-center text-lg-start">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <div className="text-center text-lg-start mb-4">
            <a href="#" className="text-decoration-none fw-semibold">
              Varsity{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
          </div>

          <p className="text-center text-lg-start">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <div className="text-center text-lg-start">
            <a href="#" className="text-decoration-none fw-semibold">
              TradingQ&amp;A{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
