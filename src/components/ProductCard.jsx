/* eslint-disable no-unused-vars */
// src/components/ProductCard.jsx
import React from "react";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { motion } from "framer-motion";

const ProductCard = ({ title, price, image, color, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        sx={{
          width: 350,
          borderRadius: "8px",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "visible",
          position: "relative",
          mt: 4,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <Box
          sx={{
            position: "absolute",
            top: -30,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <motion.img
            src={image}
            alt={title}
            layoutId={`image-${title}`}
            style={{
              height: 140,
              width: 140,
              objectFit: "cover", // Ensures image doesn't stretch
              borderRadius: "50%", // Makes it a circle
              border: `4px solid ${color}`, // Adds a colored ring matching the juice
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)", // Adds depth
            }}
          />
        </Box>

        <CardContent sx={{ pt: 16, pb: 3, textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Click for details
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={2}
          >
            <Typography variant="h6" color={color} fontWeight="900">
              ${price}
            </Typography>
            {/* Stop propagation ensures clicking the cart button doesn't open the modal */}
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                console.log("Added to cart");
              }}
              sx={{
                background: color,
                color: "#fff",
                "&:hover": { background: color, filter: "brightness(0.8)" },
              }}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
