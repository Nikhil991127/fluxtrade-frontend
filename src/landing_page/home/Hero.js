import React from "react";
import TrendDivider from "../TrendDivider";
import { DashboardMock } from "../Illustrations";

const heroData = {
  title: "Trade with a clear head",
  description:
    "One platform for stocks, F&O, and mutual funds — built to stay out of your way, not compete for your attention.",
  buttonText: "Open free account",
};

function Hero() {
  return (
    <>
      <section className="container-fluid px-3 overflow-hidden" style={{ paddingTop: "9rem", paddingBottom: "3rem" }}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 text-center">

            <div className="eyebrow justify-content-center">Live markets, zero noise</div>

            <h1 className="display-flux mb-4">{heroData.title}</h1>

            <p className="mb-4 mx-auto" style={{ maxWidth: "540px", fontSize: "1.1rem" }}>
              {heroData.description}
            </p>

            <button className="btn-flux">
              {heroData.buttonText} <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>

            <div className="mt-5 text-start">
              <DashboardMock />
            </div>

          </div>
        </div>
      </section>
      <TrendDivider />
    </>
  );
}

export default Hero;
