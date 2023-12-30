import React from "react";
import Grid from "@mui/material/Grid";
import BlogCard from "../../Components/BlogCard";
import { Typography } from "@mui/material";

function blog() {
  return <>
  <Grid container justifyContent="center" sx={{p:5, background:"black", color:"white"}}>
    <Typography variant="h1" component="h2">Blog</Typography>

  </Grid>
  <Grid container display="flex" justifyItems='space-between'>
    <Grid item lg={4} md={4} >
      side bar goes here
    </Grid>
    <Grid
  display="flex"
  py={4}
  px={5}
  // spacing={1}
  // justifyContent='space-between'
>
  {/* latest blog */}
  <Grid item lg={4} md={4} xs={12}>
    <BlogCard />
  </Grid>
  <Grid item lg={4} md={4} xs={12}>
    <BlogCard />
  </Grid>
  <Grid item lg={4} md={4} xs={12}>
    <BlogCard />
  </Grid>
</Grid>
</Grid>;
</>
}

export default blog;
