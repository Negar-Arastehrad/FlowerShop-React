import React from "react";
import './IconsSelectStyle.css'

function IconsSelect({IconImg,Head,Details}) {

    return(

  <div className="icons-container">
    <img src={IconImg} />
    <div className="info">
      <h3>{Head}</h3>
      <span>{Details}</span>
    </div>
  </div>
)

}

export default IconsSelect;
