import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeWomenCol from "./HomeWomenCol";
import HomeMenCol from "./HomeMenCol";
import HomeKidsCol from "./HomeKidsCol";
import bg6 from "../img/bg-img/bg-6.jpg";

const UlWrapMenu = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const LiNav = styled.li`
  list-style: none;
`;

const DivWrapMenu = styled.div`
  display: flex;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  width: 100%;
  left: 0;
  top: 120%;
  background-color: #fff;
  z-index: 200;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  :hover {
    opacity: 1;
    visibility: visible;
    top: 85px;
  }
`;

const LinkMenu = styled(Link)`
  padding: 20px 15px;
  color: #787878;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: #333;
  }
  :hover + ${DivWrapMenu} {
    opacity: 1;
    visibility: visible;
    top: 85px;
  }
`;

const UlMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 15px;
  list-style: none;
  border-left: ${props => props.leftLine || "none"};
`;

const Iicon = styled.i`
  font-size: 11px;
  padding-left: 5px;
`;

const DivImg = styled.div`
  width: 25%;
  padding: 15px;
`;

const Menu = () => {
  return (
    <div>
      <div>
        <UlWrapMenu>
          <LiNav>
            <LinkMenu to="#">
              Shop
              <Iicon className="fas fa-chevron-down" />
            </LinkMenu>
            <DivWrapMenu>
              <UlMenu>
                <HomeWomenCol />
              </UlMenu>
              <UlMenu leftLine="1px solid #f2f4f8">
                <HomeMenCol />
              </UlMenu>
              <UlMenu leftLine="1px solid #f2f4f8">
                <HomeKidsCol />
              </UlMenu>
              <DivImg>
                <img src={bg6} alt=" brown bag" />
              </DivImg>
            </DivWrapMenu>
          </LiNav>
          <LiNav>
            <LinkMenu to="/blog">Blog</LinkMenu>
          </LiNav>
          <LiNav>
            <LinkMenu to="/contact">Contact</LinkMenu>
          </LiNav>
        </UlWrapMenu>
      </div>
    </div>
  );
};

export default Menu;
