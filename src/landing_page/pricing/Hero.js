import React from "react";

const chargesData = [
  {
    image: "media/images/pricingEquity.svg",
    title: "Free equity delivery",
    description:
      "All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.",
  },
  {
    image: "media/images/intradayTrades.svg",
    title: "Intraday and F&O trades",
    description:
      "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.",
  },
  {
    image: "media/images/pricingEquity.svg",
    title: "Free direct MF",
    description:
      "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.",
  },
];

function Hero() {
  return (
    <section className="container my-5">

      {/* Header */}
      <div className="text-center mb-5 px-3">
        <h1>Charges</h1>
        <h3 className="text-muted fs-5 mt-2">
          List of all charges and taxes
        </h3>
      </div>

      {/* Cards */}
      <div className="row gy-4 text-center">
        {chargesData.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid mb-3"
              style={{ maxWidth: "160px" }}
            />

            <h2 className="fs-5 mb-2">{item.title}</h2>

            <p className="text-muted px-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Hero;
