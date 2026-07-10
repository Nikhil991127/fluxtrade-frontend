import React from "react";
import { AreaPanel } from "../Illustrations";

const statsData = [
  {
    title: "Support that answers",
    description:
      "Real people, median first-response under four minutes, no ticket queue purgatory.",
  },
  {
    title: "No gamified dashboards",
    description:
      "No streaks, no confetti, no push notifications engineered to get you trading more.",
  },
  {
    title: "One connected network",
    description:
      "Research, options analytics, and asset management under one login, not five separate apps.",
  },
  {
    title: "Guardrails, not lectures",
    description:
      "Cooldown mode and position alerts step in before a bad day turns into a bad month.",
  },
];

function Stats() {
  return (
    <section className="section-flux">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* Text Section */}
          <div className="col-12 col-lg-6">
            <div className="eyebrow justify-content-center justify-content-lg-start">Why us</div>
            <h1 className="display-flux-md mb-4 text-center text-lg-start">
              Trust with confidence
            </h1>

            {statsData.map((item, index) => (
              <div key={index} className="mb-4" style={{ borderLeft: "2px solid var(--line)", paddingLeft: "1rem" }}>
                <h2 className="fs-5 mb-1">{item.title}</h2>
                <p className="mb-0">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Illustration + CTA Section */}
          <div className="col-12 col-lg-6">
            <AreaPanel label="NETWORK GROWTH" tone="accent" seed={1} height={260} />

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-4 mt-4">
              <a href="#" className="link-flux">
                Explore the network
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>

              <a href="#" className="link-flux">
                Try Pulse demo
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Stats;
