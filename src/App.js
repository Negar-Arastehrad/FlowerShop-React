import Category from "./Components/Category/Category";
import Features from "./Components/Features/Features";
import Navbar from "./Components/Navbar/Navbar";
import New from "./Components/New/New";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Slider from "./Components/Slider/Slider";
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Category />
      <New />
      <Features />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
