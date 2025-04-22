"use client";
import { motion } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import SocialCard from "@/components/SocialCard";

export default function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        padding: "0 5%",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
      }}
    >
      {/* Left Side: Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
          Hello, I am Fahad
        </Typography>
        <Typography variant="h5" color="inherit">
          Front-end Web Developer
        </Typography>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ marginTop: "20px" }}
        >
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            href="/projects"
            sx={{ fontSize: "1.1rem", padding: "10px 20px", borderRadius: "8px" }}
          >
            View My Work
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Side: Social Card */}
      <SocialCard />
    </Box>
  );
}
