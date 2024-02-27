import React, { useState } from "react";
import "./CategoryStyle.css";
import { Link } from "react-router-dom";

import F4 from "../../Images/F-4.JPG";
import F5 from "../../Images/F-5.JPG";
import F11 from "../../Images/F-11.JPG";
import F13 from "../../Images/F-13.JPG";
import F15 from "../../Images/F-15.JPG";

const Category = () => {
  const [categories, setCategories] = useState([
    { Category_name: "bouquet", Category_image: F4 },
    { Category_name: "bucket", Category_image: F5 },
    { Category_name: "box", Category_image: F11 },
    { Category_name: "candle", Category_image: F13 },
    { Category_name: "gift", Category_image: F15 },
  ]);

  return (
    <div className="category" id="category">
      <div className="container">
        {categories.map((c) => {
          return (
            <Link to={`${c.Category_name}`} className="box">
              <div className="img-container">
                <img src={c.Category_image} alt="" />
                <p>{c.Category_name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
