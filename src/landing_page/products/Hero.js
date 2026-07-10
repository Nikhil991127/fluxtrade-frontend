import React from "react";

function Hero({
  title = "The stack",
  subtitle = "Five products, one account, no bloat",
  description = "Check out our",
  linkText = "full product lineup",
  linkHref = "#",
}) {
  return (
    <section className="container" style={{ paddingTop: "9rem", paddingBottom: "3rem", borderBottom: "1px solid var(--line)" }}>
      <div className="text-center px-3">

        <div className="eyebrow justify-content-center">Built in-house</div>
        <h1 className="display-flux mb-3">{title}</h1>

        <h3 className="fs-4 mb-3" style={{ color: "var(--text-dim)", fontFamily: "var(--font-body)", fontWeight: 400 }}>
          {subtitle}
        </h3>

        <p className="mb-0">
          {description}{" "}
          <a href={linkHref} className="link-flux" style={{ display: "inline-flex" }}>
            {linkText}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>

      </div>
    </section>
  );
}

export default Hero;
