import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bag from "../img/core-img/bag.svg";
import CartSingleOrder from "../components/CartSingleOrder";
import CartSummary from "../components/CartSummary";

const DivHidden = styled.div`
  position: fixed;
  /* display: ${props => (props.showDiv ? "block" : "none")}; */
  top: 0;
  left: 0;
  width:${props => (props.showDiv ? "100%" : "0")};;
  height: ${props => (props.showDiv ? "100vh" : "0")};;
  background-color: ${props =>
    props.showDiv ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)"};
  z-index: 1050;
  transition: background-color 0.45s, width 0s, height 0s;
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
  right: ${props => (props.showDiv ? "0" : "-60%")};
  z-index: 1100;
  width: 60%;
  height: 100%;
  background-color: #fff;
  transition: 0.6s ease-in-out;
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
  const [show, setShow] = React.useState(false);

  return (
    <>
      <DivHidden showDiv={show} onClick={() => setShow(!show)} />
      <DivWrapAll showDiv={show}>
        <DivLink showDiv={show} onClick={() => setShow(!show)}>
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
