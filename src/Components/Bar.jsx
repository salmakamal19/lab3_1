// src/Pages/Bar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, Box } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const totalItemsInCart = useSelector((state) => state.cart.totalQuantity);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#a89283" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Our Store</Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/cart" style={{ color: "white" }}>
            <IconButton color="inherit">
              <Badge badgeContent={totalItemsInCart} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
