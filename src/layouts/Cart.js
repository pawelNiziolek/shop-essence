import React from "react";
import styled from "styled-components";

const WrapAll = styled.div`
  position: fixed;
  display: ${props => (props.showDiv ? "block" : "none")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props =>
    props.showDiv ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)"};
  z-index: 1050;
  transition: 0.45s;
`;

const Cart = props => {
  return <WrapAll showDiv={props.cart} />;
};

export default Cart;
