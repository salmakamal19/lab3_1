// src/Pages/Cart.jsx
import React from "react";
import { Button, Typography, Box, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, incrementQuantity, decrementQuantity, removeItem } from "../slices/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const ShoppingCart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Box sx={{ padding: 3, maxWidth: "100%", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Box textAlign="center" py={4}>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Your cart is currently empty
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Browse products and add them to your cart.
          </Typography>
        </Box>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card key={item.id} sx={{ display: "flex", mb: 2, p: 2 }}>
              <Box sx={{ width: 100, height: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                />
              </Box>

              <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: EGP{item.price} per unit
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton color="primary" onClick={() => dispatch(decrementQuantity(item.id))}>
                      <RemoveCircleIcon />
                    </IconButton>
                    <Typography variant="body1" mx={1}>{item.quantity}</Typography>
                    <IconButton color="primary" onClick={() => dispatch(incrementQuantity(item.id))}>
                      <AddCircleIcon />
                    </IconButton>
                  </Box>

                  <Typography variant="body1" fontWeight="bold">
                    EGP{(item.price * item.quantity).toFixed(2)}
                  </Typography>

                  <IconButton color="error" onClick={() => dispatch(removeItem(item.id))}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3, pt: 2, borderTop: "1px solid #e0e0e0" }}>
            <Typography variant="h6">Total: EGP{calculateTotalPrice()}</Typography>
            <Button variant="contained" color="secondary" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ShoppingCart;
