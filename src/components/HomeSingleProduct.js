import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const DivImageOne = styled.div`
  position: relative;
`;

const DivImageTwo = styled.div`
  position: relative;
  width: 100%;
  display: none;
`;

const DivSingleProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  margin-bottom: 50px;
  :hover ${DivImageOne} {
    display: none;
  }
  :hover ${DivImageTwo} {
    display: block;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
`;

const LinkCart = styled(Link)`
  position: absolute;
  bottom: 30px;
  left: 20px;
  right: 20px;
  display: inline-block;
  min-width: 170px;
  width: calc(100% - 40px);
  height: 50px;
  color: #ffffff;
  border: none;
  border-radius: 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 50px;
  background-color: #0315ff;
  letter-spacing: 1.5px;
  font-weight: 600;
  transition: 0.2s ease-in-out;
  :hover {
    background-color: #dc0345;
  }
  :focus {
    background-color: #dc0345;
    box-shadow: 0 0 2px 2px #999;
  }
`;

const heart = keyframes`
0% {
  font-weight: 700;
  color: #ccc;
}
30% {
  font-weight: 700;
  font-size: 16px;
  color: #ccc;
}
75% {
  font-weight: 200;
  font-size: 16px;
  color: #dc0345;
}
100% {
  font-weight: 700;
  color: #dc0345;
}
`;

const IconHeart = styled.i`
  font-size: 14px;
  font-weight: 700;
  color: #ccc;
  line-height: 25px;
  z-index: 10;
`;

const LinkHeart = styled(Link)`
  position: absolute;
  height: 25px;
  width: 45px;
  top: 20px;
  right: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: 0.2s ease-in-out;
  :focus ${IconHeart} {
    color: #dc0345;
    animation: ${heart} 0.4s;
  }
`;

const DivInfo = styled.div`
  position: absolute;
  height: 25px;
  width: 45px;
  top: 20px;
  left: 20px;
  background-color: ${props => (props.inf === "New" ? "#0315ff" : "#dc0345")};
  color: #ffffff;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  padding: 0 10px;
`;

const SpanShop = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  color: #787878;
  letter-spacing: 0.75px;
  font-weight: 600;
`;

const SpanProduct = styled.span`
  color: #222222;
  margin-bottom: 5px;
  line-height: 1.3;
  font-size: 16px;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
`;

const ParagraphPrice = styled(SpanProduct)`
  margin-bottom: 0;
  font-size: 14px;
  line-height: 2;
  color: #000000;
`;

const HomeSingleProduct = props => {
  const { id, path, img, img2, classProd, divInf, price, title, width } = props;
  return (
    <DivSingleProduct key={id} width={width}>
      <DivImageOne>
        <Img src={img} alt="" />
        <DivInfo inf={divInf}>{divInf}</DivInfo>
      </DivImageOne>
      <DivImageTwo>
        <Img src={img2} alt="" />
        <LinkHeart to="#">
          <IconHeart className={classProd} />
        </LinkHeart>
        <DivInfo inf={divInf}>{divInf}</DivInfo>
        <LinkCart to="#">Add to Cart</LinkCart>
      </DivImageTwo>
      <DivDescription>
        <SpanShop>topshop</SpanShop>
        <Link to={path}>
          <SpanProduct>{title}</SpanProduct>
        </Link>
        <ParagraphPrice>{price}</ParagraphPrice>
      </DivDescription>
    </DivSingleProduct>
  );
};

export default HomeSingleProduct;
