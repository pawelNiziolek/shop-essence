import React from "react";
import styled from "styled-components";
import SingleProductSlider from "../components/SingleProductSlider";
import SingleProductDescription from "../components/SingleProductDescription";
import SingleProductForm from "../components/SingleProductForm";

const SectionSingleProd = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
`;

const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px 5%;
`;

const SingleProduct = () => {
  return (
    <SectionSingleProd>
      <SingleProductSlider />
      <DivDescription>
        <SingleProductDescription />
        <SingleProductForm />
      </DivDescription>
    </SectionSingleProd>
  );
};

export default SingleProduct;
