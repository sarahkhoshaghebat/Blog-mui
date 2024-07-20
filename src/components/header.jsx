import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { Button, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <React.Fragment>
      <Grid component={Container}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            fontFamily: "Roboto",
            borderBottom: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <Grid item xs={4} md={2}>
            <Button variant="text" size="small">
              Subscribe
            </Button>
          </Grid>
          <Grid
            item
            xs={4}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#000000DE",
            }}
          >
            <Typography variant="h5">Blog</Typography>
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button padding={0}>
              <svg
                style={{ width: "24px", height: "24px", padding: "0px" }}
                focusable="false"
                aria-hidden="true"
                data-testid="SearchIcon"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
              </svg>
            </Button>
            <Button variant="outlined" size="small">
              Sign up
            </Button>
          </Grid>
        </Toolbar>
      </Grid>
    </React.Fragment>
  );
}
