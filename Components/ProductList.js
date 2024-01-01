import React from "react";
import Grid from "@mui/material/Grid";
import Card from "../Components/ProductCard";
function ProductList() {
  return (
    <Grid container sx={{ pt: 3, }}>
      <Grid item md={4} xs={12}>
        <Card />
      </Grid>
      <Grid item md={4} xs={12}>
        <Card />
      </Grid>
      <Grid item md={4} xs={12}>
        <Card />
      </Grid>
      <Grid item md={4} xs={12}>
        <Card />
      </Grid>
      <Grid item md={4} xs={12}>
        <Card />
      </Grid>
      <Grid item md={4} xs={12}>
        <Card />
      </Grid>
    </Grid>
  );
}

export default ProductList;
