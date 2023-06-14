import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CardGiftcardSharpIcon from "@mui/icons-material/CardGiftcardSharp";

function FeaturesCard() {
  return (
    <Grid
      item
      xs={4}
      lg={2}
      md={2}
      sm={6}
      sx={{ background: "#D3D3D3", borderRadius: 3, mx: 2, p: 5, mb: 2 }}
    >
      <Box
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Box item>
          <CardGiftcardSharpIcon
            sx={{
              background: "#FFFFFF",
              borderRadius: "100%",
              p: 3,
              fontSize: 70,
            }}
          />
        </Box>
        <item>
          <h1>Free shipping </h1>
        </item>
      </Box>
    </Grid>
  );
}

export default FeaturesCard;
