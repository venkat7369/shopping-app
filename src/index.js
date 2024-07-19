import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from './App';
import Allproducts from "./components/products/Allproducts.jsx";
import SingleProduct from "./components/products/SingleProduct.jsx";
import LimitedResults from "./components/products/LimitedResults.jsx";
import AllCategories from "./components/categories/AllCategories.jsx";
import SortResults from './components/products/SortResults.jsx';
import Login from './components/Login';

const AppWrapper = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  const ProtectedRoute = ({ children }) => {
    if (!authToken) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <RouterProvider 
      router={createBrowserRouter([
        {
          path: "/",
          element: <App setAuthToken={setAuthToken} />,
          children: [
            { path: "/", element: <ProtectedRoute><Allproducts /></ProtectedRoute> },
            { path: "/AllCategories", element: <ProtectedRoute><AllCategories /></ProtectedRoute> },
            { path: "/LimitedResults", element: <ProtectedRoute><LimitedResults /></ProtectedRoute> },
            { path: "/SingleProduct", element: <ProtectedRoute><SingleProduct /></ProtectedRoute> },
            { path: "/SortResults", element: <ProtectedRoute><SortResults /></ProtectedRoute> },
          ]
        },
        { path: "/login", element: <Login setAuthToken={setAuthToken} /> },
      ])} 
    />
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWrapper />);
