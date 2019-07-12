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

const H1Title = styled.h1`
  font-size: 24px;
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
    margin: bottom: 16px;
`;

const DivForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 30px;
`;

const SelectSC = styled.select`
  position: relative;
  z-index: 100;
  border: 1px solid #ebebeb;
  border-radius: 0;
  font-size: 14px;
  font-weight: 600;
  color: #787878;
  height: 60px;
  line-height: 60;
  padding: 0 18px;
  text-transform: uppercase;
  width: 45%;
  outline: none;
`;

const DivBtn = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const BtnCart = styled.button`
  min-width: 170px;
  height: 50px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  line-height: 50px;
  color: #ffffff;
  border: none;
  padding: 0 40px;
  text-transform: uppercase;
  background-color: #0315ff;
  letter-spacing: 1.5px;
  font-weight: 600;
`;

const DivHeart = styled.div`
  margin-left: 24px;
`;

const LinkHeart = styled(Link)`
  font-size: 24px;
  cursor: pointer;
  transition: 0.2s;
  color: #ccc;
  :focus {
    color: #dc0345;
  }
`;

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
        <H1Title>One Shoulder Glitter Midi Dress</H1Title>
        <Pprice>
          <SpanPrice>$65.00</SpanPrice> $49.00
        </Pprice>
        <Pdescription>
          Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante.
          Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.
        </Pdescription>
        <form>
          <DivForm>
            <SelectSC name="select" id="productSize">
              <option value="value">Size: XL</option>
              <option value="value">Size: X</option>
              <option value="value">Size: M</option>
              <option value="value">Size: S</option>
            </SelectSC>
            <SelectSC name="select" id="productColor">
              <option value="value">Color: Black</option>
              <option value="value">Color: White</option>
              <option value="value">Color: Red</option>
              <option value="value">Color: Purple</option>
            </SelectSC>
          </DivForm>
          <DivBtn>
            <BtnCart type="submit">Add to cart</BtnCart>
            <DivHeart>
              <LinkHeart to="#" className="favme fa fa-heart" />
            </DivHeart>
          </DivBtn>
        </form>
      </DivDescription>
    </SectionSingleProd>
  );
};

export default SingleProduct;
