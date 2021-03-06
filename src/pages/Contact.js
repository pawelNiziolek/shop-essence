import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContactMap from "../components/ContactMap";

const DivWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
`;

const DivWrapAdress = styled.div`
  width: 40%;
  padding: 90px 70px;
  z-index: 99;
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
  transition: 0.3s;
  :hover {
    color: #0315ff;
    cursor: pointer;
  }
`;

const adressList = {
  descr:
    "Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.",
  adress: "10 Suffolk st Soho, London, UK",
  phone: "+12 34 567 890 0",
  linkPhone: "tel: +12345678900",
  mail: "contact@essence.com",
  linkMail: "mailto: contact@essence.com"
};

const DivMap = styled.div`
  width: 60%;
`;

const Contact = () => {
  const { descr, adress, phone, linkPhone, mail, linkMail } = adressList;
  return (
    <DivWrap>
      <DivMap>
        <ContactMap />
      </DivMap>
      <DivWrapAdress>
        <H1>How to Find Us</H1>
        <PDescription>{descr}</PDescription>
        <DivAdress>
          <Pone>
            <SpanAdress>address:</SpanAdress> {adress}
          </Pone>
          <Pone>
            <SpanAdress>telephone:</SpanAdress>
            <LinkTel to={linkPhone}>{phone}</LinkTel>
          </Pone>
          <Ptwo>
            <LinkAdress to={linkMail}>{mail}</LinkAdress>
          </Ptwo>
        </DivAdress>
      </DivWrapAdress>
    </DivWrap>
  );
};

export default Contact;
