import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  const { scrollY } = useScroll();

  // Parallax Transforms
  const yText = useTransform(scrollY, [0, 500], [0, 200]); // Text moves down slowly
  const yImage = useTransform(scrollY, [0, 500], [0, -100]); // Image moves up
  const scaleImage = useTransform(scrollY, [0, 500], [1, 1.1]); // Image grows slightly
  const yBlob = useTransform(scrollY, [0, 500], [0, 150]); // Blob follows text roughly
  const opacityRange = useTransform(scrollY, [0, 300], [1, 0]); // Fade out

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        pt: 10,
        position: "relative",
        overflow: "visible", // Allow parallax elements to bleed out
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          {/* Apply Parallax to Text Block */}
          <motion.div style={{ y: yText, opacity: opacityRange }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                color="secondary"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  letterSpacing: 4,
                  fontSize: "1rem",
                }}
              >
                100% ORGANIC & FRESH
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  mb: 2,
                  background:
                    "-webkit-linear-gradient(45deg, #FFF 30%, #CCC 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "3.5rem", md: "5rem" },
                }}
              >
                Squeeze <br />
                the Day.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: "1.2rem",
                  mb: 4,
                  maxWidth: "450px",
                  lineHeight: 1.8,
                }}
              >
                Experience the explosion of natural flavors. No sugar added,
                just pure fruit essence in every bottle.
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderRadius: 50,
                    px: 4,
                    py: 1.5,
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    boxShadow: "0 10px 20px rgba(254, 107, 139, .3)",
                  }}
                  onClick={() => {
                    document
                      .getElementById("products-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Order Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  color="secondary"
                  startIcon={<LocalDrinkIcon />}
                  sx={{
                    borderRadius: 50,
                    px: 4,
                    borderWidth: 2,
                    "&:hover": { borderWidth: 2 },
                  }}
                >
                  View Flavors
                </Button>
              </Box>
            </motion.div>
          </motion.div>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ position: "relative", perspective: "1000px" }}
        >
          {/* Parallax Blob */}
          <Box
            component={motion.div}
            style={{ y: yBlob }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
              borderRadius: ["50%", "40%", "60%", "50%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            sx={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "80%",
              height: "80%",
              background:
                "radial-gradient(circle, rgba(255,107,107,0.4) 0%, rgba(0,0,0,0) 70%)",
              zIndex: -1,
              filter: "blur(60px)",
            }}
          />

          {/* Parallax Image */}
          <motion.div style={{ y: yImage, scale: scaleImage }}>
            <motion.img
              src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Orange Juice Bottle"
              initial={{ y: -50, opacity: 0, rotateY: -30 }}
              animate={{ y: 0, opacity: 1, rotateY: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              style={{
                borderRadius: "20px",
                width: "100%",
                maxWidth: "650px",
                height: "auto",
                boxShadow: "0px 30px 60px rgba(0,0,0,0.5)",
                transform: "rotate(15deg)",
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
