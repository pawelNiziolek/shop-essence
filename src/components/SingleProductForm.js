import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  transition: 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    background-color: #dc0345;
  }
  :focus {
    background-color: #dc0345;
    box-shadow: 0 0 2px 2px #999;
  }
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

const SingleProductForm = () => {
  return (
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
  );
};

export default SingleProductForm;
