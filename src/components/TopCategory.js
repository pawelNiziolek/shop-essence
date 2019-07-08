import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgCloth from "../img/bg-img/bg-2.jpg";
import ImgShoes from "../img/bg-img/bg-3.jpg";
import ImgAcces from "../img/bg-img/bg-4.jpg";

const DivContainer = styled.div`
  padding: 80px 5%;
  display: flex;
  justify-content: space-around;
  background-image: ${props => props};
`;

const LinkCategory = styled(Link)`
  display: block;
  font-size: 30px;
  font-weight: 700;
  color: #000000;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 500ms ease 0s;
  text-decoration: none;
  outline: none;
`;

const DivSingleCat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  height: 240px;
  padding: 0 15px;
  :hover > ${LinkCategory} {
    color: #0315ff;
  }
`;

const TopCategory = () => {
  return (
    <DivContainer>
      <DivSingleCat images={ImgCloth}>
        <LinkCategory to="#">Clothing</LinkCategory>
      </DivSingleCat>
      <DivSingleCat images={ImgShoes}>
        <LinkCategory to="#">Shoes</LinkCategory>
      </DivSingleCat>
      <DivSingleCat images={ImgAcces}>
        <LinkCategory to="#">Accessories</LinkCategory>
      </DivSingleCat>
    </DivContainer>
  );
};

export default TopCategory;
