import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF6B6B", // Vibrant Coral/Red
    },
    secondary: {
      main: "#4ECDC4", // Fresh Teal/Mint
    },
    background: {
      default: "#1A1A1D",
      paper: "rgba(255, 255, 255, 0.05)", // Glass base
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: "4rem",
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50, // Pill shape
          textTransform: "none",
          fontWeight: 700,
          padding: "12px 30px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(26, 26, 29, 0.6)", // Glass header
          backdropFilter: "blur(12px)",
          boxShadow: "none",
        },
      },
    },
  },
});
