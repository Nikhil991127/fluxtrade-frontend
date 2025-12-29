import React from "react";

const pricingData = [
  {
    price: "₹0",
    description: "Free equity delivery and direct mutual funds",
  },
  {
    price: "₹20",
    description: "Intraday and F&O",
  },
];

function Pricing() {
  return (
    <section className="container my-5">
      <div className="row align-items-center gy-4">

        {/* Left Content */}
        <div className="col-12 col-lg-5 text-center text-lg-start">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="text-decoration-none fw-semibold">
            See pricing{" "}
            <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>
        </div>

        {/* Pricing Cards */}
        <div className="col-12 col-lg-7">
          <div className="row g-3 text-center">

            {pricingData.map((item, index) => (
              <div key={index} className="col-12 col-sm-6">
                <div className="border rounded p-4 h-100">
                  <h1 className="mb-3">{item.price}</h1>
                  <p className="mb-0">{item.description}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
