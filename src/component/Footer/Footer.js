import React from "react";
import FooterSelect from "../FooterSelect/FooterSelect";
import "./FooterStyle.css";

import Img from '../../images/payment.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="box-container">
            <FooterSelect Head='Quick Links' One='Home' Two='About' Three='Products' Four='Review' Five='Contact' />
            <FooterSelect Head='Extra Links' One='My Account' Two='My Orders' Three='My Favourites' Four='The Newest' Five='Gift Shop' />
            <FooterSelect Head='Locations' One='Iran' Two='USA' Three='Japan' Four='France' Five='UK' />
            <FooterSelect Head='Contact Info' One='+123-666-9999' Two='example@gmail.com' Three='Iran-Tehran' Img={Img} />
        </div>
        <div className="credit">
          <h3>
             all rights <span>reserved</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
