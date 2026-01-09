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
} from "@mui/material";
import { theme } from "./theme";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import ProductDetailsModal from "./components/ProductDetailsModal"; // Import the modal

// Data moved outside component to avoid recreation
const products = [
  {
    id: 1,
    title: "Sunny Orange",
    price: "5.99",
    color: "#FF8E53",
    // High-quality orange juice image
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Berry Blast",
    price: "6.49",
    color: "#FE6B8B",
    // Vibrant strawberry/berry smoothie
    img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Kiwi Kick",
    price: "5.49",
    color: "#4ECDC4",
    // Fresh green juice
    img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=400&q=80",
  },
];

function App() {
  // 1. State for the modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Handler to open modal
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // 3. Handler to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Optional: delay clearing selectedProduct slightly for smooth exit animation
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
                {/* 4. Pass the click handler */}
                <ProductCard
                  {...p}
                  image={p.img} // Map img to image prop
                  onClick={() => handleProductClick(p)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* 5. Render the Modal */}
        <ProductDetailsModal
          open={isModalOpen}
          onClose={handleCloseModal}
          product={selectedProduct}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
