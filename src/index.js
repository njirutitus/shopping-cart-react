import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import API from "./mockAPI";
import { ListedItems } from "./ListedItems";
import { FixedCart } from "./FixedCart";
import { CartDetails } from "./CartDetails";
import { Overlay } from "./Overlay";

import { GlobalStyles, lightGray } from "./GlobalStyles";

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(API);
  const [cartOpen, isCartOpen] = useState(false);

  const addToCart = i => {
    setItems(state =>
      state.map((item, p) => {
        if (i === p) {
          setCart([
            ...cart,
            { name: item.name, price: item.price, quantity: item.quantity }
          ]);
          return { ...item, inCart: true };
        }
        return item;
      })
    );
  };

  const increaseQuantity = {
    inCart: i => {
      setCart(state =>
        state.map((item, o) => {
          if (i === o && item.quantity < 10) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    },
    inItems: i => {
      setItems(state =>
        state.map((item, o) => {
          if (o === i && item.quantity < 10) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    }
  };

  const decreaseQuantity = {
    inCart: i => {
      setCart(prevCart =>
        prevCart.map((item, o) => {
          if (i === o && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    },
    inItems: i => {
      setItems(state =>
        state.map((item, o) => {
          if (i === o && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
      );
    }
  };

  const removeFromCart = i => {
    let chosenItem, index;
    index = 0;
    while (index < cart.length) {
      if (index === i) {
        chosenItem = cart[index].name;
        break;
      }
      index++;
    }
    setCart(state => state.filter(item => chosenItem !== item.name));
    setItems(state =>
      state.map(item => {
        if (item.name === chosenItem) {
          return { ...item, inCart: false, quantity: 1 };
        }
        return item;
      })
    );
  };

  const cartCountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <GlobalStyles />
      <CartDetails
        open={cartOpen}
        onClose={() => isCartOpen(false)}
        cart={cart}
        increaseQ={increaseQuantity.inCart}
        decreaseQ={decreaseQuantity.inCart}
        cartCountTotal={cartCountTotal}
        removeFromCart={removeFromCart}
      />

      <FixedCart onOpen={() => isCartOpen(true)} cartItems={cartCountTotal} />
      <Overlay onClick={() => isCartOpen(false)} open={cartOpen} />

      <Wrapper>
        <H1>Shopping Cart App</H1>
        <ListedItems
          items={items}
          increaseCount={increaseQuantity.inItems}
          decreaseCount={decreaseQuantity.inItems}
          addToCart={addToCart}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 75px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const H1 = styled.h1`
  padding: 0 10px 50px 10px;
  text-align: center;
  color: ${lightGray};
`;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
