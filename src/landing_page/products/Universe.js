import React from "react";
import { NetworkMark } from "../Illustrations";

const universeData = [
  {
    tone: "accent",
    name: "Meridian AMC",
    description:
      "Our asset management arm, building simple low-cost index funds so long-term saving doesn't need a finance degree.",
  },
  {
    tone: "coral",
    name: "OptionEdge",
    description:
      "An options analytics platform for building strategies, tracking positions, and reading open interest without fifteen browser tabs.",
  },
  {
    tone: "accent",
    name: "Northlight Research",
    description:
      "Independent research on stocks, sectors, and supply chains, written for people who want the reasoning, not just the rating.",
  },
  {
    tone: "coral",
    name: "Meridian AMC",
    description:
      "Our asset management arm, building simple low-cost index funds so long-term saving doesn't need a finance degree.",
  },
  {
    tone: "accent",
    name: "OptionEdge",
    description:
      "An options analytics platform for building strategies, tracking positions, and reading open interest without fifteen browser tabs.",
  },
  {
    tone: "coral",
    name: "Northlight Research",
    description:
      "Independent research on stocks, sectors, and supply chains, written for people who want the reasoning, not just the rating.",
  },
];

function Universe() {
  return (
    <section className="section-flux">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5 px-3">
          <div className="eyebrow justify-content-center">Ecosystem</div>
          <h1 className="display-flux-md">The Flux Network</h1>
          <p className="mt-3">
            Extend your trading and investing beyond one app, without leaving
            people you trust.
          </p>
        </div>

        {/* Cards */}
        <div className="row gy-4 text-center">
          {universeData.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card-flux">
                <div className="d-flex justify-content-center mb-3">
                  <NetworkMark tone={item.tone} />
                </div>
                <h4 className="mb-2" style={{ fontSize: "1.05rem" }}>{item.name}</h4>
                <p className="px-2 mb-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Universe;
