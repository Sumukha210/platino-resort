import React from "react";
import NextImg from "next/image";
import styled from "styled-components";
import contactFormImg from "@/assets/images/interior-sm-1.jpg";
import FormField from "./FormField";

const ContactForm = () => {
  return (
    <Wrapper className="margin-top">
      <div className="custom-container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6">
                <div className="left">
                  <NextImg
                    src={contactFormImg}
                    objectFit="cover"
                    placeholder="blur"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="right">
                  <div className="header">
                    <Caption className="caption-3">
                      QUESTIONS OR SUGGESTIONS
                    </Caption>
                    <Title className="heading-3 bold">Write to us</Title>
                  </div>

                  <FormField />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;

const Wrapper = styled.div`
  .left {
    & > span {
      height: 700px !important;
      width: 100% !important;

      @media (max-width: 991.98px) {
        height: 550px !important;
      }

      @media (max-width: 575.98px) {
        height: 430px !important;
      }
    }
  }

  .right {
    @media (max-width: 991.98px) {
      margin-top: 2rem;
    }
  }
`;

const Caption = styled.h6`
  color: var(--dark-color);

  @media (max-width: 575.98px) {
    font-size: 0.6rem;
  }
`;

const Title = styled.h2`
  color: var(--dark-color);
`;
