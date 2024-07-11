import React from "react";
import Allproducts from "./components/products/Allproducts.jsx"
import './App.css';
import Login from './components/Login';
import SingleProduct from "./components/products/SingleProduct";

function App() {
  return (
    <div className="App">
      <Login/>
      
      <Allproducts/>
      
    </div>
  );
}

export default App;
