import React from "react";
import Grid from "@mui/material/Grid";
import {BlogCard} from "../app/components";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';


function blog() {
  return (
    <>
   <Grid
  container
  justifyContent="center"
  sx={{
    p: 5,
    backgroundImage: "url('https://res.cloudinary.com/codehouseinc/image/upload/v1690241424/toriaspices/slider1_1_d9cd5n.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  }}
>
  <Typography variant="h1" component="h2">
    About Toria Spices
  </Typography>
</Grid>
      <Grid container display="flex">
        <Grid item lg={4} md={4}>
          <Box sx={{p:3}}>
            {/* TODO: use card for each session  */}
            <Paper elevation={10} sx={{my:3}}>
            <Typography variant="h1" component="h2">Search</Typography>
            <Input
          id="input-with-icon-adornment"
          placeholder="Search"
          startAdornment={
            <InputAdornment position="end">
             <SearchIcon />
            </InputAdornment>
          }
        />
            
            </Paper>
            <Paper elevation={10} sx={{my:3}}>
            <Typography variant="h1" component="h2">Categories</Typography> 
            </Paper>
            <Paper elevation={10} sx={{my:3}}>   
             <Typography variant="h1" component="h2">Recent Post</Typography>   
             </Paper> 
             <Paper elevation={10} sx={{my:3}}> 
             <Typography variant="h1" component="h2">Tags</Typography>   
             </Paper>      
            
             </Box>
        </Grid>
        <Grid
        item lg={8} md={12}
        
          display="flex"
          py={4}
          px={5}
          // spacing={1}
          justifyContent='space-between'
        >
          {/* list blog post */}
          <Grid item lg={4} md={12} xs={12}>
            <BlogCard />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <BlogCard />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <BlogCard />
          </Grid>
        </Grid>
      </Grid>

      <Grid></Grid>
      ;
    </>
  );
}

export default blog;
