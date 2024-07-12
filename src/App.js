import React from "react";
import Allproducts from "./components/products/Allproducts.jsx";
import './App.css';
import Login from './components/Login';
import SingleProduct from "./components/products/SingleProduct.jsx";
import {useState}  from 'react';
import LimitedResults from "./components/products/LimitedResults.jsx";
import AllCategories from "./components/categories/AllCategories.jsx";




function App() {

  const [showSingleProduct, setShowSingleProduct] = useState(false);
   const [showLimitedResults, setShowLimitedResults] = useState(false);
   const [showAllCategories, setShowAllCategories] = useState('false');
   const [showDefaultComponent, setShowDefaultComponent] = useState(true);


  const handleButtonClick = () => {
    setShowSingleProduct(true);
    setShowAllCategories(false);
    setShowLimitedResults(false);
    setShowDefaultComponent(false);
  };

  const LimitedButtonClick = () => {
    setShowLimitedResults(true);
    setShowSingleProduct(false);
    setShowAllCategories(false);
    setShowDefaultComponent(false);
  }

  const AllCategoriesClick = () => {
    setShowLimitedResults(false);
    setShowSingleProduct(false);
    setShowAllCategories(true);
    setShowDefaultComponent(false);
  }

  const AllDefaultClick = () => {
    setShowLimitedResults(false);
    setShowSingleProduct(false);
    setShowAllCategories(false);
    setShowDefaultComponent(true);

  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Login />
      <div className="flex space-x-4 mt-8">
        <button
          className="border border-gray-300 px-4 py-2 rounded-md bg-blue-500 text-white"
          onClick={handleButtonClick}
        >
          Show Single Product
        </button>
        <button
          className="border border-gray-300 px-4 py-2 rounded-md bg-green-500 text-white"
          onClick={LimitedButtonClick}
        >
          Limited Products
        </button>
        <button
          className="border border-gray-300 px-4 py-2 rounded-md bg-yellow-500 text-white"
          onClick={AllCategoriesClick}
        >
          All Categories
        </button>
        <button
          className="border border-gray-300 px-4 py-2 rounded-md bg-purple-500 text-white"
          onClick={AllDefaultClick}
        >
          All Products
        </button>
      </div>

      <div className="mt-8">
        {showSingleProduct && <SingleProduct />}
        {showLimitedResults && <LimitedResults />}
        {showAllCategories && <AllCategories />}
        {showDefaultComponent && <Allproducts />}
      </div>
    </div>
  );
}

export default App;