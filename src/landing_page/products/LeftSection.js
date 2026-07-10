import React from "react";
import { CandlePanel, AreaPanel, DonutPanel, CodePanel, BarPanel, StoreButton } from "../Illustrations";

const ILLUSTRATIONS = {
  candle: (name) => <CandlePanel label={`${name.toUpperCase()} // LIVE`} tone="accent" seed={0} height={240} />,
  area: (name) => <AreaPanel label={`${name.toUpperCase()} // SIP GROWTH`} tone="accent" seed={0} height={240} />,
  donut: (name) => <DonutPanel label={`${name.toUpperCase()} // ALLOCATION`} tone="coral" height={240} />,
  code: (name) => <CodePanel label={`${name.toUpperCase()} // REQUEST`} height={240} />,
  bar: (name) => <BarPanel label={`${name.toUpperCase()} // LESSONS`} tone="coral" height={240} />,
};

function LeftSection({ data }) {
  return (
    <section className="section-flux">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* Illustration Section */}
          <div className="col-12 col-lg-6">
            {(ILLUSTRATIONS[data.illustration] || ILLUSTRATIONS.candle)(data.productName)}
          </div>

          {/* Content Section */}
          <div className="col-12 col-lg-6">
            <h1 className="display-flux-md mb-3">{data.productName}</h1>

            <p className="mb-4">
              {data.productDesription}
            </p>

            {/* Links */}
            <div className="d-flex flex-wrap gap-4 mb-4">
              {data.tryDemo !== undefined && (
                <a href={data.tryDemo || "#"} className="link-flux">
                  Try demo
                </a>
              )}

              {data.learnMore !== undefined && (
                <a href={data.learnMore || "#"} className="link-flux">
                  Learn more
                </a>
              )}
            </div>

            {/* Download options */}
            {data.showBadges && (
              <div className="d-flex flex-wrap gap-3">
                <StoreButton platform="ios" />
                <StoreButton platform="android" />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default LeftSection;
