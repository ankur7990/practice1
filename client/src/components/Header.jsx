import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navStyle = ({ isActive }) => ({
    marginRight: "15px",
    textDecoration: isActive ? "underline" : "none",
    color: isActive ? "blue" : "black",
  });
  return (
    <nav>
      <NavLink to="/" style={navStyle}>
        Home{" "}
      </NavLink>
      <NavLink to="/login" style={navStyle}>
        Login{" "}
      </NavLink>
      <NavLink to="/signup" style={navStyle}>
        Signup{" "}
      </NavLink>
      <NavLink to="/dashboard" style={navStyle}>
        Dashboard{" "}
      </NavLink>
    </nav>
  );
};

export default Header;
