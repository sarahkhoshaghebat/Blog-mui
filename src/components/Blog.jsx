import React from "react";
import { Container, Grid } from "@mui/material";
import NavBar from './navbar';
import Footer from "./footer";
import Hero from "./hero";
import SideBarContent from "./sideBarContent";
import SectionPost from "./sectionPost";
import Featured from "./featured";
import popularPosts from '../data/popularPosts.json'
import mainPosts from '../data/mainPosts.json'
import Header from './header'

export default function Blog() {
  return (
    <React.Fragment>
      <Header/>
      <NavBar />
      <Hero/>
      <Featured postCount={2} posts={popularPosts}/>
      <Grid container component={Container} justifyContent={'space-between'}>
        <Grid item xs={12} md={8}>
          <SectionPost postCount={3} posts={mainPosts}/>
        </Grid>
        <Grid item xs={12} md={4} sx={{ paddingLeft: { md: "40px", xs: 'none' }, paddingTop: "40px" }}>
          <SideBarContent />
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
}
