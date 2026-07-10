import React from "react";
import { CandlePanel, AreaPanel, DonutPanel, CodePanel, BarPanel } from "../Illustrations";

const ILLUSTRATIONS = {
  candle: (name) => <CandlePanel label={`${name.toUpperCase()} // LIVE`} tone="accent" seed={1} height={240} />,
  area: (name) => <AreaPanel label={`${name.toUpperCase()} // GROWTH`} tone="accent" seed={1} height={240} />,
  donut: (name) => <DonutPanel label={`${name.toUpperCase()} // SNAPSHOT`} tone="coral" height={240} />,
  code: (name) => <CodePanel label={`${name.toUpperCase()} // RESPONSE`} height={240} />,
  bar: (name) => <BarPanel label={`${name.toUpperCase()} // MODULES`} tone="coral" height={240} />,
};

function RightSection({ data }) {
  return (
    <section className="section-flux bg-surface-flux">
      <div className="container">
        <div className="row align-items-center gy-4">

          {/* Content Section */}
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <h1 className="display-flux-md mb-3">{data.productName}</h1>

            <p className="mb-4">
              {data.productDesription}
            </p>

            {data.learnMore !== undefined && (
              <a
                href={data.learnMore || "#"}
                className="link-flux"
              >
                Learn more
              </a>
            )}
          </div>

          {/* Illustration Section */}
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            {(ILLUSTRATIONS[data.illustration] || ILLUSTRATIONS.donut)(data.productName)}
          </div>

        </div>
      </div>
    </section>
  );
}

export default RightSection;
