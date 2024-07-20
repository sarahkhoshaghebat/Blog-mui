import React from "react";
import { Grid, Container } from "@mui/material";
import FeaturedPost from "./featuredPost";

export default function Featured({ postCount, posts }) {
  const postsList = posts.slice(0, postCount);
  return (
    <Grid container component={Container} spacing={1} sx={{ margin: "auto" }}>
      {postsList.map((post) => (
        <FeaturedPost
          key={post.id}
          post={post}
        />
      ))}
    </Grid>
  );
}
