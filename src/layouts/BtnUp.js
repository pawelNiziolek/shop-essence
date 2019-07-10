import React from "react";
import styled from "styled-components";
import BackToTop from "react-back-to-top-button";

const DivUp = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  background-color: #ff084e;
  border-radius: 0;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  color: #ffffff;
  height: 40px;
  width: 40px;
  text-align: center;
  z-index: 99090909;
  cursor: pointer;
`;

const Iicon = styled.i`
  font-size: 14px;
  line-height: 40px;
`;

const BtnUp = () => {
  return (
    <BackToTop showOnScrollUp showAt={100} speed={1500} easing="easeInOutQuint">
      <Iicon className="fas fa-chevron-up" aria-hidden="true" />
    </BackToTop>
  );
};

export default BtnUp;
