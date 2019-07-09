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

const HomeMenCol = () => {
  return (
    <>
      <LiCollection bottomLine="1px solid #f2f4f8">
        Men's Collection
      </LiCollection>
      <LiCollection>
        <LinkColl to="/dresses">T-Shirts</LinkColl>
      </LiCollection>
      <LiCollection>
        <LinkColl to="/dresses">Polo</LinkColl>
      </LiCollection>
      <LiCollection>
        <LinkColl to="/dresses">Shirts</LinkColl>
      </LiCollection>
      <LiCollection>
        <LinkColl to="/dresses">Jackets</LinkColl>
      </LiCollection>
      <LiCollection>
        <LinkColl to="/dresses">Trench</LinkColl>
      </LiCollection>
    </>
  );
};

export default HomeMenCol;
