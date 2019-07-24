import React from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";
import "../otherStyle/accordionstyle.css";

const Iicon = styled.i`
  margin-right: 20px;
`;

const SpanTitle = styled.span`
  display: block;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 12px 20px;
  cursor: pointer;
`;

const DivHide = styled.div`
  padding: 20px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const Ptext = styled.p`
  font-size: 12px;
  line-height: 2;
  color: #9f9f9f;
`;

const payments = [
  {
    id: 1,
    title: "Paypal",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus."
  },
  {
    id: 2,
    title: "cash on delivery",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus."
  },
  {
    id: 3,
    title: "credit card",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus."
  },
  {
    id: 4,
    title: "direct bank transfer",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus."
  }
];

const CheckoutAccordion = () => {
  const paymentsChoice = payments.map(el => (
    <AccordionItem key={el.id}>
      <AccordionItemHeading>
        <AccordionItemButton style={{ outline: "none" }}>
          <SpanTitle>
            <Iicon className="fa fa-circle-o mr-3" />
            {el.title}
          </SpanTitle>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <DivHide>
          <Ptext>{el.text}</Ptext>
        </DivHide>
      </AccordionItemPanel>
    </AccordionItem>
  ));
  return (
    <Accordion allowZeroExpanded={true} style={{ marginBottom: "24px" }}>
      {paymentsChoice}
    </Accordion>
  );
};

export default CheckoutAccordion;
