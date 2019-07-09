import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image5 from "../img/bg-img/bg-5.jpg";

const DivGlobContainer = styled.div`
  margin: 0 6%;
  height: 550px;
  padding: 0 15px;
`;

const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-image: url(${image5});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ArticleSale = styled.article`
  display: flex;
  flex-direction: column;
  margin-right: 150px;
  line-height: 1.3;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
`;

const SpanPrice = styled.span`
  font-size: 24px;
  color: #dc0345;
  margin-bottom: 10px;
`;

const SpanTitle = styled.span`
  font-size: 60px;
  color: #000000;
  margin-bottom: 50px;
`;

const LinkBuy = styled(Link)`
  align-self: flex-start;
  text-align: center;
  min-width: 170px;
  height: 50px;
  color: #ffffff;
  border: none;
  border-radius: 0;
  padding: 0 40px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 50px;
  background-color: #0315ff;
  letter-spacing: 1.5px;
  font-weight: 600;
  transition: 0.2s ease-in-out;
  :hover {
    background-color: #dc0345;
  }
  :focus {
    background-color: #dc0345;
    box-shadow: 0 0 2px 2px #999;
  }
`;

const GlobalSaleSection = () => {
  return (
    <DivGlobContainer>
      <DivContainer>
        <ArticleSale>
          <SpanPrice>-60%</SpanPrice>
          <SpanTitle>Global Sale</SpanTitle>
          <LinkBuy to="#">Buy Now</LinkBuy>
        </ArticleSale>
      </DivContainer>
    </DivGlobContainer>
  );
};

export default GlobalSaleSection;
