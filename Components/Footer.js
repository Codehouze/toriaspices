import React from "react";
import Person from "@mui/icons-material/Person";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Email from "@material-ui/icons/Email";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from "@material-ui/icons/YouTube";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Footer = () => {
  return (
    <>
      <Grid
        container
        sx={{ marginTop: 5, backgroundColor: "Black", color: "white" }}
      >
        <Grid item xs={12} sm={4} lg={4} sx={{ p: 5 }}>
          <Typography
            variant="h4"
            component="h6"
            color="orange"
            borderColor="orange"
            fontSize="10"
            borderRadius={5}
            pb={1}
          >
            Links
          </Typography>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <a href="localhost:3000/about" style={{ color: "white" }}>
                About Us
              </a>
            </Grid>
            <Grid item>
              <a href="localhost:3000/about" style={{ color: "white" }}>
                Products
              </a>
            </Grid>
            <Grid item>
              <a href="localhost:3000/about" style={{ color: "white" }}>
                Blog
              </a>
            </Grid>
            <Grid item>
              <a href="localhost:3000/about" style={{ color: "white" }}>
                Home
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} sx={{ p: 5, textAlign: "left" }}>
          <Typography
            variant="h4"
            component="h6"
            color="orange"
            borderColor="orange"
            fontSize="10"
            borderRadius={5}
            padding={1}
          >
            Contact Info
          </Typography>

          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Email color="white" fontSize="large" />
            </Grid>
            <Grid item>
              <a href="mailto:info@toriaspices.com" style={{ color: "white" }}>
                info@toriaspices.com
              </a>
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
              <LocationOnIcon />
            </Grid>
            <Grid item>No 6 Lucky Nwagwu Street Kapwa, Lugbe Abuja</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} sx={{ p: 5 }}>
          <Typography
            variant="h4"
            component="h6"
            color="orange"
            borderColor="orange"
            fontSize="10"
            borderRadius={5}
            padding={1}
          >
            Find Us
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <a href="https://web.facebook.com/toriaspices">
                <Facebook
                  color="primary"
                  fontSize="large"
                  sx={{ borderRadius: 20, m: 5, p: 5 }}
                />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.youtube.com/channel/UCg4RXb5wsxPrMSDOEmQuwUA">
                <YouTube
                  color="secondary"
                  fontSize="large"
                  sx={{ borderRadius: 20, m: 5, p: 5 }}
                />
              </a>
            </Grid>
            <Grid item>
              <a href="#">
                <Twitter color="primary" fontSize="medium" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/toriaspices/">
                <Instagram
                  color="secondary"
                  fontSize="large"
                  sx={{ borderRadius: 20, m: 5, p: 5 }}
                />
              </a>
            </Grid>
            <Grid item>
              <a href="#">
                <LinkedIn
                  color="primary"
                  fontSize="large"
                  sx={{ borderRadius: 20, m: 5, p: 5 }}
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid xs={12} sm={4} lg={3} sx={{ p: 5, textAlign: "left" }}>
          <Typography
            variant="h4"
            component="h6"
            color="orange"
            borderColor="orange"
            fontSize="10"
            borderRadius={5}
            padding={1}
          >
            News Letter
          </Typography>
          <p>Join our newsletter and get up-to-date from us.</p>
          <Grid sx={{ mr: "auto", marginTop: 2 }}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 300,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Your Email"
                inputProps={{ "aria-label": "search google maps" }}
              />

              <Divider sx={{ height: 28 }} orientation="vertical" />
            </Paper>
            <Button
              style={{ background: "orange", color: "white", m: "3px" }}
              aria-label="directions"
            >
              SUBSCRIBE
            </Button>
          </Grid>
        </Grid> */}

        <Grid item xs={12} sm={12} lg={12} sx={{ p: 5, textAlign: "center" }}>
          <footer>
            Powered by <a href="#"> Codehouze </a>
          </footer>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
