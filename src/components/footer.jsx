import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { Grid, Link, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";

export default function Footer() {
  return (
    <Grid
      Container
      component={Container}
      sx={{ textAlign: "center", paddingTop: "48px", paddingBottom: "48px" }}
    >
      <Typography variant="h6" sx={{ marginBottom: "7px" }}>
        Footer
      </Typography>
      <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
        Something here to give the footer a purpose!
      </Typography>
      <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
        Copyright ©
        <Link
          href="#"
          sx={{ color: "rgba(0, 0, 0, 0.6)", textDecorationColor: "#000000DE" }}
        >
          Your Website
        </Link>
        2024.
      </Typography>
    </Grid>
  );
}
