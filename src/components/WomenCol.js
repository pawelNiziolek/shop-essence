import React from "react";
import { Link } from "react-router-dom";

const WomenCol = () => {
  return (
    <>
      <li>Women's Collection</li>
      <li>
        <Link to="/dresses">Dresses</Link>
      </li>
      <li>
        <Link to="/dresses">Blouses &amp; Shirts</Link>
      </li>
      <li>
        <Link to="/dresses">T-shirts</Link>
      </li>
      <li>
        <Link to="/dresses">Rompers</Link>
      </li>
      <li>
        <Link to="/dresses">Bras &amp; Panties</Link>
      </li>
    </>
  );
};

export default WomenCol;
