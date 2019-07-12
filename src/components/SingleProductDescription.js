import React from "react";
import styled from "styled-components";

const SpanBrand = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  color: #787878;
  margin-bottom: 10px;
  display: block;
`;

const H1Title = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
  line-height: 1.3;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
`;

const Pprice = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  color: #dc0345;
  font-weight: 700;
  line-height: 1.5;
`;

const SpanPrice = styled(Pprice)`
  display: inline-block;
  color: #787878;
  text-decoration: line-through;
  margin: 0 15px 10px 0;
`;

const Pdescription = styled.p`
  font-size: 16px;
  color: #787878;
  font-weight: 400;
  margin-bottom: 16px;
`;

const description = {
  brand: "mango",
  title: "One Shoulder Glitter Midi Dress",
  price: "$49.00",
  oldPrice: "$65.00",
  descr: `"Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin."`
};
const SingleProductdescription = () => {
  const { brand, title, price, oldPrice, descr } = description;
  return (
    <>
      <SpanBrand>{brand}</SpanBrand>
      <H1Title>{title}</H1Title>
      <Pprice>
        <SpanPrice>{oldPrice}</SpanPrice>
        {price}
      </Pprice>
      <Pdescription>{descr}</Pdescription>
    </>
  );
};

export default SingleProductdescription;
