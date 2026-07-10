import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  let data1 = {
    illustration: "candle",
    productName: "Pulse",
    productDesription: "Our flagship trading app — streaming market data, fast charting, and an interface with nothing to trip over. Available on Android and iOS.",
    tryDemo: "",
    learnMore: "",
    showBadges: true,
  }

  let data2 = {
    illustration: "donut",
    productName: "Ledger",
    productDesription: "Your account's control room. Track every trade, tax obligation, and portfolio shift in one dashboard, with reports that don't need a spreadsheet.",
    learnMore: ""
  }

  let data3 = {
    illustration: "area",
    productName: "Sprout",
    productDesription: "Direct mutual funds with zero commission, invested straight into your own demat account instead of sitting with a distributor.",
    tryDemo: "",
    learnMore: "",
    showBadges: true,
  }
  let data4 = {
    illustration: "code",
    productName: "Flux API",
    productDesription: "A clean HTTP/JSON API for building on top of our exchange connectivity. If you're a startup, ship your investment app on our infrastructure.",
    learnMore: ""
  }
  let data5 = {
    illustration: "bar",
    productName: "Flux Academy",
    productDesription: "Bite-sized lessons on markets, from your first order to reading a balance sheet, built for learning in five minutes between meetings.",
    tryDemo: "",
    learnMore: "",
    showBadges: true,
  }

  return (
    <div style={{ marginTop: "6vh" }}>
      <Hero />
      <LeftSection data={data1} />
      <RightSection data={data2} />
      <LeftSection data={data3} />
      <RightSection data={data4} />
      <LeftSection data={data5} />
      <p className="text-center" style={{ color: "var(--text-dim)" }}>
        Want to know more about our technology stack? Check out the Flux.tech
        engineering blog.
      </p>
      <Universe />
    </div>
  );
}

export default ProductsPage;
