import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { Grid, Typography } from "@mui/material";
import React from "react";
import DOMPurify from 'dompurify';

export default function Post({ post }) {
  const sanitizedTitle = DOMPurify.sanitize(post.title);
  const sanitizedDate = DOMPurify.sanitize(post.date);
  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <>
      <Grid item color={'#000000DE'}>
        <Typography variant="h4" sx={{ marginTop: "24px",marginBottom: "16px"}} dangerouslySetInnerHTML={{ __html: sanitizedTitle }} />
        <Typography sx={{ marginBottom: "16px" }} dangerouslySetInnerHTML={{ __html: sanitizedDate }} />
        <Typography sx={{ marginBottom: "16px" }} dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      </Grid>
    </>
  );
}