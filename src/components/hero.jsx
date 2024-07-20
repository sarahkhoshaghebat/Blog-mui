import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: '32px' }}>
      <Paper sx={{
        width: "100%",
        height: { xs: "500px", sm: "364px" },
        position: "relative",
        mb: 4,
        backgroundSize: 'cover',
        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
        backgroundPosition: 'center',
      }}>
        <Box
          position="relative"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  padding: "48px",
                  paddingRight: "0px",
                  color: "#ffffff",
                }}
              >
                <Typography variant="h3" marginBottom={"16px"}>
                  Title of a longer featured blog post
                </Typography>
                <Typography variant="h5" marginBottom={"16px"}>
                  Multiple lines of text that form the lede, informing new
                  readers quickly and efficiently about what's most
                  interesting in this post's contents.
                </Typography>
                <Link to="/HeroPost" sx={{ textDecoration: "underline" }}>
                  Continue reading…
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}