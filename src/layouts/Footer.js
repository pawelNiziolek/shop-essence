import React from "react";
import styled from "styled-components";
import FooterAreaPage from "../components/FooterAreaPage";
import FooterAreaInfo from "../components/FooterAreaInfo";
import FooterAreaSub from "../components/FooterAreaSub";
import FooterCopyright from "../components/FooterCopyright";

const DivContainer = styled.div`
  width: 100%;
  padding: 0 6%;
`;

const ArtInfo = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const ArtCopyright = styled(ArtInfo)`
  padding-top: 50px;
  justify-content: center;
`;

const Footer = () => {
  return (
    <DivContainer>
      <ArtInfo>
        <FooterAreaPage />
        <FooterAreaInfo />
      </ArtInfo>
      <ArtInfo>
        <FooterAreaSub />
      </ArtInfo>
      <ArtCopyright>
        <FooterCopyright />
      </ArtCopyright>
    </DivContainer>
  );
};

export default Footer;
