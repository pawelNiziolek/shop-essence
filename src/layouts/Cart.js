import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bag from "../img/core-img/bag.svg";

const DivHidden = styled.div`
  position: fixed;
  /* display: ${props => (props.showDiv ? "block" : "none")}; */
  /* display: none; */
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
  width: 670px;
  height: 100%;
  background-color: #fff;
`;

const DivWrap = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  width: 100%;
`;

const DivSummary = styled.div`
  padding: 100px 10%;
  width: 100%;
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
  color: #000000;
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
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover {
    background-color: #dc0345;
  }
`;

const DivListOrder = styled.div`
  position: relative;
  z-index: 10;
  flex: 0 0 190px;
  width: 190px;
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
          <div>
            <DivListOrder>
              <Link to="#">
                <img
                  src="img/product-img/product-1.jpg"
                  className="cart-thumb"
                  alt=""
                />
                <div>
                  <span>
                    <i className="fa fa-close" aria-hidden="true" />
                  </span>
                  <span>Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p>Size: S</p>
                  <p>Color: Red</p>
                  <p>$45.00</p>
                </div>
              </Link>
            </DivListOrder>
          </div>

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
        </DivWrap>
      </DivWrapAll>
    </>
  );
};

export default Cart;
