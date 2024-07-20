import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import {Link } from "@mui/material";
import React from "react";
import Toolbar from "@mui/material/Toolbar";

export default function navbarHeader({nameLink,urlLink}) {
  return (
      <Toolbar>
        <Link
          href={urlLink}
          mx={"7px"}
          sx={{ color: "#000000DE", textDecorationColor: "#000000DE" }}
        >
          {nameLink}
        </Link>
      </Toolbar>
  );
}
