import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivWrap = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 50px;
`;

const Pcol = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 30px;
  display: block;
  color: rgb(33, 37, 41);
  font-weight: 600;
`;

const Ulcol = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
const Licol = styled.li`
  width: 20%;
  margin-bottom: 15px;
`;

const LinkCol = styled(Link)`
  width: 30px;
  height: 30px;
  display: block;
  background-color: #ff1;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.color};
`;

const colors = [
  { id: 1, path: "#", color: "white" },
  { id: 2, path: "#", color: "#969696" },
  { id: 3, path: "#", color: "black" },
  { id: 4, path: "#", color: "#0315ff" },
  { id: 5, path: "#", color: "#dc0647" },
  { id: 6, path: "#", color: "#fff56a" },
  { id: 7, path: "#", color: "#f26e51" },
  { id: 8, path: "#", color: "#9a8777" },
  { id: 9, path: "#", color: "#5b862a" },
  { id: 10, path: "#", color: "#8662a9" }
];

const ShopColor = () => {
  const color = colors.map(el => (
    <Licol key={el.id}>
      <LinkCol to={el.path} color={el.color} />
    </Licol>
  ));
  return (
    <DivWrap>
      <Pcol>Color</Pcol>
      <Ulcol>{color}</Ulcol>
    </DivWrap>
  );
};
export default ShopColor;
