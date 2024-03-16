import React, { useContext, useState, useEffect } from "react";
import "./CartStyle.css";
import SecondNav from "../../Components/SecondNav/SecondNav";
import SecondFooter from "../../Components/SecondFooter/SecondFooter";
import { MdLock } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import { MainContext } from "../../Context/MainContext";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";

const Cart = () => {
  const [checkBox, setCheckBox] = useState(false);

  const { cartItems, removeFLower, addFlower, clearCart } =
    useContext(MainContext);

  const totalPrice = cartItems.reduce(
    (price, flower) => price + flower.quantity * flower.price,
    0
  );

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <SecondNav />
      <BreadCrumbs />
      <div className="cart">
        <div className="container">
          {cartItems.length === 0 && (
            <div className="empty">
              <h1>Your Cart Is Empty</h1>
              <Link to="/flowers">Find Your Flower</Link>
            </div>
          )}

          {cartItems.length >= 1 && (
            <>
              <div className="left">
                <div className="heading">
                  <p>Flower</p>
                  <p>Price</p>
                  <p>QTY</p>
                  <p>Total</p>
                </div>

                {cartItems.map((flower) => {
                  return (
                    <div className="flower-container">
                      <div className="img-container">
                        <img src={flower.image} alt="/" />
                      </div>
                      <p>$ {flower.price}</p>
                      <div className="add">
                        <button onClick={() => addFlower(flower)}>+</button>
                        <p>{flower.quantity}</p>
                        <button onClick={() => removeFLower(flower)}>-</button>
                      </div>
                      <p>$ {flower.quantity * flower.price}</p>
                    </div>
                  );
                })}

                <button className="clear" onClick={clearCart}>
                  Clear Your Cart
                </button>
              </div>
              <div className="right">
                <h1>Cart Total : $ {totalPrice}</h1>
                <p>Taxes Calculated At CheckOut</p>
                <div className="checkbox">
                  <label>I Agree to Privacy Policy</label>
                  <input
                    type="checkbox"
                    checked={checkBox}
                    onChange={(e) => setCheckBox(e.target.checked)}
                  />
                </div>

                <button>
                  {checkBox ? 'Checked Out' : 'Check Out'}
                  {checkBox ? <IoMdUnlock /> : <MdLock />}
                </button>
                <button>Pay</button>
              </div>
            </>
          )}
        </div>
      </div>
      <SecondFooter />
    </>
  );
};

export default Cart;
