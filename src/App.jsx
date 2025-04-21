// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/Bar.jsx";
import ShoppingCart from "./Components/cart.jsx";
import ProductDashboard from "./Components/Dashboard.jsx";
import ProductDetail from "./Components/Products.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<ProductDashboard />} />
          <Route path="/Components/Products" element={<ProductDetail />} />
          <Route path="/Components/Cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
