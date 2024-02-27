import React from "react";
import "./NewStyle.css";
import { FlowerData } from "../../Data/FlowerData";
import { Link } from "react-router-dom";

const New = () => {
  return (
    <div className="new" id="new">
     
      <div className="container">

        {FlowerData.filter((f) => f.isNew).map((flower) => {
          return (
            <Link to={`/flowers/${flower.name}`} className="box" key={flower.id}>
              <div className="img-container">
                <img src={flower.image} alt="/" />
                <div className="content">
                  <p>New</p>
                </div>
              </div>
              <p className="name">{flower.name}</p>
              <p className="price">$ {flower.price}</p>
            </Link>
          );
        })}

      </div>
    </div>
  );
};

export default New;
