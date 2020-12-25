import React from "react";
import styled from "styled-components";
import { numberFormat } from "./numberFormat";
import { Button } from "./Button";
import { P } from "./P";
import { Arrow } from "./Arrow";
import { VerticalBar } from "./VerticalBar";
import { CartButtons } from "./CartButtons";

export const CartInfo = ({ cart, increaseQ, decreaseQ, removeFromCart }) => (
  <>
    {cart.map((item, i) => (
      <DetailColumn key={item.name}>
        <P>
          {item.name} <VerticalBar /> {item.quantity} x ${item.price} <Arrow />{" "}
          ${numberFormat(item.price * item.quantity)}
        </P>

        <CartButtons
          increaseQ={() => increaseQ(i)}
          decreaseQ={() => decreaseQ(i)}
          removeFromCart={() => removeFromCart(i)}
        />
      </DetailColumn>
    ))}
    <CheckoutButton>Checkout</CheckoutButton>
  </>
);
const DetailColumn = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 5px 0;
  width: 95%;
  border-bottom: 1px solid black;
`;

const CheckoutButton = styled(Button).attrs(() => ({
  backgroundColor: "darkblue"
}))`
  margin-top: 15px;
  margin-bottom: 15px;
`;
