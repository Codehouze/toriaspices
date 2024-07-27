import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import Link from "next/link";



const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 25,
    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
    border: "2px solid rgba(0, 0, 0, 0.2)",
     backgroundClip: "padding-box",
     height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    borderRadius: 25, 
  },
  content: {
    position: "relative",
    zIndex: 1,
    fontWeight: "bold",
    textAlign: "center",
    padding: theme.spacing(2), // Responsive padding
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1), // Smaller padding on small screens
    },
  },
  button: {
    color: "white",
    backgroundColor: "#FF6600",
    borderRadius: 10,
    marginTop: 10,
    "&:hover": {
      backgroundColor: "#90C53B",
      color: "white",
    },
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#90C53B", // Default large size
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem", // Smaller size on small screens
    },
  },
  description: {
    fontSize: "1.2rem", 
    color: "#FF6600",// Default large size
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem", // Smaller size on small screens
    },
  },

})); 
function ShopNowBanner({ backgroundImage, title, description }) {
  const classes = useStyles();

  return (
    <Grid
      item
      alignItems="center"
      position="relative"
      height={400}
      className={classes.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
     <Box className={classes.overlay} />
     <Box className={classes.content}>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <p className={classes.description}>{description}</p>
       <Link href="/products" passHref>
        <Button
          className={classes.button} component="a">
          Shop Now
        </Button>
        </Link>
      </Box>
    </Grid>
  );
}

export default ShopNowBanner;
