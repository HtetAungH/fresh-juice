/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import {
  wrap,
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <Box
      sx={{
        overflow: "hidden",
        letterSpacing: -2,
        lineHeight: 0.8,
        m: 0,
        whiteSpace: "nowrap",
        display: "flex",
        flexWrap: "nowrap",
      }}
    >
      <motion.div style={{ x, display: "flex", flexWrap: "nowrap" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "6rem",
            fontWeight: 900,
            mr: 4,
            textTransform: "uppercase",
            opacity: 0.2,
          }}
        >
          {children}{" "}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: "6rem",
            fontWeight: 900,
            mr: 4,
            textTransform: "uppercase",
            opacity: 0.2,
          }}
        >
          {children}{" "}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: "6rem",
            fontWeight: 900,
            mr: 4,
            textTransform: "uppercase",
            opacity: 0.2,
          }}
        >
          {children}{" "}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: "6rem",
            fontWeight: 900,
            mr: 4,
            textTransform: "uppercase",
            opacity: 0.2,
          }}
        >
          {children}{" "}
        </Typography>
      </motion.div>
    </Box>
  );
}

const ParallaxMarquee = () => {
  return (
    <Box sx={{ py: 10, position: "relative", zIndex: 0 }}>
      <ParallaxText baseVelocity={-2}>Organic • Fresh • Natural •</ParallaxText>
      <ParallaxText baseVelocity={2}>No Sugar • Cold Pressed •</ParallaxText>
    </Box>
  );
};

export default ParallaxMarquee;
