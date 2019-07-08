import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import WomenCol from "../components/WomenCol";
import MenCol from "../components/MenCol";
import KidsCol from "../components/KidsCol";
import bg6 from "../img/bg-img/bg-6.jpg";

const UlWrapMenu = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const LiNav = styled.li`
  list-style: none;
`;

const LinkMenu = styled.a`
  padding: 10px 15px;
  color: #787878;
  font-size: 16px;
  cursor: pointer;
`;

const DivWrapMenu = styled.div`
  display: flex;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  width: 100%;
  left: 0;
  top: 85px;
  background-color: #fff;
  z-index: 200;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  transition-duration: 0.3s;
`;

const UlMenu = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Menu = () => {
  return (
    <div>
      <div>
        <UlWrapMenu>
          <LiNav>
            <LinkMenu to="#">Shop</LinkMenu>
            <DivWrapMenu>
              <UlMenu>
                <WomenCol />
              </UlMenu>
              <UlMenu>
                <MenCol />
              </UlMenu>
              <UlMenu>
                <KidsCol />
              </UlMenu>
              <div>
                <img src={bg6} alt="" />
              </div>
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
