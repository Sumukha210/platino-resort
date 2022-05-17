import styled from "styled-components";

export const Wrapper = styled.div`
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

      transition: background 0.3s ease-in-out;

      &:hover {
        background: var(--secondary-400);
      }
    }
  }

  .box {
    background-color: white;
    padding-top: 1rem;
    border: 1.5px solid rgb(83 78 78 / 10%);
    hr {
      opacity: 0.4;
    }
  }
`;

export const ColumnGroup = styled.div`
  &.totAmount {
    border-top: 1.5px solid var(--secondary-300);

    h5:first-child {
      font-family: var(--secondary-font);
    }
  }

  &:not(.totalAmount) {
    padding: 1.3rem 1.5rem;
  }

  &.formInput {
    padding-bottom: 0px;
  }
`;

export const Column = styled.div`
  .sub-title-3 {
    font-weight: 700;
    color: var(--secondary-400);
  }

  h6 {
    color: var(--secondary-300);
    font-weight: 600;
  }

  .calender,
  .form-select {
    height: 54px;
    width: 100%;
    border: none;
    border-bottom: 1.5px solid var(--secondary-300);
    outline: none;
    font-weight: bold;
  }

  .react-datepicker {
    border-color: var(--secondary-200);

    &__header {
      background-color: var(--secondary-200);
    }

    &__navigation-icon {
      &::before {
        border-color: var(--secondary-400);
        height: 7px;
        width: 7px;
      }
    }

    &__day {
      &:hover {
        background: var(--secondary-100);
      }

      &--disabled {
        color: var(--secondary-200);
      }

      &--keyboard-selected {
        background-color: var(--primary-300);
      }

      &--selected {
        background: var(--secondary-300);
        transition: all 0.3s ease-in;

        &:hover {
          background: var(--secondary-300);
          opacity: 0.7;
        }
      }
    }
  }
`;
