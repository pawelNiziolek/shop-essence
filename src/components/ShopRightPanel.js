import React from "react";
import styled from "styled-components";
import ShopSort from "./ShopSort";
import ShopProducts from "./ShopProducts";
import ShopPageNumber from "../components/ShopPageNumber";

const DivWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  position: relative;
  margin: 0 15px;
`;

const ShopRightPanel = () => {
  return (
    <DivWrap>
      <ShopSort />
      <ShopProducts />
      <ShopPageNumber />
    </DivWrap>
  );
};

export default ShopRightPanel;
