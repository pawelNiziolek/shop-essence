import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivWrap = styled.div`
  display: flex;
  align-items: center;
`;

const DivMap = styled.div`
  width: 60%;
`;

const DivWrapAdress = styled.div`
  width: 40%;
  padding: 50px;
`;

const H1 = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  line-height: 1.3;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
`;

const PDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #787878;
  line-height: 2;
  margin-bottom: 16px;
`;

const DivAdress = styled.div`
  margin-top: 50px;
`;

const Pone = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #787878;
  line-height: 2;
`;

const SpanAdress = styled.span`
  font-weight: 600;
  color: #000000;
  width: 100px;
  display: inline-block;
  text-transform: uppercase;
`;
const LinkTel = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #787878;
  line-height: 2;
`;

const Ptwo = styled(Pone)`
  margin-top: 100px;
  font-weight: 300;
  font-size: 14px;
`;

const LinkAdress = styled(Link)`
  color: black;
`;

const adressList = {
  descr:
    "   Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.",
  adress: "10 Suffolk st Soho, London, UK",
  phone: "+12 34 567 890 0"
};

const Contact = () => {
  const { descr, adress, phone } = adressList;
  return (
    <DivWrap>
      <DivMap>
        <div id="googleMap" />
      </DivMap>
      <DivWrapAdress>
        <H1>How to Find Us</H1>
        <PDescription>{descr}</PDescription>
        <DivAdress>
          <Pone>
            <SpanAdress>address</SpanAdress> {adress}
          </Pone>
          <Pone>
            <SpanAdress>telephone:</SpanAdress>
            <LinkTel to="tel: +12 34 567 890 0">{phone}</LinkTel>
          </Pone>
          <Ptwo>
            <LinkAdress to="mailto:contact@essence.com">
              contact@essence.com
            </LinkAdress>
          </Ptwo>
        </DivAdress>
      </DivWrapAdress>
    </DivWrap>
  );
};

export default Contact;
