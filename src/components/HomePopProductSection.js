import React from "react";
import styled from "styled-components";
import HomeSingleProduct from "./HomeSingleProduct";

const SectionProductWrap = styled.section`
  padding: 80px 15px;
  margin: 0 6%;
`;

const DivTitle = styled.div`
  width: 100%;
  text-align: center;
`;

const SpanTitle = styled.span`
  display: inline-block;
  font-size: 30px;
  padding-bottom: 50px;
  text-transform: capitalize;
  font-weight: 600;
  line-height: 1.3;
  font-family: "Ubuntu", sans-serif;
`;

const ArticleProducts = styled.article`
  display: flex;
  justify-content: space-between;
`;

const HomePopProductSection = () => {
  return (
    <SectionProductWrap>
      <DivTitle>
        <SpanTitle>Popular Products</SpanTitle>
      </DivTitle>
      <ArticleProducts>
        <HomeSingleProduct />
      </ArticleProducts>
    </SectionProductWrap>
  );
};

export default HomePopProductSection;
