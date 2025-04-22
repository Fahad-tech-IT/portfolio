"use client";
import { Card, CardContent, IconButton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          width: 200,
          padding: 2,
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: 3,
          textAlign: "center",
          color: "white",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            Connect with Me
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
            <IconButton href="https://github.com" target="_blank" sx={{ color: "white" }}>
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "white" }}>
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: "white" }}>
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SocialCard;
