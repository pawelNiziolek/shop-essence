import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const items = [
  { id: 1, path: "#", title: "All" },
  { id: 2, path: "#", title: "Bodysuits" },
  { id: 3, path: "#", title: "Dresses" },
  { id: 4, path: "#", title: "Hoodies & Sweats" },
  { id: 5, path: "#", title: "Jackets & Coats" },
  { id: 6, path: "#", title: "Jeans" },
  { id: 7, path: "#", title: "Pants & Leggins" },
  { id: 8, path: "#", title: "Rompers & Jumpsuits" },
  { id: 9, path: "#", title: "Shirts & Blouses" },
  { id: 10, path: "#", title: "Shirts" },
  { id: 11, path: "#", title: "Sweaters & Knits" }
];

const UlList = styled.ul`
  margin-left: 15px;
  margin-bottom: 15px;
  list-style: none;
`;

const LinkItems = styled(Link)`
  display: block;
  text-decoration: "none";
  text-transform: capitalize;
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 300;
  color: #787878;
  cursor: pointer;
  transition: 0.15s;
  :hover {
    color: #007bff;
  }
`;

const ShopSingleList = () => {
  const itemsList = items.map(item => (
    <li key={item.id}>
      <LinkItems to={item.path}>{item.title}</LinkItems>
    </li>
  ));
  return <UlList>{itemsList} </UlList>;
};

export default ShopSingleList;
