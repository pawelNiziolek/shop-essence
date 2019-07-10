import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivWrapInfo = styled.div`
  display: flex;
  width: 50%;
  padding: 0 15px;
  margin-bottom: 30px;
`;

const UlInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const LiInfo = styled.li`
  width: 50%;
`;

const LinkInfo = styled(Link)`
  display: block;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  display: block;
  font-weight: 400;
  margin-bottom: 10px;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    color: white;
  }
`;

const infoLinks = [
  { id: 1, title: "Order Status" },
  { id: 2, title: "Payment Options" },
  { id: 3, title: "Shipping and Delivery" },
  { id: 4, title: "Guides" },
  { id: 5, title: "Privacy Policy" },
  { id: 6, title: "Terms of Use" }
];

const FooterAreaInfo = () => {
  const info = infoLinks.map(el => (
    <LiInfo key={el.id}>
      <LinkInfo to="#">{el.title}</LinkInfo>
    </LiInfo>
  ));
  return (
    <DivWrapInfo>
      <UlInfo>{info}</UlInfo>
    </DivWrapInfo>
  );
};

export default FooterAreaInfo;
