import React from "react";

function Awards() {
  return (
    <section className="container mt-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-12 col-lg-6 p-3 p-lg-5 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-lg-6 p-3 p-lg-5">
          <h1 className="mb-3 text-center text-lg-start">
            Largest stock broker in India
          </h1>

          <p className="mb-4 text-center text-lg-start">
            Clients contribute to over <strong>15%</strong> of all retail order
            volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-12 col-sm-6">
              <ul className="list-unstyled">
                <li className="mb-2">✔ Futures and Options</li>
                <li className="mb-2">✔ Commodity derivatives</li>
                <li className="mb-2">✔ Currency derivatives</li>
              </ul>
            </div>

            <div className="col-12 col-sm-6">
              <ul className="list-unstyled">
                <li className="mb-2">✔ Stocks & IPOs</li>
                <li className="mb-2">✔ Direct mutual funds</li>
                <li className="mb-2">✔ Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <div className="text-center text-lg-start mt-4">
            <img
              src="media/images/pressLogos.png"
              alt="Press logos"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Awards;
