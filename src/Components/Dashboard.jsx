// src/Pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import ProductCard from "./Products";

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Grid container spacing={{ xs: 2, sm: 4, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {products.map((product) => (
        <Grid key={product.id} item xs={2} sm={4} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductDashboard;
