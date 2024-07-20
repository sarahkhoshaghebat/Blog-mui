
import { Link, Grid, Paper, Typography } from "@mui/material";
import SideBar from "./sideBar"
import React from "react";
import navbarLink from "../data/navbarLink.json"

export default function SideBarContent () {
  const { listSide, urlLink } = navbarLink[1];
    
    return(
        <Grid item 
            sx={{ paddingLeft:{ xs:'none'}, paddingTop: "40px" }}>
          <Paper sx={{ backgroundColor: "#eeeeee", padding: "16px" }}>
              <Typography variant="h6">About</Typography>
              <Typography>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis
                consectetur purus sit amet fermentum. Aenean lacinia bibendum
                nulla sed consectetur.
              </Typography>
            </Paper>
            <Typography
            variant="h6"
            sx={{ marginTop: "24px", marginBottom: "7px" }}
          >
            Archives
          </Typography>
          {listSide.map((nameList, index) => (
                <SideBar key={index} date={nameList} urlLink={urlLink} />
            ))}

          <Typography
            variant="h6"
            sx={{ marginTop: "24px", marginBottom: "7px" }}
          >
            Social
          </Typography>
          <Typography>
            <Link href="#">
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                  fill: "currentColor",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                data-testid="GitHubIcon"
              >
                <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27">
                </path>
              </svg>
              <span>GitHub</span>
            </Link>
          </Typography>
          <Typography>
            <Link href="#">
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                  fill: "currentColor",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="XIcon"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              <span>X</span>
            </Link>
          </Typography>
          <Typography>
            <Link href="#">
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                  fill: "currentColor",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FacebookIcon"
              >
                <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
              </svg>
              <span>Facebook</span>
            </Link>
          </Typography>
        </Grid>
    );
}