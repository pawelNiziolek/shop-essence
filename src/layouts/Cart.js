import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bag from "../img/core-img/bag.svg";
import CartSingleOrder from "../components/CartSingleOrder";
import CartSummary from "../components/CartSummary";

const DivHidden = styled.div`
  position: fixed;
  display: ${props => (props.showDiv ? "block" : "none")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props =>
    props.showDiv ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)"};
  z-index: 1050;
  transition: 0.45s;
`;

const DivLink = styled.div`
  position: relative;
  left: -90px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  border-left: 1px solid #ebebeb;
  height: 85px;
  line-height: 90px;
  background-color: #fff;
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
  top: -20px;
`;

const DivWrapAll = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1100;
  width: 60%;
  height: 100%;
  background-color: #fff;
`;

const DivWrap = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  width: 100%;
`;

const DivWrapOrder = styled.div`
  position: relative;
  width: 45%;
  max-width: 190px;
  min-width: 110px;
  /* overflow-y: scroll; */
`;

const Cart = () => {
  return (
    <>
      <DivHidden showDiv={true} />
      <DivWrapAll>
        <DivLink>
          <Link to="#">
            <ImgMenu src={bag} alt="bag icon" />
            <SpanCart>3</SpanCart>
          </Link>
        </DivLink>
        <DivWrap>
          <DivWrapOrder>
            <CartSingleOrder />
          </DivWrapOrder>
          <CartSummary />
        </DivWrap>
      </DivWrapAll>
    </>
  );
};

export default Cart;
