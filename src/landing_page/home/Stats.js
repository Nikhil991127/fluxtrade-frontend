import React from "react";

const statsData = [
  {
    title: "Customer-first always",
    description:
      "That's why customers trust FluxTrade with their equity investments.",
  },
  {
    title: "No spam or gimmicks",
    description:
      "No gimmicks, spam, gamification, or annoying push notifications. High quality apps you use at your pace.",
  },
  {
    title: "The universe",
    description:
      "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer tailored services.",
  },
  {
    title: "Do better with money",
    description:
      "With initiatives like Nudge and Kill Switch, we help you actively make better financial decisions.",
  },
];

function Stats() {
  return (
    <section className="container my-5">
      <div className="row align-items-center gy-4">

        {/* Text Section */}
        <div className="col-12 col-lg-6">
          <h1 className="fs-2 mb-4 text-center text-lg-start">
            Trust with confidence
          </h1>

          {statsData.map((item, index) => (
            <div key={index} className="mb-4">
              <h2 className="fs-5">{item.title}</h2>
              <p className="text-muted mb-0">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Image + CTA Section */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="FluxTrade Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%" }}
          />

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-4">
            <a href="#" className="text-decoration-none fw-semibold">
              Explore our products
              <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>

            <a href="#" className="text-decoration-none fw-semibold">
              Try Kite demo
              <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Stats;
