import React from "react";
import Grid from "@mui/material/Grid";
import Card from "./ProductCard";
function ProductList() {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {[...Array(6)].map((_, index) => (
        <Grid item key={index} md={4} xs={12}>
          <Card />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
