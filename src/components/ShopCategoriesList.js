import React from "react";
import { Link } from "react-router-dom";
import ShopSingleList from "./ShopSingleList";
import styled from "styled-components";

const products = [
  { id: 1, path: "#", title: "Clothing" },
  { id: 2, path: "#", title: "Shoes" },
  { id: 3, path: "#", title: "Accessories" }
];

const DivWrap = styled.div`
  margin-bottom: 50px;
`;

const LinkTitle = styled(Link)`
  display: block;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 12px;
  color: rgb(33, 37, 41);
  font-weight: 600;
`;

const ShopCategoriesList = () => {
  const singleProd = products.map(el => (
    <div key={el.title}>
      <LinkTitle to={el.path}>{el.title}</LinkTitle>
      <ShopSingleList />
    </div>
  ));

  return <DivWrap>{singleProd}</DivWrap>;
};

export default ShopCategoriesList;
