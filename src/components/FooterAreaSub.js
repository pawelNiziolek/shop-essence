import React from "react";
import styled from "styled-components";
import FooterSocial from "../components/FooterSocial";

const DivSubsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 15px;
`;

const DivSubs = styled.div`
  margin-bottom: 30px;
`;

const SpanSub = styled.span`
  color: #ffffff;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 0;
  line-height: 1.3;
  font-weight: 700;
  font-family: "Ubuntu", sans-serif;
`;

const FormSub = styled.form`
  position: relative;
  z-index: 1;
  width: 270px;
`;

const InputSub = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  height: 35px;
  background-color: transparent;
`;

const ButtonSub = styled.button`
  width: 30px;
  height: 35px;
  border: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  z-index: 10;
  cursor: pointer;
`;

const DivSocial = styled.div`
  display: flex;
  width: 50%;
  padding: 0 15px;
  align-items: flex-end;
`;

const FooterAreaSub = () => {
  return (
    <>
      <DivSubsWrap>
        <DivSubs>
          <SpanSub>Subscribe</SpanSub>
        </DivSubs>
        <div>
          <FormSub action="#">
            <InputSub type="email" name="mail" placeholder="Your email here" />
            <ButtonSub type="submit">
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </ButtonSub>
          </FormSub>
        </div>
      </DivSubsWrap>
      <DivSocial>
        <FooterSocial />
      </DivSocial>
    </>
  );
};

export default FooterAreaSub;
