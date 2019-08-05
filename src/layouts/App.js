import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Page from "./Page";
import BtnUp from "../layouts/BtnUp";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import Cart from "../layouts/Cart";

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

class App extends React.Component {
  getConfirmation(message, callback) {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }
  render() {
    return (
      <HashRouter getUserConfirmation={this.getConfirmation}>
        <ScrollToTop>
          <WrapAllDiv>
            <HeaderMenu>
              <Navigation cart={false} />
            </HeaderMenu>
            <Main>
              <Page />
              <BtnUp />
              <Cart cart={false} />
            </Main>

            <FooterArea>
              <Footer />
            </FooterArea>
          </WrapAllDiv>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;
