import React from "react";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Icons from "./component/Icons/Icons";
import Navbar from "./component/Navbar/Navbar";
import Products from "./component/Prouducts/Products";
import Review from "./component/Review/Review";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Icons />
      <Products />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
