import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Page from "./Page";
import BtnUp from "../layouts/BtnUp";
import { BrowserRouter as Router } from "react-router-dom";

const WrapAllDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Main = styled.main`
  margin-top: 85px;
`;

const HeaderMenu = styled.header`
  position: fixed;
  z-index: 900;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  transition-duration: 500ms;
`;

const FooterArea = styled.footer`
  position: relative;
  z-index: 1;
  background-color: #252525;
  padding: 70px 0 60px;
`;

function App() {
  return (
    <Router>
      <WrapAllDiv>
        <HeaderMenu> {<Navigation />}</HeaderMenu>
        <Main>
          {<Page />}
          <BtnUp />
        </Main>
        <FooterArea>{<Footer />}</FooterArea>
      </WrapAllDiv>
    </Router>
  );
}

export default App;
