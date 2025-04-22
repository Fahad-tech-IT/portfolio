"use client";
import { motion } from "framer-motion";
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, Button } from "@mui/material";

const projects = [
  {
    title: "Project One",
    image: "https://images.unsplash.com/photo-1617472592135-72a181d04b27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZSUyMGFwcCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project Two",
    image: "https://media.istockphoto.com/id/1173805365/photo/software-developer-freelancer-working-with-program-code.webp?a=1&b=1&s=612x612&w=0&k=20&c=M2pFKraUfUgx0jgfWWTRojjdWrdo3n_48TrKKiMa6dA=",
    description: "Suspendisse potenti. Aenean ac orci vel orci varius commodo.",
  },
  {
    title: "Project Three",
    image: "https://media.istockphoto.com/id/871030872/photo/programming-code-abstract-technology-background-of-software-developer.webp?a=1&b=1&s=612x612&w=0&k=20&c=3ojQ6f8xZ3VKIWI5-UWga4NeT9q4qneHhGIXMhW7MV4=",
    description: "Donec pharetra, risus ac congue malesuada, nunc nunc luctus dui.",
  },
  {
    title: "Project Four",
    image: "../../../public/photo-1.avif",
    description: "Donec pharetra, risus ac congue malesuada, nunc nunc luctus dui.",
  },
  {
    title: "Project Five",
    image: "https://images.unsplash.com/photo-1613575998061-0f59337425f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdlYkFQUCUyMGFwcCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
    description: "Donec pharetra, risus ac congue malesuada, nunc nunc luctus dui.",
  },
  {
    title: "Project Six",
    image: "https://media.istockphoto.com/id/2169040453/photo/ux-ui-designers-discussing-and-brainstorming-on-wireframes-for-a-website-and-mobile-app.webp?a=1&b=1&s=612x612&w=0&k=20&c=1vJc3WFuebfox47ASElrY4KOz7YpQV6e3gVqn4UjXuY=",
    description: "Donec pharetra, risus ac congue malesuada, nunc nunc luctus dui.",
  },
];

export default function Projects() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        padding: "4rem 5%",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight="bold" mb={4} textAlign="center">
          My Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  sx={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 3,
                    overflow: "hidden",
                    color: "white",
                  }}
                >
                  <CardMedia component="img" height="200" image={project.image} alt={project.title} />
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" mt={1} mb={2}>
                      {project.description}
                    </Typography>
                    <Button variant="contained" color="secondary">
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
