import React from "react";
import styled from "styled-components";
import ImgBread from "../img/bg-img/breadcumb.jpg";
import ShopLeftPanel from "../components/ShopLeftPanel";
import ShopRightPanel from "../components/ShopRightPanel";
import BtnUp from "../layouts/BtnUp";

const HeaderWrap = styled.header`
  position: relative;
  height: 140px;
  background-image: url(${ImgBread});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);
`;

const DivContainer = styled.div`
  display: flex;
  width: 88%;
  padding: 0 15px;
  margin: 5% 6%;
`;

const H1Title = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 1px;
  margin-bottom: 0;
`;

const Shop = () => {
  return (
    <>
      <HeaderWrap>
        <DivImage>
          <H1Title>dresses</H1Title>
        </DivImage>
      </HeaderWrap>
      <DivContainer>
        <ShopLeftPanel />
        <ShopRightPanel />
      </DivContainer>
      <BtnUp />
    </>
  );
};

export default Shop;
