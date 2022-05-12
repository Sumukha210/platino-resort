import React from "react";
import Layout from "@/shared/Layout";
import pricingImg from "@/assets/images/about-md.jpg";
import PriceTable from "@/layout/pricing_page/PriceTable";
import styled from "styled-components";
import BookNowSection from "@/shared/BookNowSection";

const Pricing = () => {
  return (
    <Layout
      bannerImg={pricingImg}
      title="<span>Prices & </span><span>Rates</span>">
      <PriceTable />

      <Deposit>
        <div className="custom-container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="heading-3">Deposit Information</h2>
              <p className="sub-title-2">
                The deposit can be paid either on the day of arrival (cash or
                card payment) or by bank transfer before arrival. You will
                receive more information after your booking.
              </p>
            </div>
          </div>
        </div>
      </Deposit>

      <BookNowSection />
    </Layout>
  );
};

export default Pricing;

const Deposit = styled.div`
  p {
    margin-top: 2rem;
    color: var(--dark-color);
  }
`;
