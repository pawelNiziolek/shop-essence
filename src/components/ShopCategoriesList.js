import React from "react";
import ShopSingleList from "./ShopSingleList";
import styled from "styled-components";
import SlideToggle from "react-slide-toggle";

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
  color: #000000;
  font-weight: 600;
  cursor: pointer;
`;

const DivHide = styled.div`
  overflow: hidden;
`;

const ShopCategoriesList = () => {
  const singleProd = products.map(el => (
    <SlideToggle key={el.title} collapsed={true}>
      {({ onToggle, setCollapsibleElement }) => (
        <div className="my-collapsible">
          <SpanTitle
            to={el.path}
            className="my-collapsible__toggle"
            onClick={onToggle}
          >
            {el.title}
          </SpanTitle>
          <DivHide
            className="my-collapsible__content"
            ref={setCollapsibleElement}
            style={{ display: "block !important" }}
          >
            <ShopSingleList />
          </DivHide>
        </div>
      )}
    </SlideToggle>
  ));

  return <DivWrap>{singleProd}</DivWrap>;
};

export default ShopCategoriesList;
