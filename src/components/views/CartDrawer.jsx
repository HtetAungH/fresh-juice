import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion, AnimatePresence } from "framer-motion";

const CartDrawer = ({
  open,
  onClose,
  cartItems,
  onRemove,
  onUpdateQuantity,
}) => {
  // Calculate Total
  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 400 },
          background: "rgba(26, 26, 29, 0.9)", // Darker glass
          backdropFilter: "blur(20px)",
          borderLeft: "1px solid rgba(255,255,255,0.1)",
        },
      }}
    >
      <Box
        sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}
      >
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <ShoppingBagIcon color="primary" />
            <Typography variant="h5" fontWeight="bold">
              Your Cart ({cartItems.length})
            </Typography>
          </Box>
          <IconButton onClick={onClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 2 }} />

        {/* Cart Items List */}
        <List sx={{ flexGrow: 1, overflowY: "auto" }}>
          <AnimatePresence>
            {cartItems.length === 0 ? (
              <Typography color="text.secondary" textAlign="center" mt={4}>
                Your cart is feeling empty...
              </Typography>
            ) : (
              cartItems.map((item) => (
                <ListItem
                  key={item.id}
                  component={motion.li}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  layout
                  alignItems="flex-start"
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={() => onRemove(item.id)}
                      color="error"
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  }
                  sx={{
                    mb: 2,
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      src={item.img}
                      sx={{
                        width: 60,
                        height: 60,
                        border: `2px solid ${item.color}`,
                        mr: 1,
                      }}
                    />
                  </ListItemAvatar>

                  <Box flexGrow={1}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price}
                    </Typography>

                    {/* Quantity Controls */}
                    <Box
                      display="flex"
                      alignItems="center"
                      mt={1}
                      gap={1}
                      sx={{
                        background: "rgba(255,255,255,0.05)",
                        width: "fit-content",
                        borderRadius: 5,
                        px: 1,
                      }}
                    >
                      <IconButton
                        size="small"
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        sx={{ color: "white", p: 0.5 }}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>

                      <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{ mx: 1 }}
                      >
                        {item.quantity}
                      </Typography>

                      <IconButton
                        size="small"
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        sx={{ color: "white", p: 0.5 }}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </ListItem>
              ))
            )}
          </AnimatePresence>
        </List>

        {/* Footer / Checkout */}
        <Box mt={2}>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="h6">Total:</Typography>
            <Typography variant="h6" color="primary" fontWeight="bold">
              ${total.toFixed(2)}
            </Typography>
          </Box>
          <Button
            variant="contained"
            fullWidth
            size="large"
            disabled={cartItems.length === 0}
            sx={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              fontSize: "1.1rem",
            }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
