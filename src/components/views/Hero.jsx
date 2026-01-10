import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", alignItems: "center", mt: 10 }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h6"
              color="secondary"
              sx={{ fontWeight: "bold", mb: 1, letterSpacing: 2 }}
            >
              100% ORGANIC & FRESH
            </Typography>
            <Typography variant="h1" gutterBottom>
              Squeeze the Day.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: "1.2rem", mb: 4, maxWidth: "450px" }}
            >
              Experience the explosion of natural flavors. No sugar added, just
              pure fruit essence in every bottle.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                }}
              >
                Order Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="secondary"
                startIcon={<LocalDrinkIcon />}
                sx={{ borderWidth: 2, "&:hover": { borderWidth: 2 } }}
              >
                View Flavors
              </Button>
            </Box>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
          <Box
            component={motion.div}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            sx={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "80%",
              height: "80%",
              background:
                "radial-gradient(circle, rgba(255,107,107,0.3) 0%, rgba(0,0,0,0) 70%)",
              zIndex: -1,
              filter: "blur(40px)",
              borderRadius: "50%",
            }}
          />

          <motion.img
            src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Orange Juice Bottle"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            style={{
              borderRadius: "8px",
              width: "700px",
              height: "500px",
              filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.5))",
              transform: "rotate(15deg)",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
