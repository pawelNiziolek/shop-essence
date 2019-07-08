import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Page from "./Page";
import { BrowserRouter as Router } from "react-router-dom";

const WrapAllDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Main = styled.main`
  min-height: 100vh;
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

function App() {
  return (
    <Router>
      <WrapAllDiv>
        <HeaderMenu> {<Navigation />}</HeaderMenu>
        <Main>{<Page />}</Main>
        <footer>{<Footer />}</footer>
      </WrapAllDiv>
    </Router>
  );
}

export default App;
