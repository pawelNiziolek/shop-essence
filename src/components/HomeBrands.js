import React from "react";
import styled from "styled-components";
import Brand1 from "../img/core-img/brand1.png";
import Brand2 from "../img/core-img/brand2.png";
import Brand3 from "../img/core-img/brand3.png";
import Brand4 from "../img/core-img/brand4.png";
import Brand5 from "../img/core-img/brand5.png";
import Brand6 from "../img/core-img/brand6.png";

const DivWrapBrands = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 100px 5%;
`;

const DivSingleBrand = styled(DivWrapBrands)`
  width: 12%;
  justify-content: space-around;
  padding: 0;
`;

const imagesBrand = [
  { id: 1, img: Brand1 },
  { id: 2, img: Brand2 },
  { id: 3, img: Brand3 },
  { id: 4, img: Brand4 },
  { id: 5, img: Brand5 },
  { id: 6, img: Brand6 }
];

const HomeBrands = () => {
  const images = imagesBrand.map(images => {
    const { id, img } = images;
    return (
      <DivSingleBrand key={id}>
        <img src={img} alt="" />
      </DivSingleBrand>
    );
  });
  return <DivWrapBrands>{images}</DivWrapBrands>;
};

export default HomeBrands;
