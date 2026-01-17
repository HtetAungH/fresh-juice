import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Components from "./components/Components";
import LoginModal from "./components/views/LoginModal";
import { theme } from "./theme";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function will be passed to the LoginModal
  // to update the app's state upon successful login.
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoggedIn ? (
        <Components />
      ) : (
        // Render the LoginModal centered on a dark page
        <Box
          sx={{
            background: "#121212", // A dark background for the login page
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* The modal is always 'open' on this screen. We pass the login handler to it. */}
          <LoginModal open={true} onLoginSuccess={handleLoginSuccess} />
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
