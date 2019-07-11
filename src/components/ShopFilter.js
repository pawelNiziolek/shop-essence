import React from "react";
import styled from "styled-components";

const DivWrap = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 50px;
`;

const H1 = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  text-transform: capitalize;
  margin-bottom: 30px;
`;

const Pprice = styled.p`
  color: rgb(33, 37, 41);
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 30px;
  display: block;
  font-weight: 600;
`;

const DivSlider = styled.div`
  position: relative;
  height: 5px;
  border: 1px solid #c5c5c5;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const DivSliderRange = styled.div`
  background-color: #0315ff;
  position: absolute;
  z-index: 1;
  font-size: 0.7em;
  display: block;
  border: 0;
  background-position: 0 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SpanRight = styled.span`
  position: absolute;
  z-index: 2;
  background-color: #000000;
  border: none;
  top: -6px;
  left: 0%;
  width: 4px;
  height: 15px;
  margin: 0;
`;

const SpanLeft = styled(SpanRight)`
  left: 100%;
`;
const DivRange = styled.div`
  color: rgb(33, 37, 41);
  font-size: 12px;
  font-weight: 600;
  margin-top: 15px;
  text-transform: uppercase;
`;

const ShopFilter = () => {
  return (
    <DivWrap>
      <H1>Filter by</H1>
      <Pprice>Price</Pprice>
      <DivSlider
        data-min="49"
        data-max="360"
        data-unit="$"
        data-value-min="49"
        data-value-max="360"
        data-label-result="Range:"
      >
        <DivSliderRange />
        <SpanRight tabindex="0" />
        <SpanLeft tabindex="0" />
      </DivSlider>
      <DivRange>Range: $49.00 - $360.00</DivRange>
    </DivWrap>
  );
};

export default ShopFilter;
