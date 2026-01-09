/* eslint-disable no-unused-vars */
import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  IconButton,
  Grid,
  Button,
  Chip,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} timeout={500} />;
});

const ProductDetailsModal = ({ open, onClose, product }) => {
  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 5,
          background: "rgba(30, 30, 35, 0.6)", // Semi-transparent dark
          backdropFilter: "blur(20px)", // Heavy blur
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
          overflow: "visible", // Allows image to pop out if needed
        },
      }}
    >
      <DialogContent sx={{ p: 0, position: "relative" }}>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 15,
            top: 15,
            color: "white",
            zIndex: 10,
            background: "rgba(255,255,255,0.1)",
          }}
        >
          <CloseIcon />
        </IconButton>

        <Grid container>
          {/* Left Side: Image Showcase */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              background: `linear-gradient(135deg, ${product.color}22 0%, rgba(0,0,0,0) 100%)`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 4,
              minHeight: 400,
            }}
          >
            <motion.img
              initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              src={product.img}
              alt={product.title}
              style={{
                width: 250, // Fixed width
                height: 250, // Fixed height
                objectFit: "cover",
                borderRadius: "50%", // Circle
                border: `6px solid rgba(255,255,255,0.2)`, // Nice glass border
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            />
          </Grid>

          {/* Right Side: Details */}
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              p: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Header */}
            <Box mb={2}>
              <Typography
                variant="overline"
                color={product.color}
                fontWeight="bold"
                letterSpacing={2}
              >
                PREMIUM SELECTION
              </Typography>
              <Typography variant="h3" fontWeight="800" sx={{ mb: 1 }}>
                {product.title}
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <StarIcon sx={{ color: "#FFD700" }} fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  4.9 (1.2k Reviews)
                </Typography>
              </Box>
            </Box>

            {/* Description */}
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.8 }}
            >
              Experience the raw energy of nature. Our {product.title} is
              cold-pressed to retain essential vitamins and enzymes. No
              preservatives, no added sugar, just pure refreshment.
            </Typography>

            {/* Ingredients Tags */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, fontWeight: "bold" }}
              >
                INGREDIENTS
              </Typography>
              <Box display="flex" gap={1} flexWrap="wrap">
                {["Organic Fruit", "Cold Pressed", "No Sugar", "Vegan"].map(
                  (tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        background: "rgba(255,255,255,0.05)",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    />
                  )
                )}
              </Box>
            </Box>

            {/* Footer: Price & Action */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mt="auto"
            >
              <Typography variant="h4" fontWeight="bold">
                ${product.price}
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<LocalDrinkIcon />}
                sx={{
                  backgroundColor: product.color,
                  boxShadow: `0 8px 20px ${product.color}66`, // Colored glow
                  padding: "12px 32px",
                  "&:hover": {
                    backgroundColor: product.color,
                    filter: "brightness(1.1)",
                  },
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsModal;
