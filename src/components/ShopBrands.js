import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivWrap = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 50px;
`;

const Pbrands = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 30px;
  display: block;
  font-weight: 600;
  color: rgb(33, 37, 41);
`;

const UlBrand = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const LinkBrand = styled(Link)`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #787878;
  font-weight: 300;
  text-transform: capitalize;
`;

const brands = [
  { id: 1, path: "#", title: "Asos" },
  { id: 2, path: "#", title: "Mango" },
  { id: 3, path: "#", title: "River Island" },
  { id: 4, path: "#", title: "Topshop" },
  { id: 5, path: "#", title: "Zara" }
];

const ShopBrands = () => {
  const brand = brands.map(el => (
    <li key={el.id}>
      <LinkBrand to={el.path}>{el.title}</LinkBrand>
    </li>
  ));
  return (
    <DivWrap>
      <Pbrands>Brands</Pbrands>
      <UlBrand>{brand}</UlBrand>
    </DivWrap>
  );
};

export default ShopBrands;
