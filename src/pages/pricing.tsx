import React from "react";
import Layout from "@/shared/Layout";
import pricingImg from "@/assets/images/about-md.jpg";
import PriceTable from "@/layout/pricing_page/PriceTable";

const Pricing = () => {
  return (
    <Layout
      bannerImg={pricingImg}
      title="<span>Prices & </span><span>Rates</span>">
      <PriceTable />
    </Layout>
  );
};

export default Pricing;
