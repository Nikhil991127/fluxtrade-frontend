import React from "react";

function Footer() {
  return (
    <footer className="footer-flux pt-5">
      <div className="container">

        {/* Top Section */}
        <div className="row gy-4">

          {/* Logo + Social */}
          <div className="col-12 col-sm-6 col-lg-3 text-center text-lg-start">
            <div className="navbar-brand mb-3 d-inline-block" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.2rem" }}>
              Fluxtrade<span style={{ color: "var(--accent)" }}>.</span>
            </div>
            <p className="small mb-3">
              © 2026, Fluxtrade. All rights reserved.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start gap-3 fs-5 social-icons">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-telegram"></i>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>

          {/* Company */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="d-block mb-2">About</a></li>
              <li><a href="#" className="d-block mb-2">Products</a></li>
              <li><a href="#" className="d-block mb-2">Pricing</a></li>
              <li><a href="#" className="d-block mb-2">Referral program</a></li>
              <li><a href="#" className="d-block mb-2">Careers</a></li>
              <li><a href="#" className="d-block mb-2">Press & media</a></li>
              <li><a href="#" className="d-block mb-2">Technology</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="d-block mb-2">Contact</a></li>
              <li><a href="#" className="d-block mb-2">Support portal</a></li>
              <li><a href="#" className="d-block mb-2">Connect blog</a></li>
              <li><a href="#" className="d-block mb-2">List of charges</a></li>
              <li><a href="#" className="d-block mb-2">Downloads & resources</a></li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="mb-3">Account</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="d-block mb-2">Open an account</a></li>
              <li><a href="#" className="d-block mb-2">Fund transfer</a></li>
              <li><a href="#" className="d-block mb-2">60 day challenge</a></li>
            </ul>
          </div>

        </div>

        {/* Legal Section */}
        <div className="legal-flux">
          <p>
            FluxTrade Broking Ltd.: Member of NSE, BSE & MCX. Depository services
            provided through FluxTrade Broking Ltd. Commodity trading through
            FluxTrade Commodities Pvt. Ltd.
          </p>

          <p>
            For support write to{" "}
            <a href="mailto:support@fluxtrade.com">support@fluxtrade.com</a>.
            Please read the Risk Disclosure Document carefully.
          </p>

          <p>
            <strong>Procedure to file a complaint on SEBI SCORES:</strong>{" "}
            Register at{" "}
            <a href="https://scores.gov.in" target="_blank" rel="noreferrer">
              scores.gov.in
            </a>
          </p>

          <p className="mb-0">
            <strong>Disclaimer:</strong> Investments in the securities market are
            subject to market risks.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="d-flex flex-wrap gap-3 mt-4 pb-4 bottom-links">
          <a href="#">NSE</a>
          <a href="#">BSE</a>
          <a href="#">MCX</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Policies</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Investor Charter</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
