import React from "react";
import styled from "styled-components";
import ShopSectionSort from "./ShopSectionSort";
import ShopProducts from "./ShopProducts";

const DivWrap = styled.div`
  width: 75%;
  position: relative;
  padding: 0 15px;
`;

const ShopRightPanel = () => {
  return (
    <DivWrap>
      <ShopSectionSort />
      <ShopProducts />
    </DivWrap>
  );
};

export default ShopRightPanel;
