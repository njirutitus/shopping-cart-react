import React from "react";
import { numberFormat } from "./numberFormat";
import { VerticalBar } from "./VerticalBar";
import styled from "styled-components";

export const CartTotals = ({ cart, cartCountTotal }) => {
  const cartPriceTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <H2>
      Items: {cartCountTotal} <VerticalBar /> Total Price: $
      {numberFormat(cartPriceTotal)}
    </H2>
  );
};

const H2 = styled.h2`
  padding: 4px 0;
  font-size: 18px;
  border-bottom: 1px dashed black;
`;
