import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";

const Address = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        loading: () => <h6 className="sub-title-3">Map is loading....</h6>,
        ssr: false,
      }),
    []
  );

  return (
    <Wrapper className="margin-top">
      <div className="grid">
        <div className="left">
          <PersonalInfo />
        </div>

        <div className="right">
          <Map />
        </div>
      </div>
    </Wrapper>
  );
};

export default Address;

export const Wrapper = styled.div`
  .grid {
    display: grid;

    @media (min-width: 768px) {
      grid-template-columns: 0.5fr 1fr;
      grid-column-gap: 2rem;
      align-items: center;
    }
  }

  .left {
    text-align: right;

    @media (max-width: 575.98px) {
      margin-right: 2rem;
    }
  }
`;
