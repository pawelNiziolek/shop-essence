import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MediaClose from "../components/MediaClose";
import Menu from "../components/Menu";
import NavRight from "../components/NavRight";
import logo from "../img/core-img/logo.png";

const WrapNav = styled.div`
  display: flex;
  height: 85px;
  width: 100%;
`;

const NavLeft = styled.nav`
  width: 50%;
  /* overflow: hidden; */
`;

const NavRigh = styled.div`
  width: 50%;
`;

const Navigation = () => {
  return (
    <WrapNav>
      <NavLeft>
        <Link to={"../pages/Home.js"}>
          <img src={logo} alt="" />
        </Link>
        <MediaClose />
        <Menu />
      </NavLeft>
      <NavRigh>
        <NavRight />
      </NavRigh>
    </WrapNav>
  );
};

export default Navigation;
