import React, { useState, useEffect } from "react";
import "./FlowersStyle.css";
import SecondNav from "../../Components/SecondNav/SecondNav";
import SecondFooter from "../../Components/SecondFooter/SecondFooter";
import { FlowerData } from "../../Data/FlowerData";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Flowers = () => {
  const [page, setPage] = useState(1);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= FlowerData.length / 3 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])


  return (
    <>
      <SecondNav />
      <div className="flowers">
        <div className="container">
          <h1>Our Flowers</h1>
          <div className="flower-container">
            {FlowerData.slice(page * 3 - 3, page * 3).map((flower) => {
              return (
                <Link to={`/flowers/${flower.name}`} className="box">
                  <div className="img-container">
                    <img src={flower.image} alt="" />
                  </div>
                  <div className="content">
                    <p>{flower.name}</p>
                    <p>{flower.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="pagination">

            <button onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>
            <IoIosArrowBack />
            </button>

            {[...Array(FlowerData.length / 3)].map((_, i) => {
              return (
                <button onClick={() => selectPageHandler(i + 1)} key={i} className={page === i+1 ? 'active' : ''}>
                  {i + 1}
                </button>
              );
            })}

            <button onClick={() => selectPageHandler(page + 1)} className={page < FlowerData.length / 3 ? "" : "pagination__disable"}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <SecondFooter />
    </>
  );
};

export default Flowers;
