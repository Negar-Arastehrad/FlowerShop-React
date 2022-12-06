import React from "react";
import './ReviewSelectStyle.css';

function ReviewSelect({UserImg,UserName,UserNick}){

    return(
        <div className="box">

            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              asperiores laboriosam praesentium enim maiores? Ad repellat
              voluptates alias facere repudiandae dolor accusamus enim ut odit,
              aliquam nesciunt eaque nulla dignissimos.
            </p>

            <div className="user">
              <img src={UserImg}/>
              <div className="user-info">
                <h3>{UserName}</h3>
                <span>{UserNick}</span>
              </div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            
          </div>
    )

}

export default ReviewSelect;