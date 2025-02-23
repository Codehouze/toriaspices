import React from "react";
import Grid from "@mui/material/Grid";
import { BlogCard } from "../components";
import { Typography, Paper, InputAdornment, Input } from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Banner from "../components/Banner";
// import { client } from "../lib/contentful";

// export async function getStaticProps() {
//   try {
//     // Fetch content from Contentful
//     const res = await client.getEntries({
//       content_type: "blogPost", // Replace with your content type
//     });

//     return {
//       props: {
//         posts: res.items,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         posts: [],
//       },
//     };
//   }
// }

// export async function getServerSideProps() {
//   try {
//     const res = await client.getEntries({
//       content_type: "blogPost",
//     });

//     return {
//       props: {
//         posts: res.items,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         posts: [],
//       },
//     };
//   }
// }

const Sidebar = () => (
  <Box sx={{ p: 3 }}>
    {["Search", "Categories", "Recent Post", "Tags"].map((title, index) => (
      <Paper key={index} elevation={10} sx={{ my: 3, p: 2 }}>
        <Typography variant="h6">{title}</Typography>
        {title === "Search" && (
          <Input
            id="input-with-icon-adornment"
            placeholder="Search"
            fullWidth
            startAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        )}
      </Paper>
    ))}
  </Box>
);

const blog = () => (
  <>
    <Banner title="BLOG" />
    <Grid container spacing={2}>
      {/* Sidebar */}
      <Grid item lg={2} md={3} sm={12}>
        <Sidebar />
      </Grid>

      {/* Blog Posts */}
      <Grid item lg={10} md={10} sm={12}>
        <Grid container spacing={2} justifyContent="space-between" px={2}>
          {[1, 2, 3].map((_, index) => (
            <Grid item key={index} lg={4} md={5} xs={12}>
              <BlogCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </>
);

export default blog;
