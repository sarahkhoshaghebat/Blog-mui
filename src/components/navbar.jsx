import LinkName from "./navbar header";
import Toolbar from "@mui/material/Toolbar";
import {Grid } from "@mui/material";
import navbarLink from "../data/navbarLink.json";
import React from "react";

export default function NavBar() {
  const { names, urlLink } = navbarLink[0];

    return(
      <>
      <Grid container justifyContent={'center'}>
        <Toolbar component="a" href={urlLink} sx={{ overflow: { xs: "auto", md: 'none' }, justifyContent: "space-between" }}>
          {names.map((name, index) => (
            <LinkName key={index} nameLink={name} urlLink={urlLink}/>
          ))}
        </Toolbar>
      </Grid>
      </>
    );
}