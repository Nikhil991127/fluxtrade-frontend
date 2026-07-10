import React from "react";
import TrendDivider from "./TrendDivider";

const accountData = {
  title: "Open a FluxTrade account",
  description:
    "Modern platforms and apps, ₹0 delivery investing, and flat ₹15 intraday and F&O trades.",
  buttonText: "Sign up now",
};

function OpenAccount() {
  return (
    <>
      <TrendDivider flat />
      <section className="section-flux bg-ink2-flux">
        <div className="container">
          <div className="row justify-content-center text-center px-3">

            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="display-flux-md mb-3">{accountData.title}</h1>

              <p className="mb-4">
                {accountData.description}
              </p>

              <button className="btn-flux">
                {accountData.buttonText} <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default OpenAccount;
