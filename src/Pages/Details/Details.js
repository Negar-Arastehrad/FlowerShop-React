import React, { useContext, useState, useEffect } from "react";
import "./DetailsStyle.css";
import { useParams } from "react-router-dom";
import SecondNav from "../../Components/SecondNav/SecondNav";
import SecondFooter from "../../Components/SecondFooter/SecondFooter";
import { FlowerData } from "../../Data/FlowerData";
import { MainContext } from "../../Context/MainContext";

const Details = () => {
  const { name } = useParams();
  const { addFlower } = useContext(MainContext);

  const [add, setAdd] = useState(false);

  const handleAdd = () => {
    setAdd(true);
    setTimeout(() => {
      setAdd(false);
    }, 2000);
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <SecondNav />
      <div className="details">
        <div className="container">
          {FlowerData.filter((f) => f.name === name).map((flower) => {
            return (
              <>
                <div className="left">
                  <img src={flower.image} alt="/" />
                </div>

                <div className="right">
                  <h1>
                    {flower.name} No. {flower.id}
                  </h1>

                  <div className="table">
                    <div className="detail">
                      <p>Height</p>
                      <p>{flower.height}</p>
                    </div>
                    <div className="detail">
                      <p>Length</p>
                      <p>{flower.length}</p>
                    </div>

                    <p className="category-text">
                      This Is The Best Choice for {flower.category} <br />
                      Giving gifts has been so far away from traditional times.
                      What kind of gift, when and how we can give it, can
                      determine the degree of intimacy of our relationships.
                    </p>
                  </div>

                  <div className="buttons">
                    <h2 className="price">${flower.price}</h2>
                    <button onClick={() => {addFlower(flower); handleAdd();}} disabled={add}>
                      {add ? 'Added To Your Cart' : 'Add To Cart'}
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <SecondFooter />
    </>
  );
};

export default Details;
