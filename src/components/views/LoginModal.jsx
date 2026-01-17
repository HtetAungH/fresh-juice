import React, { useState } from "react";
import {
  Typography,
  Box,
  IconButton,
  Button,
  TextField,
  InputAdornment,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google"; // Or use custom SVG below if preferred
import { motion, AnimatePresence } from "framer-motion";

// Custom Google SVG if you want the authentic colors
const GoogleLogo = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const LoginModal = ({ open, onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [showPassword, setShowPassword] = useState(false);

  const toggleMode = () => setIsLogin(!isLogin);

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
      "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.5)" },
      "&.Mui-focused fieldset": { borderColor: "#FE6B8B" },
    },
    "& .MuiInputLabel-root": { color: "rgba(255, 255, 255, 0.7)" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#FE6B8B" },
    mb: 2,
  };

  return (
    <AnimatePresence>
      {open && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Keep backdrop click for cancellable modals
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1300, // High z-index to be on top
          }}
        >
          <Box
            component={motion.div}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            sx={{
              p: 4,
              textAlign: "center",
              position: "relative",
              width: "100%",
              maxWidth: "444px", // MUI 'xs' breakpoint
              borderRadius: 4,
              background: "rgba(26, 26, 29, 0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              overflow: "hidden",
            }}
          >
            {/* Close Button */}
            {onClose && (
              <IconButton
                onClick={onClose}
                sx={{
                  position: "absolute",
                  right: 15,
                  top: 15,
                  color: "rgba(255,255,255,0.5)",
                  "&:hover": { color: "white" },
                }}
              >
                <CloseIcon />
              </IconButton>
            )}

            {/* Dynamic Title */}
            <Typography variant="h4" fontWeight="900" sx={{ mb: 1 }}>
              {isLogin ? "Welcome Back" : "Join Fresh."}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              {isLogin
                ? "Enter your details to access your account."
                : "Create an account to start your organic journey."}
            </Typography>

            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? "login" : "signup"}
                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                transition={{ duration: 0.2 }}
              >
                <form>
                  {!isLogin && (
                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      sx={inputStyles}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutlineIcon
                              sx={{ color: "rgba(255,255,255,0.5)" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}

                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    sx={inputStyles}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlinedIcon
                            sx={{ color: "rgba(255,255,255,0.5)" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    sx={inputStyles}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon
                            sx={{ color: "rgba(255,255,255,0.5)" }}
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{ color: "rgba(255,255,255,0.5)" }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {isLogin && (
                    <Box display="flex" justifyContent="flex-end" mb={2}>
                      <Typography
                        variant="caption"
                        sx={{
                          cursor: "pointer",
                          color: "text.secondary",
                          "&:hover": { color: "#FE6B8B" },
                        }}
                      >
                        Forgot Password?
                      </Typography>
                    </Box>
                  )}

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    // Call the onLoginSuccess handler when the button is clicked
                    onClick={(e) => {
                      e.preventDefault(); // prevent form submission
                      // For a real app, you'd validate credentials first
                      if (onLoginSuccess) onLoginSuccess();
                    }}
                    sx={{
                      background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                      borderRadius: 2,
                      py: 1.5,
                      fontSize: "1rem",
                      textTransform: "none",
                      boxShadow: "0 4px 14px 0 rgba(254, 107, 139, 0.39)",
                      mb: 3,
                    }}
                  >
                    {isLogin ? "Sign In" : "Create Account"}
                  </Button>
                </form>
              </motion.div>
            </AnimatePresence>

            <Divider sx={{ mb: 3, borderColor: "rgba(255,255,255,0.1)" }}>
              <Typography variant="caption" color="text.secondary">
                OR CONTINUE WITH
              </Typography>
            </Divider>

            {/* Google Login Button */}
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleLogo />}
              sx={{
                borderColor: "rgba(255,255,255,0.2)",
                color: "white",
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                background: "rgba(255,255,255,0.02)",
                "&:hover": {
                  borderColor: "white",
                  background: "rgba(255,255,255,0.05)",
                },
              }}
            >
              Google
            </Button>

            <Box mt={4}>
              <Typography variant="body2" color="text.secondary">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <span
                  onClick={toggleMode}
                  style={{
                    color: "#FE6B8B",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {isLogin ? "Sign Up" : "Log In"}
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
