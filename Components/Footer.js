import {
  Person,
  Facebook,
  Twitter,
  Email,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

import { orange } from "@mui/material/colors";

// i need to use theme here to manage the website color and look
const useStyle = makeStyles((theme) => ({
  root: {
    color: orange[500],
    borderColor: orange[500],
    py: 2,
    pb: 2,
  },
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <>
      <Grid
        container
        sx={{ marginTop: 3, backgroundColor: "Black", color: "white" }}
      >
        <Grid item xs={12} sm={4} lg={4} sx={{ p: 2 }}>
          <Typography variant="h4" className={classes.root}>
            Links
          </Typography>
          <Grid container direction="column">
            <Grid item>
              <Link href="/">
                <Button sx={{ color: "white" }}>Home</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/about">
                <Button sx={{ color: "white" }}>About</Button>
              </Link>
            </Grid>

            <Grid item>
              <Link href="/blog">
                <Button sx={{ color: "white" }}>Blog</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/products">
                <Button sx={{ color: "white" }}>Products</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/contact" sx={{ color: "white" }}>
                <Button sx={{ color: "white" }}>Contact</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} sx={{ py: 2, textAlign: "left" }}>
          <Typography variant="h4" className={classes.root}>
            Contact Info
          </Typography>

          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Email color="white" fontSize="large" />
            </Grid>
            <Grid item>
              <Link sx={{ color: "white" }} href="mailto:info@toriaspices.com">
                info@toriaspices.com
              </Link>
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Person fontSize="large" />
            </Grid>
            <Grid item>+2349158835595</Grid>
          </Grid>

          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <LocationOnIcon fontSize="large" />
            </Grid>
            <Grid item>No 6 Lucky Nwagwu Street Kapwa, Lugbe Abuja</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} sx={{ py: 2 }}>
          <Typography variant="h4" className={classes.root}>
            Find Us
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <a href="https://web.facebook.com/toriaspices">
                <Facebook
                  color="orange"
                  fontSize="large"
                  sx={{ borderRadius: 20, m: 5, p: 5 }}
                />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.youtube.com/channel/UCg4RXb5wsxPrMSDOEmQuwUA">
                <YouTube
                  color="orange"
                  fontSize="large"
                  sx={{ borderRadius: 20, m: 5, p: 5 }}
                />
              </a>
            </Grid>
            <Grid item>
              <a href="#">
                <Twitter color="orange" fontSize="large" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/toriaspices/">
                <Instagram
                  color="orange"
                  fontSize="large"
                  sx={{ borderRadius: 20, m: 5, p: 5 }}
                />
              </a>
            </Grid>
            <Grid item>
              <a href="#">
                <LinkedIn
                  color="orange"
                  fontSize="large"
                  sx={{ borderRadius: 20, m: 5, p: 5 }}
                />
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} lg={12} sx={{ p: 2, textAlign: "center" }}>
          <footer>
            Powered by <a href="#"> Codehouze </a>
          </footer>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
