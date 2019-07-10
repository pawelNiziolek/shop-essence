import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo2 from "../img/core-img/logo2.png";

const DivWrapInfo = styled.div`
  display: flex;
  width: 50%;
  padding: 0 15px;
  margin-bottom: 30px;
`;

const DivLogo = styled.div`
  display: flex;
  margin-right: 50px;
  padding: 2px 0;
`;

const ImgInfo = styled.img`
  height: auto;
  width: 100%;
  cursor: pointer;
`;

const UlPage = styled.ul`
  display: flex;
  list-style: none;
`;

const LinkPage = styled(Link)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  display: block;
  font-weight: 400;
  font-family: "Ubuntu", sans-serif;
  padding: 0 10px;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: white;
  }
`;

const FooterAreaPage = () => {
  return (
    <DivWrapInfo>
      <DivLogo>
        <Link to="#">
          <ImgInfo src={logo2} alt="logo Essence" />
        </Link>
      </DivLogo>
      <UlPage>
        <li>
          <LinkPage to="/shop">Shop</LinkPage>
        </li>
        <li>
          <LinkPage to="/blog">Blog</LinkPage>
        </li>
        <li>
          <LinkPage to="/contact">Contact</LinkPage>
        </li>
      </UlPage>
    </DivWrapInfo>
  );
};

export default FooterAreaPage;
