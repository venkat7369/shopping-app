import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Allproducts from "./components/products/Allproducts.jsx";
import SingleProduct from "./components/products/SingleProduct.jsx";
import LimitedResults from "./components/products/LimitedResults.jsx";
import AllCategories from "./components/categories/AllCategories.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/Allproduct", element: <Allproducts /> },
      { path: "/AllCategories", element: <AllCategories /> },
      { path: "/LimitedResults", element: <LimitedResults /> },
      { path: "/SingleProduct", element: <SingleProduct /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
