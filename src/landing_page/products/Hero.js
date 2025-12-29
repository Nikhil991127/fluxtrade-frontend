import React from "react";

function Hero({
  title = "Technology",
  subtitle = "Sleek, modern and intuitive trading platforms",
  description = "Check out our",
  linkText = "investment offerings",
  linkHref = "#",
}) {
  return (
    <section className="container border-bottom my-5">
      <div className="text-center px-3 py-5">

        <h1 className="mb-3">{title}</h1>

        <h3 className="text-muted fs-4 mb-3">
          {subtitle}
        </h3>

        <p className="mb-0">
          {description}{" "}
          <a href={linkHref} className="text-decoration-none fw-semibold">
            {linkText}{" "}
            <i
              className="fa fa-long-arrow-right ms-1"
              aria-hidden="true"
            ></i>
          </a>
        </p>

      </div>
    </section>
  );
}

export default Hero;
