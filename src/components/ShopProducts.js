import React from "react";
import styled from "styled-components";
import HomeSingleProduct from "./HomeSingleProduct";

const SectionProducts = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ShopProducts = () => {
  return (
    <SectionProducts>
      <HomeSingleProduct />
      <HomeSingleProduct />
      <HomeSingleProduct />
    </SectionProducts>
  );
};

export default ShopProducts;
