import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heart from "../img/core-img/heart.svg";
import user from "../img/core-img/user.svg";
import bag from "../img/core-img/bag.svg";
import NavigationSearchButton from "./NavigationSearchButton";

const DivLink = styled.div`
  position: relative;
  z-index: 1;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 90px;
  flex: 0 0 90px;
  width: 90px;
  display: block;
  text-align: center;
  border-left: 1px solid #ebebeb;
  height: 100%;
  line-height: 80px;
`;

const ImgMenu = styled.img`
  width: 20px;
  height: 20px;
`;

const SpanCart = styled.span`
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  color: #0315ff;
  font-weight: 700;
  position: absolute;
  top: -10px;
`;

const NavigationNavRight = () => {
  return (
    <>
      <NavigationSearchButton />
      <DivLink>
        <Link to="#">
          <ImgMenu src={heart} alt="heart icon" />
        </Link>
      </DivLink>
      <DivLink>
        <Link to="#">
          <ImgMenu src={user} alt="man icon" />
        </Link>
      </DivLink>
      <DivLink>
        <Link to="#" id="essenceCartBtn">
          <ImgMenu src={bag} alt="bag icon" />
          <SpanCart>3</SpanCart>
        </Link>
      </DivLink>
    </>
  );
};

export default NavigationNavRight;