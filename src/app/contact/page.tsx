"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, TextField, Typography, Rating, Stack, Paper } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        padding: "4rem 5%",
      }}
    >
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Contact Me
      </Typography>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Paper elevation={6} sx={{ padding: 3, background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", width:"600px"}}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
            <Button type="submit" variant="contained" color="secondary">
              Send Message
            </Button>
          </form>
        </Paper>
      </motion.div>

      {/* Reviews Section */}
      <Typography variant="h4" fontWeight="bold" mt={5} mb={2}>
        Reviews
      </Typography>

      <Stack spacing={3} width="100%" maxWidth="600px">
        {["Saad Raza", "Fahad-Read ", "Waji-US"].map((name, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Paper elevation={4} sx={{ padding: 2, background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)" }}>
              <Typography variant="h6" fontWeight="bold">
                {name}
              </Typography>
              <Rating value={Math.floor(Math.random() * 2) + 4} readOnly size="large" />
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien ut erat volutpat feugiat.
              </Typography>
            </Paper>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
};

export default Contact;
