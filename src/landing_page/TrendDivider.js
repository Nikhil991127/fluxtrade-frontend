import React from "react";

// Signature divider: a jagged trendline, like a stock chart, instead of a plain hairline.
function TrendDivider({ flat = false }) {
  const path = flat
    ? "M0,24 L1440,24"
    : "M0,32 L120,28 L240,36 L360,14 L480,22 L600,8 L720,26 L840,18 L960,4 L1080,20 L1200,10 L1320,24 L1440,16";

  return (
    <svg
      className="trend-divider"
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export default TrendDivider;
