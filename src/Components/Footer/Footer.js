import React from "react";
import "./FooterStyle.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        
        <div className="column-1">
          <h1>Blossom FlowerShop</h1>
          <p>Connect With Us</p>
          <p>We'd Love To Chat</p>
        </div>

        <div className="column-2">
          <div className="row">
            <FaLocationDot className="icon"/>
            <p>Office No. 3- 18F - Dubai - UAE</p>
          </div>
          <div className="row">
            <FaPhoneAlt className="icon"/>
            <p>+971 4 250 9874</p>
          </div>
          <div className="row">
            <IoMail className="icon"/>
            <p>info@blossom.flowers</p>
          </div>
        </div>

        <div className="column-3">
          <h1>About Us</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            consequuntur deleniti impedit vero in numquam.
          </p>
          <div className="icons">
            <FaInstagram className="icon"/>
            <IoLogoTwitter className="icon"/>
            <FaFacebookF className="icon"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
