import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img1 from "../img/product-img/product-big-1.jpg";
import img2 from "../img/product-img/product-big-2.jpg";
import img3 from "../img/product-img/product-big-3.jpg";

const SectionSingleProd = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
`;

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

const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px 4%;
`;

const SpanBrand = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  color: #787878;
  margin-bottom: 10px;
  display: block;
`;

const H2Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  line-height: 1.3;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
`;

const Pprice = styled.p`
  margin-bottom: 0;
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  color: #dc0345;
  font-weight: 700;
  line-height: 2;
`;

const SpanPrice = styled(Pprice)`
  display: inline-block;
  color: #787878;
  text-decoration: line-through;
  margin-right: 15px;
`;

const Pdescription = styled.p`
    font-size: 16px;
    color: #787878;
    font-weight: 400;
    margin: bottom: 16px;
`;

const DivForm = styled.div``;

const SingleProduct = () => {
  return (
    <SectionSingleProd>
      <DivWrapSlider>
        <DivSlider>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </DivSlider>
      </DivWrapSlider>
      <DivDescription>
        <SpanBrand>mango</SpanBrand>
        <H2Title>One Shoulder Glitter Midi Dress</H2Title>
        <Pprice>
          <SpanPrice>$65.00</SpanPrice> $49.00
        </Pprice>
        <Pdescription>
          Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante.
          Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.
        </Pdescription>
        <form>
          <DivForm>
            <select name="select" id="productSize">
              <option value="value">Size: XL</option>
              <option value="value">Size: X</option>
              <option value="value">Size: M</option>
              <option value="value">Size: S</option>
            </select>
            <select name="select" id="productColor">
              <option value="value">Color: Black</option>
              <option value="value">Color: White</option>
              <option value="value">Color: Red</option>
              <option value="value">Color: Purple</option>
            </select>
          </DivForm>
          <div>
            <button type="submit" name="addtocart" value="5">
              Add to cart
            </button>
            <div>
              <Link to="#" className="favme fa fa-heart" />
            </div>
          </div>
        </form>
      </DivDescription>
    </SectionSingleProd>
  );
};

export default SingleProduct;
