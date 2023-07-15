import React from "react";
import Grid from "@mui/material/Grid";
import Card from "../Components/ProductCard";
function ProductList() {
  return (
    <Grid container spacing={2} sx={{ pt: 3, px: 3 }}>
      <Grid item md={2} xs={6}>
        <Card />
      </Grid>
      <Grid item md={2} xs={6}>
        <Card />
      </Grid>
      <Grid item md={2} xs={6}>
        <Card />
      </Grid>
      <Grid item md={2} xs={6}>
        <Card />
      </Grid>
      <Grid item md={2} xs={6}>
        <Card />
      </Grid>
      <Grid item md={2} xs={6}>
        <Card />
      </Grid>
    </Grid>
  );
}

export default ProductList;
