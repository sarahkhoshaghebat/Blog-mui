import React from "react";
import Footer from "../footer";
import NavBar from "../navbar";
import Header from "../header";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";


export default function HeroPost() {


  return (
    <>
      <Header />
      <NavBar />
      <Grid component={Container}>
      <img src="https://source.unsplash.com/random?wallpapers" alt="heroimg" style={{height:'350px',width:'1150px',marginTop:'20px'}}/>
      <Typography variant="h4" marginTop={'10px'}>
      Title of a longer featured blog post
      </Typography>
      <Typography variant="h6" marginTop={'20px'}>
        Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
      </Typography>
      </Grid>

      <Footer />
    </>
  );
}
