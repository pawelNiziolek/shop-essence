import React from "react";
import styled from "styled-components";

const WrapAll = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1050;
  transition: 0.4s;
`;

const Cart = () => {
  return <WrapAll />;
};

export default Cart;
