import React from "react";
import { AreaPanel } from "../Illustrations";

function Hero({
  title = "Built by traders, for traders",
  description = "We started Fluxtrade because the accounts we already had were working against us, not for us.",
  buttonText = "Open free account",
  onButtonClick,
}) {
  return (
    <section className="container-fluid px-3 overflow-hidden" style={{ paddingTop: "9rem", paddingBottom: "3rem" }}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 text-center">

          <div className="eyebrow justify-content-center">Who we are</div>

          {/* Text */}
          <h1 className="display-flux mb-3">{title}</h1>

          <p className="mb-4 mx-auto" style={{ maxWidth: "520px" }}>
            {description}
          </p>

          {/* CTA */}
          <button
            className="btn-flux mb-5"
            onClick={onButtonClick}
          >
            {buttonText} <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>

          <div className="text-start">
            <AreaPanel label="FLUXTRADE // ACCOUNTS SINCE LAUNCH" tone="accent" seed={0} height={240} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
