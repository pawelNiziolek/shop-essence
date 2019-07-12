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

const collection = [
  { id: 1, path: "/shop", title: "Dresses" },
  { id: 2, path: "/shop", title: "Shirts" },
  { id: 3, path: "/shop", title: "T-shirts" },
  { id: 4, path: "/shop", title: "Jackets" },
  { id: 5, path: "/shop", title: "Trench" }
];

const NavigationKidsCol = () => {
  const liCollection = collection.map(li => (
    <LiCollection key={li.id}>
      <LinkColl to={li.path}>{li.title}</LinkColl>
    </LiCollection>
  ));
  return (
    <>
      <LiCollection bottomLine="1px solid #f2f4f8">
        Kid's Collection
      </LiCollection>
      {liCollection}
    </>
  );
};

export default NavigationKidsCol;
