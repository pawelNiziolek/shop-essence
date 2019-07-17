import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  line-height: 50px !important;
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

const IconHeart = styled.i`
  font-size: ${props => (props.heartClass ? "14px" : "15px")};
  font-weight: ${props => (props.heartClass ? "200" : "700")};
  transition: color 0.3s, font-weight 0.4s 0.2s, font-size 0.6s;
  color: ${props => (props.heartClass ? "#ccc" : "#dc0345")};
  line-height: 25px !important;
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
  line-height: 25px !important;
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
  line-height: 1.3 !important ;
  font-size: 16px;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
`;

const ParagraphPrice = styled(SpanProduct)`
  margin-bottom: 0;
  font-size: 14px;
  line-height: 2 !important ;
  color: #000000;
`;

const HomeSingleProduct = props => {
  const [heartClass, setHeartClass] = React.useState(true);
  const { id, path, img, img2, classProd, divInf, price, title, width } = props;
  return (
    <DivSingleProduct key={id} width={width}>
      <DivImageOne>
        <Img src={img} alt="" />
        <DivInfo inf={divInf}>{divInf}</DivInfo>
      </DivImageOne>
      <DivImageTwo>
        <Img src={img2} alt="" draggable={false} />
        <LinkHeart
          to="#"
          onClick={e => e.preventDefault(setHeartClass(!heartClass))}
        >
          <IconHeart className={classProd} heartClass={heartClass} />
        </LinkHeart>
        <DivInfo inf={divInf}>{divInf}</DivInfo>
        <LinkCart to="#" onClick={e => e.preventDefault()} draggable={false}>
          Add to Cart
        </LinkCart>
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
