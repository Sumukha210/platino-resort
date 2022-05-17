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
              <h2 className="heading-3">Pricing Information</h2>

              <div className="row">
                <div className="col-md-10">
                  <ul>
                    <li className="sub-title-2">
                      The deposit can be paid either on the day of arrival (cash
                      or card payment) or by bank transfer before arrival. You
                      will receive more information after your booking.
                    </li>
                    <li className="sub-title-2">
                      The Above pricing will includes only
                      <span> 2 guests</span>, if there more then 2 guests are
                      then extra <span>700 Rs</span> must be paid per guest
                    </li>
                    <li className="sub-title-2">
                      Price includes all the facilities like{" "}
                      <span>wellness</span>, <span>food</span> etc..
                    </li>
                  </ul>
                </div>
              </div>
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
  margin-bottom: 5rem;

  ul {
    margin-top: 2rem;
    margin-left: 2vw;
    color: var(--dark-color);

    li {
      /* font-weight: 500; */
      &:not(:first-of-type) {
        margin-top: 10px;
      }

      span {
        font-weight: bold;
        font-style: italic;
      }
    }
  }
`;
