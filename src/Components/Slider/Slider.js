import React, { useState } from "react";
import "./SliderStyle.css";
import { SliderData } from "../../Data/SliderData";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSLide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current ? "opacity container" : "nopacity container"
            }
          >
            <span className="back" onClick={prevSLide}>
              <IoIosArrowBack />
            </span>

            {index === current && (
              <>
                <div className="content">
                  <h1>Blossom</h1>
                  <p>Flowers Need Time To Bloom</p>
                  <p>So Do You!</p>
                </div>
                <div className="img">
                  <img src={slide.image} alt="/" />
                </div>
              </>
            )}

            <span className="next" onClick={nextSlide}>
              <IoIosArrowForward />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
