import React from "react";
import { BarPanel } from "../Illustrations";

function Education() {
  return (
    <section className="section-flux">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* Illustration Section */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <BarPanel label="FLUX LEARN // PROGRESS" tone="coral" height={220} />
          </div>

          {/* Content Section */}
          <div className="col-12 col-lg-6">
            <div className="eyebrow justify-content-center justify-content-lg-start">Learn</div>
            <h1 className="display-flux-md mb-3 text-center text-lg-start">
              Free and open market education
            </h1>

            <p className="text-center text-lg-start">
              Flux Learn is a free, self-paced course covering everything from
              your first order to reading an options chain.
            </p>

            <div className="text-center text-lg-start mb-4">
              <a href="#" className="link-flux">
                Flux Learn
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>

            <p className="text-center text-lg-start">
              Flux Community is where traders ask questions and get answers
              from people who actually use the platform.
            </p>

            <div className="text-center text-lg-start">
              <a href="#" className="link-flux">
                Flux Community
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
