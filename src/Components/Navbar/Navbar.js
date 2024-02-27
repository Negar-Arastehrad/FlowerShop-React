import React, { useContext, useState } from "react";
import "./NavbarStyle.css";
import { LuFlower } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MainContext } from '../../Context/MainContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { cartItems } = useContext(MainContext)

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <LuFlower /> Blossom
          </Link>
        </div>
        <ul className="sections">
        <li>
            <a href="#category">Categories</a>
          </li>
          <li>
            <a href="#new">New</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>

          <li>
            <a href="#newsletter">NewsLetter</a>
          </li>

          <li>
            <a href="#footer">Footer</a>
          </li>
        </ul>

        <ul className={nav ? "links active" : "links"}>
          <li onClick={closeNav}>
            <Link to="/flowers">Flowers</Link>
          </li>
          <li onClick={closeNav}>
            <Link to="/cart">Cart <p className="length">{cartItems.length > 0 ? cartItems.length : ""}</p></Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {nav ? <IoCloseOutline /> : <RxHamburgerMenu />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
