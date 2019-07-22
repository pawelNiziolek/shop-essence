import React from "react";
import styled from "styled-components";
import ShopCheckHeader from "../components/ShopCheckHeader";
import ShopLeftPanel from "../components/ShopLeftPanel";
import ShopRightPanel from "../components/ShopRightPanel";

const DivContainer = styled.div`
  display: flex;
  width: 88%;
  padding: 0 15px;
  margin: 5% 6%;
`;

const Shop = () => {
  return (
    <>
      <ShopCheckHeader title="dresses" />
      <DivContainer>
        <ShopLeftPanel />
        <ShopRightPanel />
      </DivContainer>
    </>
  );
};

export default Shop;
