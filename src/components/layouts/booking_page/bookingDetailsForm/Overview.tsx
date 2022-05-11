import React from "react";
import styled from "styled-components";

const Overview = () => {
  return (
    <Wrapper>
      <div className="header">
        <h2 className="sub-title-1">Overview</h2>
      </div>

      <div className="box">
        <ColumnGroup>
          <Column className="d-flex justify-content-between">
            <div>
              <h6 className="sub-title-4">Arrival</h6>
              <h5 className="sub-title-3">1</h5>
            </div>

            <div>
              <h6 className="sub-title-4">Departure</h6>
              <h5 className="sub-title-3">1</h5>
            </div>
          </Column>
          <hr />
        </ColumnGroup>

        <ColumnGroup>
          <Column>
            <h6 className="sub-title-4">Guests</h6>
            <h5 className="sub-title-3">1 Guest</h5>
          </Column>
          <hr />
        </ColumnGroup>

        <ColumnGroup>
          <Column>
            <h6 className="sub-title-4">Stay</h6>
            <div className="d-flex justify-content-between">
              <h5 className="sub-title-3">1 Guest</h5>
              <h6 className="sub-title-4">100 Rs.</h6>
            </div>
          </Column>
          <hr />
        </ColumnGroup>

        <ColumnGroup>
          <Column className="d-flex justify-content-between">
            <h5 className="sub-title-3">Total Amount</h5>
            <h5 className="sub-title-3">100 Rs.</h5>
          </Column>
        </ColumnGroup>

        <div className="btnContainer">
          <button type="submit">BOOK NOW</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Overview;

const Wrapper = styled.div`
  .header {
    margin-bottom: 2rem;
  }

  .btnContainer {
    button {
      width: 100%;
      background: var(--secondary-300);
      color: var(--light-color);
      border: none;
      padding: 1.4rem 2rem;
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`;

const ColumnGroup = styled.div`
  background-color: white;
  border: 1.5px solid rgb(83 78 78 / 10%);
  border-bottom: 0px;

  hr {
    opacity: 0.1;
  }
`;

const Column = styled.div`
  padding: 1.3rem 1.5rem;

  .sub-title-3 {
    font-weight: 700;
    color: var(--secondary-400);
  }

  h6 {
    color: var(--secondary-300);
    font-weight: 500;
  }
`;
