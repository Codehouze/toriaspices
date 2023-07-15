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
      spacing={1}
      alignItems="center"
      // justifyContent="center"
      md={9}
      xs={10}
      sx={{
        mx: "auto",
        px: "auto",
        mt: 5,
        p: 10,
        background: "lightgrey",
        borderRadius: 3,
      }}
    >
      <Grid item display="flex" xs={6} md={6}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          backgroundColor="primary"
          xs={4}
          sx={{
            // backgroundColor: "orange",
            color: "white",
            borderRadius: "100%",
            p: 3,
          }}
        >
          <EmailIcon fontSize="large" />
        </Box>
        <Box>
          <Typography variant="h3" sx={{ px: 1 }}>
            Newsletter
          </Typography>

          <div>
            <Typography variant="body1" sx={{ px: 1 }}>
              Stay updated with our latest news and promotions.
            </Typography>
          </div>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box sx={{ pt: 2 }}>
          <InputBase
            sx={{
              ml: 5,
              flex: 10,
              background: " white",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              px: 5,
              p: 2,
            }}
            placeholder="Enter Your E-mail..."
            inputProps={{ "aria-label": "Enter Your E-mail..." }}
          />
          <Button
            sx={{
              color: "white",
              backgroundColor: "orange",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              p: 2,
              pt: 1,
              fontSize: 18,
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
