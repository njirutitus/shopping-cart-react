import styled from "styled-components";
import { Button } from "./Button";
import React from "react";

const CloseButt = styled(Button)`
  padding: 5px 8px;
  font-size: 14px;
  margin: 2px;
`;
export const CloseButton = ({ ...props }) => (
  <CloseButt backgroundColor="darkred" {...props}>
    X
  </CloseButt>
);
