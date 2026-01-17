/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Container,
  Badge,
  IconButton,
  Fab,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion, useScroll, useTransform, useSpring } from "framer-motion"; // Added framer hooks

import Hero from "./views/Hero";
import ProductCard from "./views/ProductCard";
import ProductDetailsModal from "./views/ProductDetailsModal";
import CartDrawer from "./views/CartDrawer";
import ParallaxMarquee from "./views/ParallaxMarquee";
import FeaturesSection from "./views/FeaturesSection";
import LoginModal from "./views/LoginModal";

// --- Floating Background Component ---
const FloatingFruit = ({ color, top, left, size, speed = 1, delay = 0 }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300 * speed]);

  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
        opacity: 0.3,
        filter: "blur(20px)",
        zIndex: -1,
        y: y,
      }}
      animate={{
        y: [0, 20, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 10 + delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

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
  {
    id: 4,
    title: "Lemon Zest",
    price: "4.99",
    color: "#FFFF00",
    img: "https://images.unsplash.com/photo-1608686207403-90efc3d23864?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    title: "Melon Magic",
    price: "6.99",
    color: "#00FF7F",
    img: "https://images.unsplash.com/photo-1625265855158-944964795553?auto=format&fit=crop&w=400&q=80",
  },
];

const Components = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Parallax hook for the Product Grid
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create staggered parallax effects for even/odd columns
  const yEven = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yOdd = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // --- Cart Logic ---
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const updateQuantity = (id, change) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id)
          return { ...item, quantity: Math.max(1, item.quantity + change) };
        return item;
      }),
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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box sx={{ overflowX: "hidden", minHeight: "100vh", position: "relative" }}>
      {/* --- Floating Parallax Background Elements --- */}
      <FloatingFruit
        color="#FF8E53"
        top="10%"
        left="5%"
        size={100}
        speed={0.5}
      />
      <FloatingFruit
        color="#FE6B8B"
        top="30%"
        left="90%"
        size={150}
        speed={0.8}
        delay={2}
      />
      <FloatingFruit
        color="#4ECDC4"
        top="60%"
        left="10%"
        size={80}
        speed={0.2}
        delay={1}
      />
      <FloatingFruit
        color="#FFFF00"
        top="80%"
        left="85%"
        size={120}
        speed={0.6}
        delay={3}
      />

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(18, 18, 18, 0.8)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "900",
              letterSpacing: 1,
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FRESH.
          </Typography>
          <IconButton
            onClick={() => setIsCartOpen(true)}
            sx={{ color: "white" }}
          >
            <Badge
              badgeContent={cart.reduce((acc, item) => acc + item.quantity, 0)}
              color="primary"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Hero />

      <Box sx={{ position: "relative", zIndex: 2 }}>
        <ParallaxMarquee />
      </Box>

      <FeaturesSection />

      <Container sx={{ py: 8 }} id="products-section" ref={ref}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", mb: 2, fontWeight: 800 }}
        >
          Our <span style={{ color: "#FE6B8B" }}>Fresh</span> Picks
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          textAlign="center"
          mb={8}
        >
          Select your flavor of the day
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {products.map((p, index) => (
            <Grid key={p.id}>
              {/* Here we apply different transforms based on index to create 
                 a 'staggered' parallax grid effect as you scroll 
               */}
              <motion.div style={{ y: index % 2 === 0 ? yEven : yOdd }}>
                <ProductCard
                  {...p}
                  image={p.img}
                  onClick={() => handleProductClick(p)}
                  onAddToCart={() => addToCart(p)}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          py: 6,
          mt: 10,
          background: "rgba(255,255,255,0.02)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Container>
          <Grid
            container
            spacing={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h5" fontWeight="bold">
                FRESH.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                © 2024 Fresh Juice Co.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                Instagram • Twitter • Facebook
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ProductDetailsModal
        open={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
        onAddToCart={() => addToCart(selectedProduct)}
      />

      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      <Fab
        color="primary"
        size="small"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          opacity: 0.8,
          zIndex: 100,
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
};

export default Components;
