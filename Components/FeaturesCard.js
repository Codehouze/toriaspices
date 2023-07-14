import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

function FeaturesCard() {
  return (
    <Grid display="flex" sx={{ background: "#D3D3D3", borderRadius: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "48px",
          height: "48px",
          borderRadius: "100%",
          background: "#FFFFFF",
          p: 5,
          my: "auto",
          mx: 1,
        }}
      >
        <CardGiftcardIcon
          variant="Outlined"
          color="secondary"
          fontSize="large"
        />
      </Box>

      <Box p={1}>
        <item>
          <h4>Free shipping </h4>
          <p>we are here to ser you better </p>
        </item>
      </Box>
    </Grid>
  );
}

export default FeaturesCard;
