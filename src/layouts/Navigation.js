import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MediaClose from "../components/MediaClose";
import Menu from "../components/Menu";
import NavRight from "../components/NavRight";
import logo from "../img/core-img/logo.png";

const WrapNav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85px;
  padding: 5px 0 5px 5%;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  min-width: 50%;
  width: 50%;
`;

const ImgLogo = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
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
        <Menu />
      </Nav>
      <Nav>
        <NavRight />
      </Nav>
    </WrapNav>
  );
};

export default Navigation;
