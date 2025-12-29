import React from "react";

function RightSection({ data }) {
  return (
    <section className="container my-5">
      <div className="row align-items-center gy-4">

        {/* Content Section */}
        <div className="col-12 col-lg-6 order-2 order-lg-1">
          <h1 className="mb-3">{data.productName}</h1>

          <p className="text-muted mb-4">
            {data.productDesription}
          </p>

          {data.learnMore && (
            <a
              href={data.learnMore}
              className="fw-semibold text-decoration-none"
            >
              Learn more
            </a>
          )}
        </div>

        {/* Image Section */}
        <div className="col-12 col-lg-6 order-1 order-lg-2 text-center">
          <img
            src={data.imageURL}
            alt={data.productName}
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>

      </div>
    </section>
  );
}

export default RightSection;
