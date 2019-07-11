import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LiCollection = styled.li`
  font-size: 14px;
  border-bottom: ${props => props.bottomLine || 0};
  padding: 8px 12px;
  color: #333;
`;

const LinkColl = styled(Link)`
  color: #787878;
  transition: 0.2s;
  :hover {
    color: #333;
  }
`;

const NavigationWomenCol = () => {
  return (
    <>
      <LiCollection bottomLine="1px solid #f2f4f8">
        Women's Collection
      </LiCollection>
      <LiCollection>
        <LinkColl to="/dresses">Dresses</LinkColl>
      </LiCollection>
      <LiCollection>
        <LinkColl to="/dresses">Blouses &amp; Shirts</LinkColl>
      </LiCollection>
      <LiCollection>
        <LinkColl to="/dresses">T-shirts</LinkColl>
      </LiCollection>
      <LiCollection>
        <LinkColl to="/dresses">Rompers</LinkColl>
      </LiCollection>
      <LiCollection>
        <LinkColl to="/dresses">Bras &amp; Panties</LinkColl>
      </LiCollection>
    </>
  );
};

export default NavigationWomenCol;
