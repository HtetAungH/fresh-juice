/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Grid, Typography, Box, Paper } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import SpaIcon from "@mui/icons-material/Spa";
import RecyclingIcon from "@mui/icons-material/Recycling";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BoltIcon fontSize="large" />,
    title: "Energy Boost",
    desc: "Natural caffeine-free energy derived from pure fruit fructose.",
    color: "#FFD700",
  },
  {
    icon: <SpaIcon fontSize="large" />,
    title: "100% Organic",
    desc: "Sourced directly from local farmers using sustainable practices.",
    color: "#4ECDC4",
  },
  {
    icon: <RecyclingIcon fontSize="large" />,
    title: "Eco Packaging",
    desc: "Our bottles are made from 100% recycled ocean plastic.",
    color: "#FE6B8B",
  },
];

const FeatureCard = ({ icon, title, desc, color, index }) => {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            height: "100%",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 4,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-10px)",
              background: "rgba(255,255,255,0.06)",
              border: `1px solid ${color}`,
            },
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: `${color}22`,
              color: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            {icon}
          </Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            {desc}
          </Typography>
        </Paper>
      </motion.div>
    </Grid>
  );
};

const FeaturesSection = () => {
  return (
    <Container sx={{ py: 15 }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 8, fontWeight: 800, letterSpacing: -1 }}
        >
          Why Choose <span style={{ color: "#FE6B8B" }}>Fresh?</span>
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} index={i} />
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturesSection;
