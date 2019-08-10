import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bag from "../img/core-img/bag.svg";

const WrapAll = styled.div`
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
  margin: 0;
  left: -90px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  border-left: 1px solid #ebebeb;
  height: 85px;
  line-height: 90px;
  background-color: #eeeeee;
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

const DivWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1100;
`;

const Cart = () => {
  return (
    <WrapAll showDiv={true}>
      <DivWrap>
        <DivLink>
          <Link to="#" id="essenceCartBtn">
            <ImgMenu src={bag} alt="bag icon" />
            <SpanCart>3</SpanCart>
          </Link>
        </DivLink>
        <div>
          <div>
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
          </div>
        </div>

        <div>
          <h2>Summary</h2>
          <ul>
            <li>
              <span>subtotal:</span> <span>$274.00</span>
            </li>
            <li>
              <span>delivery:</span> <span>Free</span>
            </li>
            <li>
              <span>discount:</span> <span>-15%</span>
            </li>
            <li>
              <span>total:</span> <span>$232.00</span>
            </li>
          </ul>
          <div>
            <Link to="checkout">check out</Link>
          </div>
        </div>
      </DivWrap>
    </WrapAll>
  );
};

export default Cart;
