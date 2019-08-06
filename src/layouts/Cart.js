import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapAll = styled.div`
  position: fixed;
  /* display: ${props => (props.showDiv ? "block" : "none")}; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props =>
    props.showDiv ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)"};
  z-index: 1050;
  transition: 0.45s;
`;

const Cart = props => {
  return (
    <>
      <WrapAll showDiv={true} />
      <div>
        <Link to="#" id="rightSideCart">
          <img src="img/core-img/bag.svg" alt="" /> <span>3</span>
        </Link>
      </div>

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
    </>
  );
};

export default Cart;
