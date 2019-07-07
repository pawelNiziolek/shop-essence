import React from "react";
import styled from "styled-components";
import Header from "./Header";
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

function App() {
  return (
    <Router>
      <WrapAllDiv>
        {<Navigation />}
        <header>{<Header />}</header>
        <main>
          <section>{<Page />}</section>
        </main>
        <footer>{<Footer />}</footer>
      </WrapAllDiv>
    </Router>
  );
}

export default App;
