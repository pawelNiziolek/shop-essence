import React from "react";
import { Link } from "react-router-dom";

const MenCol = () => {
  return (
    <>
      <li>Men's Collection</li>
      <li>
        <Link to="/dresses">T-Shirts</Link>
      </li>
      <li>
        <Link to="/dresses">Polo</Link>
      </li>
      <li>
        <Link to="/dresses">Shirts</Link>
      </li>
      <li>
        <Link to="/dresses">Jackets</Link>
      </li>
      <li>
        <Link to="/dresses">Trench</Link>
      </li>
    </>
  );
};

export default MenCol;
