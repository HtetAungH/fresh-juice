import React, { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Container,
  Badge,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { theme } from "../theme";
import Hero from "./views/Hero";
import ProductCard from "./views/ProductCard";
import ProductDetailsModal from "./views/ProductDetailsModal";
import CartDrawer from "./views/CartDrawer";

// Data
const products = [
  {
    id: 1,
    title: "Sunny Orange",
    price: "5.99",
    color: "#FF8E53",
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Berry Blast",
    price: "6.49",
    color: "#FE6B8B",
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Kiwi Kick",
    price: "5.49",
    color: "#4ECDC4",
    img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=400&q=80",
  },
];

const Components = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Cart State
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //Add to Cart Logic (Handles duplicates by increasing quantity)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Optional: Open cart automatically when adding
    // setIsCartOpen(true);
  };

  //Remove from Cart Logic
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  //  Update Quantity Logic
  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          // Prevent quantity from going below 1
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 200);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflowX: "hidden", minHeight: "100vh" }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                color: theme.palette.primary.main,
              }}
            >
              FRESH.
            </Typography>
            {/*  Cart Icon in Header */}
            <IconButton
              onClick={() => setIsCartOpen(true)}
              sx={{ color: "white" }}
            >
              <Badge
                badgeContent={cart.reduce(
                  (acc, item) => acc + item.quantity,
                  0
                )}
                color="primary"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Hero />

        <Container sx={{ py: 8 }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", mb: 8, fontWeight: 700 }}
          >
            Our <span style={{ color: theme.palette.primary.main }}>Fresh</span>{" "}
            Picks
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {products.map((p) => (
              <Grid item key={p.id}>
                <ProductCard
                  {...p}
                  image={p.img}
                  onClick={() => handleProductClick(p)}
                  onAddToCart={() => addToCart(p)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>

        <ProductDetailsModal
          open={isModalOpen}
          onClose={handleCloseModal}
          product={selectedProduct}
          onAddToCart={() => addToCart(selectedProduct)}
        />

        {/* Render Cart Drawer */}
        <CartDrawer
          open={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </Box>
    </ThemeProvider>
  );
};

export default Components;
