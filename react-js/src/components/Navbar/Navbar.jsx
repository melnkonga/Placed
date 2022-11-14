import React from "react";
import NavbarItem from "./NavbarItem/NavbarItem";
import "./Navbar.css";

const Navbar = () => {
  const navbarItems = [
    { link: "/", name: "Home" },
    { link: "/posts", name: "Posts" },
    { link: "/trip", name: "My trips" },
  ];
  return (
    <div className="navbar">
      {navbarItems.map((item, index) => (
        <NavbarItem key={index} link={item.link} name={item.name} />
      ))}
    </div>
  );
};

export default Navbar;
