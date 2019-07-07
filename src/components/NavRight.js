import React from "react";
import { Link } from "react-router-dom";
import heart from "../img/core-img/heart.svg";
import user from "../img/core-img/user.svg";
import bag from "../img/core-img/bag.svg";
import SearchButton from "../components/SearchButton";

const NavRight = () => {
  return (
    <>
      <SearchButton />
      <div>
        <Link to="#">
          <img src={heart} alt="" />
        </Link>
      </div>
      <div>
        <Link to="#">
          <img src={user} alt="" />
        </Link>
      </div>
      <div>
        <Link to="#" id="essenceCartBtn">
          <img src={bag} alt="" /> <span>3</span>
        </Link>
      </div>
    </>
  );
};

export default NavRight;
