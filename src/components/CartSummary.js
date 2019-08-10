import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivSummary = styled.div`
  padding: 100px 10%;
  width: 100%;
  min-width: 200px;
`;
const H1Sum = styled.h1`
  font-size: 30px;
  margin-bottom: 100px;
  line-height: 1.3;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
`;

const LiSum = styled.li`
  margin-bottom: 20px;
  font-size: 14px;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

const SpanSecond = styled.span`
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
`;

const DivCheckOut = styled.div`
  margin-top: 100px !important;
`;

const LinkCheckOut = styled(Link)`
  display: inline-block;
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
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover {
    background-color: #dc0345;
  }
`;

const CartSummary = () => {
  return (
    <DivSummary>
      <H1Sum>Summary</H1Sum>
      <ul>
        <LiSum>
          <span>subtotal:</span> <SpanSecond>$274.00</SpanSecond>
        </LiSum>
        <LiSum>
          <span>delivery:</span> <SpanSecond>Free</SpanSecond>
        </LiSum>
        <LiSum>
          <span>discount:</span> <SpanSecond>-15%</SpanSecond>
        </LiSum>
        <LiSum>
          <span>total:</span> <SpanSecond>$232.00</SpanSecond>
        </LiSum>
      </ul>
      <DivCheckOut>
        <LinkCheckOut to="checkout">check out</LinkCheckOut>
      </DivCheckOut>
    </DivSummary>
  );
};

export default CartSummary;
