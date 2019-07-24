import React from "react";
import ShopCheckHeader from "../components/ShopCheckHeader";
import styled from "styled-components";
import CheckoutForm from "../components/CheckoutForm";

const DivWrapAll = styled.div`
  display: flex;
  margin: 80px 100px;
`;

const CheckOut = () => {
  return (
    <>
      <ShopCheckHeader title="checkout" />
      <DivWrapAll>
        <CheckoutForm />
      </DivWrapAll>
    </>
  );
};

export default CheckOut;
