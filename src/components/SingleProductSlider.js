import React from "react";
import styled from "styled-components";
import img1 from "../img/product-img/product-big-1.jpg";
import img2 from "../img/product-img/product-big-2.jpg";
import img3 from "../img/product-img/product-big-3.jpg";

const DivWrapSlider = styled.div`
  position: relative;
  width: 50%;
  z-index: 1;
  overflow: hidden;
`;

const DivSlider = styled.div`
  position: relative;
  display: flex;
`;

const SingleProductSlider = () => {
  return (
    <DivWrapSlider>
      <DivSlider>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </DivSlider>
    </DivWrapSlider>
  );
};

export default SingleProductSlider;
