import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const liNumber = [
  { id: 1, path: "#", num: "", classI: "fa fa-angle-left" },
  { id: 2, path: "#", num: "1", classI: "" },
  { id: 3, path: "#", num: "2", classI: "" },
  { id: 4, path: "#", num: "3", classI: "" },
  { id: 5, path: "#", num: "...", classI: "" },
  { id: 6, path: "#", num: "21", classI: "" },
  { id: 7, path: "#", num: "", classI: "fa fa-angle-right" }
];

const UlPage = styled.ul`
  display: flex;
  margin: 50px 0 70px;
  list-style: none;
`;

const LiPage = styled.li`
  :first-of-type {
    margin-right: 15px;
  }
  :last-of-type {
    margin-left: 15px;
  }
`;

const LinkPage = styled(Link)`
  display: block;
  margin: 0 0 0 -1px;
  width: 40px;
  height: 40px;
  border: 1px solid #ebebeb;
  font-size: 12px;
  font-weight: 600;
  line-height: 38px;
  text-align: center;
  color: #787878;
  outline: none;
  transition: 0.15s;
  :focus {
    color: #0315ff;
  }
  :hover {
    background-color: #e9ecef;
  }
`;

const ShopPageNumber = () => {
  const numPage = liNumber.map(li => {
    return (
      <LiPage key={li.id}>
        <LinkPage to={li.path}>
          {li.num}
          <i className={li.classI} />
        </LinkPage>
      </LiPage>
    );
  });
  return (
    <nav>
      <UlPage>{numPage}</UlPage>
    </nav>
  );
};

export default ShopPageNumber;
