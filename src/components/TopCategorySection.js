import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgCloth from "../img/bg-img/bg-2.jpg";
import ImgShoes from "../img/bg-img/bg-3.jpg";
import ImgAcces from "../img/bg-img/bg-4.jpg";

const DivContainer = styled.div`
  padding: 80px 6%;
  display: flex;
  justify-content: space-around;
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

const ArtSingleCat = styled.article`
  width: 32%;
  height: 240px;
  margin: 0 15px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: rotate(0) scale(1);
  cursor: pointer;
`;

const ArtSingleCat1 = styled(ArtSingleCat)`
  background-image: url(${ImgCloth});
`;

const ArtSingleCat2 = styled(ArtSingleCat)`
  background-image: url(${ImgShoes});
`;

const ArtSingleCat3 = styled(ArtSingleCat)`
  background-image: url(${ImgAcces});
`;

const DivCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  :hover > ${LinkCategory} {
    color: #0315ff;
  }
`;

const TopCategorySection = () => {
  return (
    <DivContainer>
      <ArtSingleCat1>
        <DivCover>
          <LinkCategory to="#">Clothing</LinkCategory>
        </DivCover>
      </ArtSingleCat1>
      <ArtSingleCat2>
        <DivCover>
          <LinkCategory to="#">Shoes</LinkCategory>
        </DivCover>
      </ArtSingleCat2>
      <ArtSingleCat3>
        <DivCover>
          <LinkCategory to="#">Accessories</LinkCategory>
        </DivCover>
      </ArtSingleCat3>
    </DivContainer>
  );
};

export default TopCategorySection;
