import React, { useContext } from "react";
import "./SecondNavStyle.css";
import { LuFlower } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";

const SecondNav = () => {
  const { cartItems } = useContext(MainContext);

  return (
    <div className="second-nav">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <LuFlower /> Blossom
          </Link>
        </div>

        <ul className="links">
          <li>
            <NavLink
              to="/flowers"
              className={({ isActive }) => {
                return isActive ? "active-page" : "";
              }}
            >
              Flowers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => {
                return isActive ? "active-page" : "";
              }}
            >
              Cart <p className="length">{cartItems.length > 0 ? cartItems.length : ""}</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecondNav;
