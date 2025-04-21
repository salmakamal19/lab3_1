// src/Pages/Products.jsx
import React, { useState } from "react";
import { Card, CardContent, CardActions, CardMedia, IconButton, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id) ? prevFavorites.filter((fav) => fav !== id) : [...prevFavorites, id]
    );
  };

  const addProductToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="product-card">
      <Box sx={{ height: 160, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
        <CardMedia component="img" image={product.image} alt={product.title} sx={{ objectFit: "contain" }} />
      </Box>

      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Price: EGP{product.price}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Category: {product.category}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", height: 50, overflow: "hidden" }}>
          {product.description?.length > 100 ? `${product.description.slice(0, 100)}...` : product.description}
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton onClick={() => toggleFavorite(product.id)}>
          <FavoriteIcon sx={{ color: favorites.includes(product.id) ? "red" : "gray" }} />
        </IconButton>
        <button className="add-to-cart-button" onClick={() => addProductToCart(product)}>
          Add to Cart
        </button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
