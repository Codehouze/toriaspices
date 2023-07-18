import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

function Jumbotron() {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height={600}
      sx={{
        p: 5,
        color: "white",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1564149504298-00c351fd7f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <p>Get the best outfit of your life</p> */}
      {/* <Grid container> */}
      <Box
        md={5}
        lg={5}
        xs={12}
        sx={{
          backgroundColor: "white",
          opacity: 0.8,
          p: 5,
          borderRadius: 5,
        }}
      >
        <Typography variant="h3" color="secondary" fontWeight="bold" m={5}>
          Finding the Difference With <br /> ToriaSpices
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderStartEndRadius: 20, mx: 5 }}
        >
          Get Started
        </Button>
      </Box>

      {/* </Grid> */}
    </Box>
  );
}

export default Jumbotron;
