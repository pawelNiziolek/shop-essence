import React from "react";
import styled from "styled-components";
import ShopCategoriesList from "./ShopCategoriesList";
import ShopFilter from "./ShopFilter";
import ShopColor from "./ShopColor";
import ShopBrands from "./ShopBrands";

const SectionWrapCategories = styled.section`
  width: 25%;
  padding: 0 15px;
`;

const H1 = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 30px;
`;

const DivWrapCat = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShopLeftPanel = () => {
  return (
    <SectionWrapCategories>
      <H1>categories</H1>
      <DivWrapCat>
        <ShopCategoriesList />
        <ShopFilter />
        <ShopColor />
        <ShopBrands />
      </DivWrapCat>
    </SectionWrapCategories>
  );
};

export default ShopLeftPanel;
