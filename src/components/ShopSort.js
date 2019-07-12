import React from "react";
import styled from "styled-components";

const DivWrap = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 100;
  margin-bottom: 40px;
`;

const P = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: rgb(33, 37, 41);
  text-transform: uppercase;
  letter-spacing: 0.75px;
`;

const SpanFound = styled.span`
  color: #0315ff;
`;

const DivSort = styled.div`
  display: flex;
  align-items: center;
`;

const Psort = styled(P)`
  margin-right: 15px;
`;

const SelectSort = styled.select`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;
  font-family: "Poppins", "sans-serif";
`;

const ShopSort = () => {
  return (
    <DivWrap>
      <P>
        <SpanFound>186</SpanFound> products found
      </P>
      <DivSort>
        <Psort>Sort by:</Psort>
        <form action="#">
          <SelectSort>
            <option>Highest Rated</option>
            <option>Newest</option>
            <option>Price: $$ - $</option>
            <option>Price: $ - $$</option>
          </SelectSort>
        </form>
      </DivSort>
    </DivWrap>
  );
};

export default ShopSort;
