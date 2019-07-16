import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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

const settings = {
  autoPlay: true,
  infiniteLoop: true,
  showThumbs: false
};

const images = [
  { id: 1, name: img1, alt: "black dress" },
  { id: 2, name: img2, alt: "black dress" },
  { id: 3, name: img3, alt: "black dress" }
];

const SingleProductSlider = () => {
  const image = images.map(img => (
    <DivSlider key={img.id}>
      <img src={img.name} alt={img.alt} />
    </DivSlider>
  ));

  return (
    <DivWrapSlider>
      <Carousel {...settings}>{image}</Carousel>
    </DivWrapSlider>
  );
};

export default SingleProductSlider;
