import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bgImage from "../img/bg-img/bg-1.jpg";

const SectionWelcome = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 600px;
  background-image: url(${bgImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const DivContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
`;

const SpanAsoss = styled.span`
  font-size: 18px;
  color: #787878;
  margin-bottom: 10px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
`;

const SpanNew = styled.span`
  font-size: 60px;
  color: #000000;
  margin-bottom: 50px;
  line-height: 1.3;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
`;

const LinkBtn = styled(Link)`
  align-self: flex-start;
  min-width: 170px;
  height: 50px;
  color: #ffffff;
  border: none;
  padding: 0 40px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 50px;
  background-color: #0315ff;
  letter-spacing: 1.5px;
  font-weight: 600;
  text-align: center;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  :hover {
    background-color: #dc0345;
  }
  :focus {
    background-color: #dc0345;
    box-shadow: 0 0 1px 2px #999;
  }
`;

const Home = () => {
  return (
    <>
      <SectionWelcome>
        <DivContainer>
          <DivContent>
            <SpanAsoss>asoss</SpanAsoss>
            <SpanNew>New Collection</SpanNew>
            <LinkBtn to="#">view collection</LinkBtn>
          </DivContent>
        </DivContainer>
      </SectionWelcome>
    </>
  );
};

export default Home;
