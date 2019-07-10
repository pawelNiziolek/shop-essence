import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const social = [
  { id: 1, title: "Facebook", classSoc: "fab fa-facebook-f" },
  { id: 2, title: "Instagram", classSoc: "fab fa-instagram" },
  { id: 3, title: "Twitter", classSoc: "fab fa-twitter" },
  { id: 4, title: "Pinterest", classSoc: "fab fa-pinterest" },
  { id: 5, title: "Youtube", classSoc: "fab fa-youtube" }
];

const LinkSoc = styled(Link)`
  color: #ffffff;
  display: inline-block;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
`;

const FooterSocial = () => {
  const socialLink = social.map(el => {
    const { id, title, classSoc } = el;
    return (
      <LinkSoc
        to="#"
        key={id}
        // data-toggle="tooltip"
        // data-placement="top"
        title={title}
      >
        <i className={classSoc} />
      </LinkSoc>
    );
  });
  return <>{socialLink}</>;
};

export default FooterSocial;
