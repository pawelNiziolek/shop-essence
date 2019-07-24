import React from "react";
import styled from "styled-components";
import CheckoutAccordion from "../components/CheckoutAccordion";

const ArticleWrap = styled.article`
  padding: 40px;
  width: 100%;
  border: 2px solid #ebebeb;
`;

const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const PTitle = styled.p`
  font-size: 20px;
  line-height: 1.3;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
  margin-bottom: 8px;
`;

const PDetails = styled.p`
  color: #787878;
  font-size: 14px;
  line-height: 2;
  font-weight: 400;
  margin-bottom: 16px;
`;

const UlDetails = styled.ul`
  margin-bottom: 24px;
`;

const LiDetails = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
  font-size: 12px;
  text-transform: uppercase;
  padding: 20px 0;
  border-bottom: 2px solid #ebebeb;
  font-weight: 600;
  color: #212529;
`;

const ButtonOrder = styled.button`
  min-width: 170px;
  height: 50px;
  color: #ffffff;
  border: none;
  border-radius: 0;
  padding: 0 40px;
  text-transform: uppercase;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  line-height: 50px;
  background-color: #0315ff;
  letter-spacing: 1.5px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  :hover {
    background-color: #dc0345;
  }
  :focus {
    background-color: #dc0345;
    box-shadow: 0 0 2px 2px #999;
  }
`;

const orders = [
  { id: 1, title: "product", total: "total" },
  { id: 2, title: "Cocktail Yellow dress", total: "$59.90" },
  { id: 3, title: "subtotal", total: "$59.90" },
  { id: 4, title: "shipping", total: "free" },
  { id: 5, title: "total", total: "$59.90" }
];

const checkArticleOrder = () => {
  const order = orders.map(el => (
    <LiDetails key={el.id}>
      <span>{el.title}</span> <span>{el.total}</span>
    </LiDetails>
  ));
  return (
    <ArticleWrap>
      <DivTitle>
        <PTitle>Your Order</PTitle>
        <PDetails>The Details</PDetails>
      </DivTitle>
      <UlDetails>{order}</UlDetails>
      <CheckoutAccordion />
      <ButtonOrder type="submit">Place Order</ButtonOrder>
    </ArticleWrap>
  );
};

export default checkArticleOrder;
