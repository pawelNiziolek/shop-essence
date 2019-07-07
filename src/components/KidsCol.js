import React from "react";
import { Link } from "react-router-dom";

const KidsCol = () => {
  return (
    <ul>
      <li>Kid's Collection</li>
      <li>
        <Link to="/dresses">Dresses</Link>
      </li>
      <li>
        <Link to="/dresses">Shirts</Link>
      </li>
      <li>
        <Link to="/dresses">T-shirts</Link>
      </li>
      <li>
        <Link to="/dresses">Jackets</Link>
      </li>
      <li>
        <Link to="/dresses">Trench</Link>
      </li>
    </ul>
  );
};

export default KidsCol;
