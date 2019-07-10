import React from "react";
import styled from "styled-components";

const DivCopyright = styled.div``;

const Pcopyright = styled.p`
  color: #787878;
  font-size: 14px;
  line-height: 2;
  font-weight: 400;
`;

const LinkColor = styled.a`
  text-decoration: none;
  outline: 0 solid transparent;
  color: #000000;
  font-weight: 600;
  font-size: 12px;
`;

const FooterCopyright = () => {
  return (
    <DivCopyright>
      <Pcopyright>
        Copyright &copy;2019 Paweł Niziołek | All rights reserved | This
        template is inspired <i className="fa fa-heart-o" aria-hidden="true" />{" "}
        by{" "}
        <LinkColor
          href="https://colorlib.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Colorlib
        </LinkColor>
      </Pcopyright>
    </DivCopyright>
  );
};

export default FooterCopyright;
