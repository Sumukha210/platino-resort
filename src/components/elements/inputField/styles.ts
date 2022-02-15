import styled from "styled-components";

export const Group = styled.div`
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  height: 45px;
  width: 80%;
  color: var(--dark-color);
  padding-left: 16px;
  border: 1.5px solid var(--secondary-200);
  outline: none;
  font-family: var(--primary-font);
  font-weight: 500;

  &::placeholder {
    opacity: 0.55;
    letter-spacing: 2px;
  }

  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  width: 80%;
  color: var(--dark-color);
  padding: 1rem;
  border-color: var(--dark-color);
  border: 1px solid var(--secondary-200);
  outline: none;

  @media (max-width: 991.98px) {
    width: 100%;
  }

  &::placeholder {
    opacity: 0.9;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const ErrorText = styled.h6`
  color: red;
  margin-top: 6px;
  font-weight: 600;
  display: block;
  opacity: 0.7;
`;
