import React, { useState } from "react";
import "./NavbarStyle.css";

const Navbar = () => {

    const [nav,setNav] = useState(false);
    const handleNav = () => setNav(!nav);

  return (
    <div className="navbar">
      <div className="container">

        <div className="hamburger" onClick={handleNav}>
          <i className={ nav ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </div>

        <div className="logo">
          <a href="#">
            Flowers<span>.</span>
          </a>
        </div>

        <ul className={nav ? 'nav-list active' : 'nav-list'}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#product">Products</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="icon">
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
