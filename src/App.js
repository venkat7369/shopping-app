import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex space-x-4 mt-8">
        <Link to="/SingleProduct">
          <button className="border border-gray-300 px-4 py-2 rounded-md bg-blue-500 text-white">
            Show Single Product
          </button>
        </Link>
        <Link to="/LimitedResults">
          <button className="border border-gray-300 px-4 py-2 rounded-md bg-green-500 text-white">
            Limited Products
          </button>
        </Link>
        <Link to="/AllCategories">
          <button className="border border-gray-300 px-4 py-2 rounded-md bg-yellow-500 text-white">
            All Categories
          </button>
        </Link>
        <Link to="/">
          <button className="border border-gray-300 px-4 py-2 rounded-md bg-purple-500 text-white">
            All Products
          </button>
        </Link>
        <Link to="/SortResults">
          <button className="border border-gray-300 px-4 py-2 rounded-md bg-red-500 text-white">
            Sorted Results
          </button>
        </Link>
      </div>
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
