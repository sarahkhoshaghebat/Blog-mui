import React from "react";
import { CardMedia, Grid, Paper, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

export default function FeaturedPost({ post }) {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/popularPosts/${post.id}`);  
  };

  return (
    <Grid
      item
      xs={12}
      md={6}
      component="div"
      onClick={handleNavigate}
      sx={{ textDecoration: 'none', cursor: 'pointer' }}
    >
      <Paper sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <CardContent sx={{ flex: "1" }}>
          <Typography variant="h5">{post.title}</Typography>
          <Typography sx={{ color: "#00000099" }}>{post.date}</Typography>
          <Typography sx={{ marginBottom: "16px" }}>{post.summary}</Typography>
          <Typography sx={{ color: "#1976d2" }}>
            Continue reading...
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={post.imageUrl}
          alt="card-image"
          sx={{
            width: "160px",
            height: "auto",
            display: { xs: "none", sm: "block" },
          }}
        />
      </Paper>
    </Grid>
  );
}
