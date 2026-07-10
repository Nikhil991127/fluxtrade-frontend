import React, { useState } from "react";

const tabs = ["Equity", "Currency", "Commodity"];

const equityTable = {
  headers: [
    "Charges",
    "Equity delivery",
    "Equity intraday",
    "F&O - Futures",
    "F&O - Options",
  ],
  rows: [
    ["Brokerage", "Zero Brokerage", "0.03% or ₹15/order", "0.03% or ₹15/order", "₹15/order"],
    ["STT / CTT", "0.1% buy/sell", "0.025% sell", "0.02% sell", "0.1% sell (premium)"],
    [
      "Transaction charge",
      "BSE: 0.00375% | NSE: 0.00297%",
      "BSE: 0.00375% | NSE: 0.00173%",
      "BSE: 0 | NSE: 0.03503%",
      "BSE: 0.0325%",
    ],
    ["GST", "18% applicable", "18% applicable", "18% applicable", "18% applicable"],
    ["SEBI charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
    [
      "Stamp charges",
      "0.015% or ₹1500/crore",
      "0.003% or ₹300/crore",
      "0.002% or ₹200/crore",
      "0.003% or ₹300/crore",
    ],
  ],
};

function Brokerage() {
  const [activeTab, setActiveTab] = useState("Equity");

  return (
    <section className="section-flux">
      <div className="container">

        {/* Tabs */}
        <div className="d-flex gap-4 pb-2 mb-4 flex-wrap" style={{ borderBottom: "1px solid var(--line)" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-flux ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        {activeTab === "Equity" && (
          <div className="table-responsive">
            <table className="table-flux">
              <thead>
                <tr>
                  {equityTable.headers.map((head, i) => (
                    <th key={i}>{head}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {equityTable.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== "Equity" && (
          <p className="text-center">
            {activeTab} brokerage details coming soon.
          </p>
        )}

      </div>
    </section>
  );
}

export default Brokerage;
