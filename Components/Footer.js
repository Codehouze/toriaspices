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

const Footer = () => {
  return (
    <>
      <Grid container backgroundColor="Black" color="white" px={5}>
        <Grid item xs={12} sm={4} lg={4} p={2}>
          <Typography variant="h4" py={2} borderColor="primary" color="primary">
            Links
          </Typography>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item>
              <Link href="/">
                <Button color="secondary">Home</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/about">
                <Button color="secondary">About</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/blog">
                <Button color="secondary">Blog</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/products">
                <Button color="secondary">Products</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/contact">
                <Button color="secondary">Contact</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} sx={{ py: 2, textAlign: "left" }}>
          <Typography variant="h4" py={2} borderColor="primary" color="primary">
            Contact Info
          </Typography>

          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Email color="secondary" fontSize="large" />
            </Grid>
            <Grid item>
              <Link color="secondary" href="mailto:info@toriaspices.com">
                <p>info@toriaspices.com</p>
              </Link>
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Person color="secondary" fontSize="large" />
            </Grid>
            <Grid item>+2349158835595</Grid>
          </Grid>

          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <LocationOnIcon color="secondary" fontSize="large" />
            </Grid>
            <Grid item>No 6 Lucky Nwagwu Street Kapwa, Lugbe Abuja</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} sx={{ py: 2 }}>
          <Typography variant="h4" py={2} borderColor="primary" color="primary">
            Find Us
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <a href="https://web.facebook.com/toriaspices">
                <Facebook color="secondary" fontSize="large" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.youtube.com/channel/UCg4RXb5wsxPrMSDOEmQuwUA">
                <YouTube color="secondary" fontSize="large" />
              </a>
            </Grid>
            <Grid item>
              <a href="#">
                <Twitter color="secondary" fontSize="large" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/toriaspices/">
                <Instagram color="secondary" fontSize="large" />
              </a>
            </Grid>
            <Grid item>
              <a href="#">
                <LinkedIn color="secondary" fontSize="large" />
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} lg={12} sx={{ p: 2, textAlign: "center" }}>
          <footer>
            Powered by
            <a color="primary" href="#">
              Codehouze
            </a>
          </footer>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
