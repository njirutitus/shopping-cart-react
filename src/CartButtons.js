import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

import { AddButton, SubtractButton } from "./AddSubtractButton";

export const CartButtons = ({ increaseQ, decreaseQ, removeFromCart }) => (
  <div>
    <AddButton onClick={increaseQ} />
    <SubtractButton onClick={decreaseQ} />
    <RemoveButton onClick={removeFromCart}>Remove</RemoveButton>
  </div>
);
const RemoveButton = styled(Button)`
  padding: 5px 10px;
`;
