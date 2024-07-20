import React from "react";
import { useParams } from "react-router-dom";
import postCards from '../../data/popularPosts.json';
import { Container, Grid, Typography } from "@mui/material";
import Footer from "../footer";
import SideBarContent from "../sideBarContent";
import NavBar from "../navbar";
import Header from "../header"

export default function FeaturedContent() {
  const { id } = useParams();
  const post = postCards.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
    <Header/>
      <NavBar />
      <Grid container component={Container} justifyContent={'space-between'}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4">{post.title}</Typography>
          <Typography>{post.date}</Typography>
          <Typography>{post.summary}</Typography>
          <img src={post.imageUrl} alt={post.title} style={{width:'720px',height:'350px', marginTop:'20px'}}/>
        </Grid>
        <Grid item xs={12} md={4} sx={{ paddingLeft: { md: "40px", xs: 'none' }, paddingTop: "40px" }}>
          <SideBarContent />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
