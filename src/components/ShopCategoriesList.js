import React from "react";
import ShopSingleList from "./ShopSingleList";
import styled from "styled-components";

const products = [
  { id: 1, path: "#", title: "Clothing" },
  { id: 2, path: "#", title: "Shoes" },
  { id: 3, path: "#", title: "Accessories" }
];

const DivWrap = styled.div`
  margin-bottom: 50px;
`;

const SpanTitle = styled.span`
  display: block;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 12px;
  color: rgb(33, 37, 41);
  font-weight: 600;
  cursor: pointer;
`;

const DivWrapShopList = styled.div`
  transition: 0.5s;
  transform: ${props => (props.show ? "translateY(0%)" : "translateY(-110%)")};
  height: ${props => (props.show ? "100%" : "0")};
`;

const DivHidden = styled.div`
  overflow: hidden;
`;

const ShopCategoriesList = () => {
  const [show, setShowUl] = React.useState(false);
  const singleProd = products.map(el => (
    <DivHidden key={el.title}>
      <SpanTitle to={el.path} onClick={() => setShowUl(!show)}>
        {el.title}
      </SpanTitle>
      <DivWrapShopList show={show}>
        <ShopSingleList />
      </DivWrapShopList>
    </DivHidden>
  ));

  return <DivWrap>{singleProd}</DivWrap>;
};

export default ShopCategoriesList;
