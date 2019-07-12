import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MediaClose from "../components/MediaClose";
import NavigationMenuShop from "../components/NavigationMenuShop";
import NavigationNavRight from "../components/NavigationNavRight";
import logo from "../img/core-img/logo.png";

const WrapNav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85px;
  background-color: white;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: ${props => props.navJusContent || "flex-start"};
  min-width: 50%;
  width: 50%;
  padding: ${props => props.navPadding || "5px 0px 5px 5%"};
`;

const ImgLogo = styled.img`
  display: block;
  margin-right: 30px;
  padding: 10px 0;
`;

const Navigation = () => {
  return (
    <WrapNav>
      <Nav>
        <Link to="/">
          <ImgLogo src={logo} alt="" />
        </Link>
        <MediaClose />
        <NavigationMenuShop />
      </Nav>
      <Nav navJusContent="flex-end" navPadding="0">
        <NavigationNavRight />
      </Nav>
    </WrapNav>
  );
};

export default Navigation;
