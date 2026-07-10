import React from "react";
import { CodePanel } from "../Illustrations";

function Awards() {
  return (
    <section className="section-flux bg-surface-flux">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* Illustration Section */}
          <div className="col-12 col-lg-6 p-3 p-lg-5">
            <CodePanel label="ORDER ENGINE // REQUEST" height={240} />
          </div>

          {/* Content Section */}
          <div className="col-12 col-lg-6 p-3 p-lg-5">
            <div className="eyebrow justify-content-center justify-content-lg-start">Under the hood</div>

            <h1 className="display-flux-md mb-3 text-center text-lg-start">
              Built on our own matching engine
            </h1>

            <p className="mb-4 text-center text-lg-start">
              Most brokers rent their trading infrastructure. We built ours,
              which means orders reach the exchange faster and nothing about
              your account depends on a third party staying online:
            </p>

            <div className="row">
              <div className="col-12 col-sm-6">
                <ul className="list-unstyled">
                  <li className="mb-2">✔ Sub-50ms order routing</li>
                  <li className="mb-2">✔ Direct exchange connectivity</li>
                  <li className="mb-2">✔ Real-time risk engine</li>
                </ul>
              </div>

              <div className="col-12 col-sm-6">
                <ul className="list-unstyled">
                  <li className="mb-2">✔ In-house custody &amp; settlement</li>
                  <li className="mb-2">✔ Automated tax statements</li>
                  <li className="mb-2">✔ Public developer API</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Awards;
