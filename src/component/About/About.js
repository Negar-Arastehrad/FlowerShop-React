import React from "react";
import "./AboutStyle.css";

import Video from "../../images/about-vid.mp4";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        
        <div className="heading">
          <h1>
            <span>About</span> Us
          </h1>
        </div>

        <div className="row">
          <div className="video-container">
            <video src={Video} autoPlay loop muted></video>
            <h3>Best Flower Sellers</h3>
          </div>

          <div className="content">
            <h3>Why Choose Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              cumque sit nemo pariatur corporis perspiciatis aspernatur a ullam
              repudiandae autem asperiores quibusdam omnis commodi alias
              repellat illum, unde optio temporibus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium ea est commodi incidunt magni quia molestias
              perspiciatis, unde repudiandae quidem.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
