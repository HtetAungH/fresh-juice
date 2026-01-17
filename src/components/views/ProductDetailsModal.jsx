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

const ProductDetailsModal = ({ open, onClose, product, onAddToCart }) => {
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
          borderRadius: "8px",
          background: "rgba(30, 30, 35, 0.8)", // Slightly darker for contrast
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
          overflow: "visible",
        },
      }}
    >
      <DialogContent sx={{ p: 0, position: "relative" }}>
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
            {/* THIS IS THE KEY CHANGE FOR ZOOM ANIMATION */}
            <motion.img
              layoutId={`image-${product.title}`}
              src={product.img}
              alt={product.title}
              style={{
                width: 250,
                height: 250,
                objectFit: "cover",
                borderRadius: "50%",
                border: `6px solid rgba(255,255,255,0.2)`,
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
                  ),
                )}
              </Box>
            </Box>

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
                onClick={onAddToCart}
                variant="contained"
                size="large"
                startIcon={<LocalDrinkIcon />}
                sx={{
                  backgroundColor: product.color,
                  boxShadow: `0 8px 20px ${product.color}66`,
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
