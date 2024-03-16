import React from "react";
import './CategoriesPageStyle.css'
import { useParams } from 'react-router-dom'
import { FlowerData } from '../../Data/FlowerData'
import SecondNav from '../../Components/SecondNav/SecondNav'
import SecondFooter from '../../Components/SecondFooter/SecondFooter'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";



const CategoriesPage = () => {

    const { category_name } = useParams()

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])
    
  return (
    <>
    <SecondNav />
    <BreadCrumbs />
    <div className="category-page">
      <div className="container">

        <h1>Our Suggestions For </h1> <h2> {category_name}</h2>
        <div className="products">
          {FlowerData.filter((f) => f.category === category_name).map((flower) => {
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
            )
          })}
        </div>
      </div>
    </div>
    <SecondFooter />
    </>
  )
}

export default CategoriesPage