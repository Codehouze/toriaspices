import React from "react";
import Grid from "@mui/material/Grid";
import { BlogCard } from "../components";
import { Typography, Paper, InputAdornment, Input, Container, Chip } from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Banner from "../components/Banner";

const categories = ["Recipes", "Cooking Tips", "Spice Guide", "Health Benefits", "Culture"];
const recentPosts = [
  "Top 10 Essential Spices for Your Kitchen",
  "How to Store Spices Properly",
  "Understanding Heat Levels in Spices"
];
const tags = ["Organic", "Traditional", "Healthy", "Cooking", "Wellness", "Recipe"];

const Sidebar = () => (
  <Box sx={{ p: 3 }}>
    {/* Search Section */}
    <Paper elevation={3} sx={{ my: 3, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Search</Typography>
      <Input
        id="search-input"
        placeholder="Search articles..."
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        sx={{ mb: 1 }}
      />
    </Paper>

    {/* Categories Section */}
    <Paper elevation={3} sx={{ my: 3, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Categories</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {categories.map((category, index) => (
          <Typography 
            key={index} 
            sx={{ 
              cursor: 'pointer', 
              '&:hover': { color: 'primary.main' },
              py: 0.5
            }}
          >
            {category}
          </Typography>
        ))}
      </Box>
    </Paper>

    {/* Recent Posts Section */}
    <Paper elevation={3} sx={{ my: 3, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Recent Posts</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {recentPosts.map((post, index) => (
          <Typography 
            key={index}
            variant="body2"
            sx={{ 
              cursor: 'pointer', 
              '&:hover': { color: 'primary.main' },
              py: 0.5
            }}
          >
            {post}
          </Typography>
        ))}
      </Box>
    </Paper>

    {/* Tags Section */}
    <Paper elevation={3} sx={{ my: 3, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Tags</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {tags.map((tag, index) => (
          <Chip 
            key={index} 
            label={tag} 
            size="small"
            clickable
            sx={{ '&:hover': { backgroundColor: 'primary.light' } }}
          />
        ))}
      </Box>
    </Paper>
  </Box>
);

const blog = () => (
  <>
    <Banner title="Our Blog" subtitle="Discover the world of spices through our articles" />
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* Sidebar */}
        <Grid item lg={3} md={4} sm={12}>
          <Sidebar />
        </Grid>

        {/* Blog Posts */}
        <Grid item lg={9} md={8} sm={12}>
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <Grid item key={index} lg={4} md={6} sm={6} xs={12}>
                <BlogCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default blog;