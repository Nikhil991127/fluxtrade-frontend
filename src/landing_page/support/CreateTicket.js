import React from "react";

const ticketTopics = [
  {
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account",
      "NRI Account Opening",
      "Charges at FluxTrade",
      "FluxTrade IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Account Modification",
    links: [
      "Change contact details",
      "Update bank account",
      "Nominee addition",
      "Segment activation",
      "Account closure",
    ],
  },
  {
    title: "Trading & Orders",
    links: [
      "Placing orders",
      "Order rejection",
      "Margins & leverage",
      "Order types",
      "Trade execution",
    ],
  },
  {
    title: "Funds",
    links: [
      "Add funds",
      "Withdraw funds",
      "Fund transfer issues",
      "Bank-related queries",
    ],
  },
  {
    title: "Charges & Taxes",
    links: [
      "Brokerage charges",
      "Statutory charges",
      "GST calculation",
      "Contract notes",
    ],
  },
  {
    title: "Reports",
    links: [
      "Trade book",
      "P&L report",
      "Ledger",
      "Tax P&L",
    ],
  },
];

function CreateTicket() {
  return (
    <section className="section-flux">
      <div className="container">

        {/* Heading */}
        <div className="mb-4 px-3">
          <div className="eyebrow">Help center</div>
          <h1 className="display-flux-md">
            To create a ticket, select a relevant topic
          </h1>
        </div>

        {/* Ticket Categories */}
        <div className="row gy-4">
          {ticketTopics.map((topic, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="card-flux ticket-card-flux">

                <h4>
                  <i
                    className="fa fa-plus-circle"
                    aria-hidden="true"
                  ></i>
                  {topic.title}
                </h4>

                <ul className="list-unstyled mb-0">
                  {topic.links.map((link, idx) => (
                    <li key={idx} className="mb-2">
                      <a
                        href="#"
                        style={{ textDecoration: "none" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CreateTicket;
