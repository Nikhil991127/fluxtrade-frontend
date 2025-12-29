import React from "react";

const heroData = {
  image: "media/images/homeHero.png",
  title: "Invest in everything",
  description:
    "Online platform to invest in stocks, derivatives, mutual funds, and more",
  buttonText: "Sign up now",
};

function Hero() {
  return (
    <section className="container-fluid my-5 px-3 overflow-hidden">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 text-center">

          <img
            src={heroData.image}
            alt="Hero"
            className="img-fluid w-100 mb-4"
            style={{ maxWidth: "100%" }}
          />

          <h1 className="mb-3">{heroData.title}</h1>

          <p className="mb-4 text-muted">
            {heroData.description}
          </p>

          <button className="btn btn-primary btn-lg px-5">
            {heroData.buttonText}
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;
