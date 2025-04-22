"use client";
import { motion } from "framer-motion";
import { Box, Typography, Container, Avatar } from "@mui/material";

export default function About() {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                color: "white",
                padding: "0 5%",
            }}
        >
            <Container maxWidth="md" sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                {/* Left Side: Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Avatar
                        src="data:image/jpeg;base64,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"
                        alt="Fahad Abbas"
                        sx={{ width: 150, height: 150, border: "4px solid white" }}
                    />
                </motion.div>

                {/* Right Side: Animated Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
                            I am Fahad Abbasi
                        </Typography>
                    </motion.div>

                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut urna ac dui aliquet convallis.
                        Donec at enim euismod, consectetur ex at, lacinia felis. Quisque viverra feugiat nibh at vestibulum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut urna ac dui aliquet convallis.
                        Donec at enim euismod, consectetur ex at, lacinia felis. Quisque viverra feugiat nibh at vestibulum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut urna ac dui aliquet convallis.
                        Donec at enim euismod, consectetur ex at, lacinia felis. Quisque viverra feugiat nibh at vestibulum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut urna ac dui aliquet convallis.
                        Donec at enim euismod, consectetur ex at, lacinia felis. Quisque viverra feugiat nibh at vestibulum.
                    </Typography>
                </motion.div>
            </Container>
        </Box>
    );
}
