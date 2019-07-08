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
  padding: 5px 0 5px 5px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  min-width: 50%;
  width: 50%;
`;

const Navigation = () => {
  return (
    <WrapNav>
      <Nav>
        <Link to={"../pages/Home.js"}>
          <img src={logo} alt="" />
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
