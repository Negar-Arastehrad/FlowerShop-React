import React from "react";
import "./ReviewStyle.css";

import Pic1 from '../../images/pic-1.png';
import Pic2 from '../../images/pic-2.png';
import Pic3 from '../../images/pic-3.png';
import ReviewSelect from "../ReviewSelect/ReviewSelect";

const Review = () => {
  return (
    <div className="review" id="reviews">
      <div className="container">

        <div className="heading">
          <h1>
            Customer's <span>Review</span>
          </h1>
        </div>

        <div className="box-container">
            
            <ReviewSelect UserImg={Pic1} UserName='Sarah Doe' UserNick='Happy User' />
            <ReviewSelect UserImg={Pic2} UserName='John Doe' UserNick='Happy User' />
            <ReviewSelect UserImg={Pic3} UserName='David Doe' UserNick='Happy User' />

        </div>
      </div>
    </div>
  );
};

export default Review;
