import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import InputBase from "@mui/material/InputBase";

function NewsLetter() {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      md={9}
      xs={12}
      sx={{
        mx: "auto",
        px: "auto",
        p: 5,
        background: "lightgrey",
        borderRadius: 3,
      }}
    >
      <Grid item display="flex" xs={12} md={6}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          backgroundColor="primary"
          // xs={4}
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: "100%",
            p: 2,
          }}
        >
          <EmailIcon fontSize="large" />
        </Box>
        <Box>
          <Typography variant="h4" px={1}>
            Newsletter
          </Typography>

          <Typography variant="body1" px={1}>
            Stay updated with our latest news and promotions.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={10} md={6}>
        <Box sx={{ pt: 1 }}>
          <InputBase
            size="medium"
            sx={{
              background: "white",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              px: 10,
              py: 1.4,
            }}
            placeholder="Enter Your E-mail..."
            inputProps={{ "aria-label": "Enter Your E-mail..." }}
          />
          <Button
            xs={3}
            sx={{
              color: "white",
              background: "#FF6600",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              p: 2,
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default NewsLetter;
