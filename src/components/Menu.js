import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WomenCol from "../components/WomenCol";
import MenCol from "../components/MenCol";
import KidsCol from "../components/KidsCol";
import bg6 from "../img/bg-img/bg-6.jpg";

const LiNav = styled.li`
  display: flex;
`;

const Menu = () => {
  return (
    <div>
      <div>
        <ul>
          <LiNav>
            <Link to="#">Shop</Link>
            <div>
              <WomenCol />
              <MenCol />
              <KidsCol />
              <div>
                <img src={bg6} alt="" />
              </div>
            </div>
          </LiNav>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
