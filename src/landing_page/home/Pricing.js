import React from "react";

const pricingData = [
  {
    price: "₹0",
    description: "Free equity delivery and direct mutual funds",
  },
  {
    price: "₹15",
    description: "Intraday and F&O",
  },
];

function Pricing() {
  return (
    <section className="section-flux bg-surface-flux">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* Left Content */}
          <div className="col-12 col-lg-5 text-center text-lg-start">
            <div className="eyebrow justify-content-center justify-content-lg-start">Pricing</div>
            <h1 className="display-flux-md mb-3">Unbeatable pricing</h1>
            <p className="mb-4">
              We pioneered the concept of discount broking and price transparency
              in India. Flat fees and no hidden charges.
            </p>

            <a href="#" className="link-flux">
              See pricing
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Pricing Cards */}
          <div className="col-12 col-lg-7">
            <div className="row g-3 text-center">

              {pricingData.map((item, index) => (
                <div key={index} className="col-12 col-sm-6">
                  <div className="card-flux">
                    <span className="stat-price">{item.price}</span>
                    <p className="mb-0">{item.description}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;
