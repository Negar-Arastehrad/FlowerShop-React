import React, { useState } from "react";
import "./ProductsStyle.css";

import { Data } from "../../Data/Data.js";

const Products = () => {
  const [flowers, setFlowers] = useState(Data);

  return (
    <div className="products" id="product">
      <div className="container">
        <div className="heading">
          <h1>
            Latest <span>Products</span>
          </h1>
        </div>

        <div className="box-container">
          {flowers.map((item, index) => {
            return (
              <div className="box" key={index}>
                <div className="discount">
                  <span>{item.Discount}</span>
                </div>

                <div className="image-container">
                  <img src={item.Img} />

                  <div className="icon-container">
                    <i class="fa-solid fa-heart"></i>
                    <a href="#">Add To Cart</a>
                    <i class="fa-solid fa-share"></i>
                  </div>
                </div>

                <div className="content">
                  <h3>{item.Name}</h3>
                  <h3 className="price">
                    {item.Price} <span>{item.BeforePrice}</span>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
