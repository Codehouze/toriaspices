import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
const useStyles = makeStyles({
  banner: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    // m: 5,
    // mt: 5,
    borderRadius: 15,
  },
});
function ShopNowBanner({ backgroundImage, title, description }) {
  const classes = useStyles();

  return (
    <Grid
      item
      //   md={5}
      //   xs={10}
      alignItems="center"
      position="relative"
      height={400}
      className={classes.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Box position="absolute" top={200} left={40}>
        <Typography variant="h3" fontFamily="Playfair">
          {title}
        </Typography>
        <p>{description}</p>
        <Button
          sx={{
            color: "white",
            background: "#FF6600",
            borderRadius: 10,
            mx: 1,
            px: 2,
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Grid>
  );
}

export default ShopNowBanner;
