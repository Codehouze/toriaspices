import React from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function ProductFilter() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid alignItems="center" sx={{ fontSize: 10, borderRadius: 10 }}>
        <Link href="/#featured_products">
          <Button
            sx={{
              color: "black",
              background: "#D3D3D3",
              borderRadius: 10,
              mx: 1,
              px: 2,
              "&:hover": {
                backgroundColor: "#FF6600",
                color: "white",
              },
            }}
          >
            Featured
          </Button>
        </Link>
      </Grid>
      <Grid alignItems="center" sx={{ fontSize: 10, borderRadius: 10 }}>
        <Link href="/#latest_products">
          <Button
            sx={{
              color: "black",
              background: "#D3D3D3",
              borderRadius: 10,
              mx: 1,
              px: 2,
              "&:hover": {
                backgroundColor: "#FF6600",
                color: "white",
              },
            }}
          >
            Latest
          </Button>
        </Link>
      </Grid>
      <Grid alignItems="center" sx={{ fontSize: 10, borderRadius: 10 }}>
        <Link href="/#best_seller_products">
          <Button
            sx={{
              color: "black",
              background: "#D3D3D3",
              borderRadius: 10,
              mx: 1,
              px: 2,
              "&:hover": {
                backgroundColor: "#FF6600",
                color: "white",
              },
            }}
          >
            Best Seller
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default ProductFilter;
