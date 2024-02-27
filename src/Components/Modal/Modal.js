import React from "react";
import "./ModalStyle.css";
import { IoClose } from "react-icons/io5";
import Flower from '../../Images/Flowers-pana.svg'


const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal" onClick={onClose}>
      
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <div className="left">
        <div className="close" onClick={onClose}>
          <IoClose />
        </div>
        <div className="img-container">
          <img src={Flower} alt="/" />
        </div>
        </div>

        <div className="right">
          <h1>Don't Miss Out!</h1>
          <p>Join Our NewsLetter</p>
          <form>
            <input type="email" placeholder="Your Email..." />
            <input type="submit" value="Submit" />
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
