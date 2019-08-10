import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imgProduct1 from "../img/product-img/product-1.jpg";
import imgProduct2 from "../img/product-img/product-2.jpg";
import imgProduct3 from "../img/product-img/product-3.jpg";

const orders = [
  {
    id: 0,
    img: imgProduct1,
    shop: "Mango",
    title: "Button Through Strap Mini Dress",
    size: "S",
    color: "blue",
    price: "$45.00"
  },
  {
    id: 0,
    img: imgProduct2,
    shop: "Bershka",
    title: "Button Through Strap Mini Dress",
    size: "M",
    color: "Red",
    price: "$65.00"
  },
  {
    id: 0,
    img: imgProduct3,
    shop: "Zara",
    title: "Button Through Strap Mini Dress",
    size: "L",
    color: "black",
    price: "$55.00"
  }
];

const DivListOrder = styled.div`
  position: relative;
  /* width: 190px; */
  width: 100%;
  overflow: hidden;
`;

const ImgBackground = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const DivProdDesc = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px 15px 15px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.4s;
  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const SpanShop = styled.span`
  display: block;
  font-weight: 600;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  margin-bottom: 5px;
  text-align: left;
  padding: 0;
`;

const PDesc = styled.p`
  font-size: 12px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 30px;
  line-height: 1.3;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
`;

const PSizeColor = styled.p`
  display: block;
  font-weight: 600;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  margin-bottom: 5px;
  line-height: 1;
`;

const PPrice = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 30px;
  color: #ffffff;
`;

const SpanClose = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  color: #ffffff;
  font-size: 12px;
  padding: 5px;
`;

const CartSingleOrder = () => {
  const cartOrders = orders.map(order => {
    const { id, title, color, size, price, shop, img } = order;
    return (
      <DivListOrder key={id}>
        <Link to="#">
          <ImgBackground src={img} alt="" />
          <DivProdDesc>
            <SpanClose>
              <i className="fa fa-close" aria-hidden="true" />
            </SpanClose>
            <SpanShop>{shop}</SpanShop>
            <PDesc>{title}</PDesc>
            <PSizeColor>Size: {size}</PSizeColor>
            <PSizeColor>Color: {color}</PSizeColor>
            <PPrice>{price}</PPrice>
          </DivProdDesc>
        </Link>
      </DivListOrder>
    );
  });
  return cartOrders;
};

export default CartSingleOrder;
