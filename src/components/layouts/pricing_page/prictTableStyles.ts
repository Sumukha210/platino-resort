import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 5rem;

  .header {
    margin-bottom: 2rem;
  }

  .footer {
    opacity: 0.6;
    margin-top: 1rem;
  }
`;

export const TableContainer = styled.div`
  @media (max-width: 575.98px) {
    overflow-x: auto;
  }
`;

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;

  @media (max-width: 575.98px) {
    grid-template-columns: repeat(4, 150px);
  }

  & > div:first-child {
    background-color: var(--secondary-200);
  }

  span {
    &:first-child {
      font-family: var(--secondary-font);
    }

    &:last-child {
      font-weight: 600;
      display: block;
      color: var(--secondary-300);
    }
  }
`;

export const TableContent = styled.div`
  display: grid;
  grid-template-areas:
    "title1 price price price"
    "title2 price price price"
    "title3 price price price"
    "title4 price price price";
  align-items: center;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 575.98px) {
    grid-template-columns: repeat(4, 150px);
  }

  .seasonName {
    padding: 1rem;
    grid-area: title;
    font-family: var(--secondary-font);
    background-color: var(--secondary-200);

    &:nth-of-type(1) {
      grid-area: title1;
    }
    &:nth-of-type(2) {
      grid-area: title2;
    }
    &:nth-of-type(3) {
      grid-area: title3;
    }
    &:nth-of-type(4) {
      grid-area: title4;
    }
  }

  &:not(.seasonName) {
    grid-area: price;
  }

  h4 {
    font-weight: 500;
    text-align: center;
  }
`;
