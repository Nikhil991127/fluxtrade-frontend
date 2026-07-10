import React from "react";

const chargesData = [
  {
    title: "Free equity delivery",
    description:
      "All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.",
  },
  {
    title: "Intraday and F&O trades",
    description:
      "Flat ₹15 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.",
  },
  {
    title: "Free direct MF",
    description:
      "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.",
  },
];

function Hero() {
  return (
    <section className="container" style={{ paddingTop: "9rem", paddingBottom: "3rem" }}>

      {/* Header */}
      <div className="text-center mb-5 px-3">
        <div className="eyebrow justify-content-center">Transparent by design</div>
        <h1 className="display-flux-md">Charges</h1>
        <p className="mt-2">
          List of all charges and taxes
        </p>
      </div>

      {/* Cards */}
      <div className="row gy-4 text-center">
        {chargesData.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card-flux">
              <span className="stat-price" style={{ fontSize: "1.4rem" }}>{item.title}</span>
              <p className="px-2 mb-0">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Hero;
