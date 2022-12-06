import React from "react";
import './FooterSelectStyle.css';


function FooterSelect({Head,One,Two,Three,Four,Five,Img}){
    return(
        <div className="info">
                <h3>{Head}</h3>
                <ul>
                    <li>{One}<a href="#"></a></li>
                    <li>{Two}<a href="#"></a></li>
                    <li>{Three}<a href="#"></a></li>
                    <li>{Four}<a href="#"></a></li>
                    <li>{Five}<a href="#"></a></li>
                    
                </ul>
                <img src={Img}/>
                
            </div>
            
    )
}

export default FooterSelect;