import React from "react";
import { IconType } from "react-icons";
import { GiThreeLeaves, GiNightSleep } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import styled from "styled-components";

interface featuresType {
  name: string;
  Icon: IconType;
}

const features: featuresType[] = [
  { name: "Ecological <br/> Architecture", Icon: GiThreeLeaves },
  { name: "Sleeping facilities <br/> for up to 28 people", Icon: GiNightSleep },
  { name: "Wellness & <br/> Swimming pool", Icon: FaSwimmingPool },
];

const Features = () => {
  return (
    <Wrapper id="features">
      {features.map(({ name, Icon }, key) => (
        <div key={key} className="feature">
          <span>{<Icon />}</span>
          <span
            className="sub-title-3"
            dangerouslySetInnerHTML={{ __html: name }}></span>
        </div>
      ))}
    </Wrapper>
  );
};

export default Features;

const Wrapper = styled.div`
  display: flex;
  margin-top: 3rem;

  @media (max-width: 767.98px) {
    display: none;
  }

  .feature {
    display: flex;
    align-items: center;
    &:not(:last-of-type) {
      margin-right: 3rem;
    }

    span {
      svg {
        margin-right: 1rem;
        height: auto;
        width: 30px;
        vertical-align: bottom;
      }

      color: var(--light-color);
    }
  }
`;
