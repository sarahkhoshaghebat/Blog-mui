
import React from "react";
import Post from "./post";
import { Grid, Typography } from "@mui/material";

export default function SectionPost ({postCount,posts}) {
  const postsList = posts.slice(0, postCount);
  
    return(
        <Grid item 
          sx={{ paddingTop: "40px", marginTop: '35px' }}>
          <Typography variant="h6" sx={{ marginBottom: "7px" }}>
            From the firehose
          </Typography>
          <hr style={{ borderColor: "rgba(0, 0, 0, 0.12)" }} />
          {postsList.map((post) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
        </Grid>
    );
}