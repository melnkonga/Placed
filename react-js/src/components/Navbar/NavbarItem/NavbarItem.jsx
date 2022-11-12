import React from "react";
import { Link } from "react-router-dom";
import "./NavbarItem.css";

const NavbarItem = (props) => {
  const { link, name } = props;
  return (
    <li className="navbar-item">
      <Link to={link}>{name}</Link>
    </li>
  );
};

export default NavbarItem;
