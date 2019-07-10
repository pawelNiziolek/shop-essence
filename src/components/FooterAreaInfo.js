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

const FooterAreaInfo = () => {
  return (
    <DivWrapInfo>
      <UlInfo>
        <LiInfo>
          <LinkInfo to="#">Order Status</LinkInfo>
        </LiInfo>
        <LiInfo>
          <LinkInfo to="#">Payment Options</LinkInfo>
        </LiInfo>
        <LiInfo>
          <LinkInfo to="#">Shipping and Delivery</LinkInfo>
        </LiInfo>
        <LiInfo>
          <LinkInfo to="#">Guides</LinkInfo>
        </LiInfo>
        <LiInfo>
          <LinkInfo to="#">Privacy Policy</LinkInfo>
        </LiInfo>
        <LiInfo>
          <LinkInfo to="#">Terms of Use</LinkInfo>
        </LiInfo>
      </UlInfo>
    </DivWrapInfo>
  );
};

export default FooterAreaInfo;
