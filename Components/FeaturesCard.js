import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function FeaturesCard({ title, description, icon }) {
  return (
    <Grid
      item
      display="flex"
      sx={{ background: "#ff7043", borderRadius: 3, py: 2, pr: 15 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "100%",
          background: "#FFFFFF",
          p: 1,
          my: "auto",
          mx: 1,
        }}
      >
        {icon}
      </Box>

      <Box pr={8}>
        <Typography variant="h3" pt={2} fontSize={14} noWrap={true}>
          {title}
        </Typography>
        <Typography variant="p" pt={2} pr={4} fontSize={10} noWrap={true}>
          {description}
        </Typography>
      </Box>
    </Grid>
  );
}

export default FeaturesCard;
