import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Users from "./pages/Users.jsx";
import Orders from "./pages/Orders.jsx";
import Reviews from "./pages/Reviews.jsx";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} /> 
        <Route path="/orders" element={<Orders />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
};

export default App;
