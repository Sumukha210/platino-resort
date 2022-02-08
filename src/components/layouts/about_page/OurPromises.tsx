import React from "react";
import styled from "styled-components";
import NextImg from "next/image";
import promiseImg from "@/assets/images/promise.jpg";

const OurPromises = () => {
  const promises = [
    "A responsible and sustainable approach",
    "A strong aesthetic and artistic identity",
    "Properties that are emblematic of their destination",
    "Exceptiona venues on a human scale",
  ];

  return (
    <Wrapper className="component-inner-gap">
      <div className="custom-container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-10">
            <div className="row gx-lg-4 align-items-center">
              <div className="col-lg-6">
                <div className="left">
                  <h2 className="heading-4 bold">Our Promises</h2>
                  <ul>
                    {promises.map((name, num) => (
                      <li className="sub-title-2" key={num}>
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="right">
                  <NextImg src={promiseImg} objectFit="cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OurPromises;

const Wrapper = styled.div`
  color: var(--dark-color);
  .left {
    ul {
      margin-top: 1.5rem;
      margin-left: 2rem;
      li {
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
    }
  }

  .right {
    @media (max-width: 991.98px) {
      margin-top: 2rem;
    }

    & > span {
      height: 650px !important;
      width: 100% !important;

      @media (max-width: 575.98px) {
        height: 500px !important;
      }

      img {
        height: 100% !important;
        width: 100% !important;
      }
    }
  }
`;
