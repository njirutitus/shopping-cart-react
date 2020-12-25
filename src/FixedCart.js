import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { P } from "./P";
import { lightGray } from "./GlobalStyles";

export const FixedCart = ({ cartItems, onOpen }) => (
  <FixedDiv onClick={onOpen}>
    <P>Cart</P>
    <CartBox>
      <FontAwesomeIcon size="2x" icon={faShoppingCart} />
      <CartNumber>{cartItems || 0}</CartNumber>
    </CartBox>
  </FixedDiv>
);

const FixedDiv = styled.div`
  cursor: pointer;
  position: fixed;
  text-align: center;
  z-index: 25;
  top: 0;
  right: 0;
  padding: 0 10px 10px 10px;
  background-color: ${lightGray};
  border-radius: 0 0 0 20px;
`;
const CartNumber = styled.div`
  text-align: center;
  font-size: 14px;
  width: 15px;
  color: white;
  position: absolute;
  top: 4px;
  right: 7px;
`;
const CartBox = styled.div`
  position: relative;
`;
