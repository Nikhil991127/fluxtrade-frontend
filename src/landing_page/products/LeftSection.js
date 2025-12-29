import React from "react";

function LeftSection({ data }) {
  return (
    <section className="container my-5">
      <div className="row align-items-center gy-4">

        {/* Image Section */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src={data.imageURL}
            alt={data.productName}
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-lg-6">
          <h1 className="mb-3">{data.productName}</h1>

          <p className="text-muted mb-4">
            {data.productDesription}
          </p>

          {/* Links */}
          <div className="d-flex flex-wrap gap-4 mb-4">
            {data.tryDemo && (
              <a href={data.tryDemo} className="fw-semibold text-decoration-none">
                Try demo
              </a>
            )}

            {data.learnMore && (
              <a href={data.learnMore} className="fw-semibold text-decoration-none">
                Learn more
              </a>
            )}
          </div>

          {/* Store Badges */}
          <div className="d-flex flex-wrap gap-4">
            {data.googlePlay && (
              <a href={data.googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  className="img-fluid"
                  style={{ maxWidth: "160px" }}
                />
              </a>
            )}

            {data.appStore && (
              <a href={data.appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="App Store"
                  className="img-fluid"
                  style={{ maxWidth: "160px" }}
                />
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default LeftSection;
