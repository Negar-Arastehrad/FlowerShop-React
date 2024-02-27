import React from "react";
import "./FeaturesStyle.css";
import { CiGift } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { PiClipboardTextLight } from "react-icons/pi";

const Features = () => {
  return (
    <div id="features" className="features">
      <div className="container">
        <div className="box">
          <div className="icon-container">
            <CiGift className="icon"/>
          </div>
          <p className="bold">Free Delivery</p>
          <div className="line"></div>
          <i>on orders delivered to Tehran</i>
          <p>
            Except for delivering to International Fair, Grand Bazaar,
            hospitals, and large firms.
          </p>
        </div>
        <div className="box">
          <div className="icon-container">
            <CiWallet className="icon"/>
          </div>
          <p className="bold">100% Top Quality</p>
          <div className="line"></div>
          <i>Product quality warranty</i>
          <p>
            All flowers are fresh and they are provided on a daily basis. They are arranged in accordance with their images on our
            website.
          </p>
        </div>
        <div className="box">
          <div className="icon-container">
            <PiClipboardTextLight className="icon"/>
          </div>
          <p className="bold">Best Deals Online</p>
          <div className="line"></div>
          <i>Warranty return</i>
          <p>
            In case you are not satisfied with the quality of delivered product,
            we refund your payment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
