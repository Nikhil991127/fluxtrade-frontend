import React from "react";

const accountData = {
  title: "Open a FluxTrade account",
  description:
    "Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.",
  buttonText: "Sign up now",
};

function OpenAccount() {
  return (
    <section className="container my-5">
      <div className="row justify-content-center text-center px-3">

        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="mb-3">{accountData.title}</h1>

          <p className="mb-4 text-muted">
            {accountData.description}
          </p>

          <button className="btn btn-primary btn-lg px-5">
            {accountData.buttonText}
          </button>
        </div>

      </div>
    </section>
  );
}

export default OpenAccount;
