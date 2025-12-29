import React from "react";

function Hero({
  image = "media/images/homeHero.png",
  title = "Invest in everything",
  description = "Online platform to invest in stocks, derivatives, mutual funds, and more",
  buttonText = "Sign up now",
  onButtonClick,
}) {
  return (
    <section className="container-fluid my-5 px-3 overflow-hidden">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 text-center">

          {/* Hero Image */}
          <img
            src={image}
            alt="Hero"
            className="img-fluid w-100 mb-4"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />

          {/* Text */}
          <h1 className="mb-3">{title}</h1>

          <p className="mb-4 text-muted">
            {description}
          </p>

          {/* CTA */}
          <button
            className="btn btn-primary btn-lg px-5"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;
