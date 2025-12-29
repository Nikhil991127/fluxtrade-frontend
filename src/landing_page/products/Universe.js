import React from "react";

const universeData = [
  {
    image: "media/images/dittoLogo.png",
    alt: "Zerodha Fundhouse",
    description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    image: "media/images/sensibullLogo.svg",
    alt: "Sensibull",
    description:
      "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    image: "media/images/dittoLogo.png",
    alt: "Rainmatter",
    description:
      "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
  },
  {
    image: "media/images/dittoLogo.png",
    alt: "Zerodha Fundhouse",
    description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    image: "media/images/sensibullLogo.svg",
    alt: "Sensibull",
    description:
      "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    image: "media/images/dittoLogo.png",
    alt: "Rainmatter",
    description:
      "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
  },
];

function Universe() {
  return (
    <section className="container my-5">

      {/* Header */}
      <div className="text-center mb-5 px-3">
        <h1 className="pt-4">The Zerodha Universe</h1>
        <p className="fs-6 mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Cards */}
      <div className="row gy-5 text-center">
        {universeData.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <img
              src={item.image}
              alt={item.alt}
              className="img-fluid mb-3"
              style={{ maxWidth: "180px" }}
            />
            <p className="px-3 text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Universe;
