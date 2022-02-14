import React from "react";
import styled from "styled-components";

interface TextProps {
  status: "success" | "fail";
}

interface ResponseTextProps extends TextProps {
  message: string;
  classname?: string;
}

const ResponseText: React.FC<ResponseTextProps> = ({
  status,
  message,
  classname = "sub-title-3",
}) => {
  return (
    <Text status={status} className={classname}>
      {message}
    </Text>
  );
};

export default ResponseText;

const Text = styled.h4<TextProps>`
  color: ${({ status }) => (status === "fail" ? "#e72323" : "#48b76f")};
  font-weight: 600;
`;
