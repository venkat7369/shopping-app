import React from "react";
import Allproducts from "./components/products/Allproducts.jsx";
import './App.css';
import Login from './components/Login';
import SingleProduct from "./components/products/SingleProduct.jsx";
import {useState}  from 'react';
import LimitedResults from "./components/products/LimitedResults.jsx";



function App() {

  const [showSingleProduct, setShowSingleProduct] = useState(false);
   const [showLimitedResults, setShowLimitedResults] = useState(false);


  const handleButtonClick = () => {
    setShowSingleProduct(true);
  };

  const LimitedButtonClick = () => {
    setShowLimitedResults(true);
  }

  return (
    <div className="App">
      <Login/>
      <button className="border-l-red-950" onClick={handleButtonClick}>Show Single Product</button>
      {showSingleProduct ? <SingleProduct /> : <Allproducts />}
      <button onClick={LimitedButtonClick}>Limited Products</button>
      {showLimitedResults ? <LimitedResults /> : <Allproducts />}

      
      
    </div>
  );
}

export default App;
