import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YoutubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@mui/material/Typography";
import PersonIcon from "@material-ui/icons/Person";
import Grid from "@mui/material/Grid";
import { Box } from "@material-ui/core";

const Footer = () => {
  return (
    <>
      <Grid
        container
        sx={{ marginTop: 5, backgroundColor: "Black", color: "white" }}
      >
        <Grid xs={4} sx={{ p: 5, textAlign: "left" }}>
          <Typography
            variant="h4"
            component="h6"
            color="orange"
            borderColor="orange"
            fontSize="10"
            borderRadius={5}
            padding={1}
          >
            Blog recent post
          </Typography>
          <p>
            maxwell emmanuel built this built this blog for toriaspices as his
            first web site for the year 2022 maxwell emmanuel built this built
            this blog for toriaspices as his first web site for the year 2022
            maxwell chijioke emmanuel built this built this blog for toriaspices
            as his first web site for the year 2022 maxwell emmanuel built this
            built this blog for toriaspices as his first web site for the year
            2022 maxwell emmanuel built this built this blog for toriaspices as
            his first web site for the year 2022 maxwell emmanuel built this
            built this blog for toriaspices as his first web site for the year
            2022 maxwell emmanuel built this built this blog for toriaspices as
            his first web site for the year 2022{" "}
          </p>
        </Grid>
        <Grid xs={4} sx={{ p: 5, textAlign: "left" }}>
          <Typography
            variant="h4"
            component="h6"
            color="orange"
            borderColor="orange"
            fontSize="10"
            borderRadius={5}
            padding={1}
          >
            Testimonies
          </Typography>
          <p>
            maxwell emmanuel built this built this blog for toriaspices as his
            first web site for the year 2022 maxwell emmanuel built this built
            this blog for toriaspices as his first web site for the year 2022{" "}
          </p>
        </Grid>
        <Grid xs={4} sx={{ p: 5 }}>
          <Typography
            variant="h4"
            component="h6"
            color="orange"
            borderColor="orange"
            fontSize="10"
            borderRadius={5}
            padding={1}
          >
            Contact
          </Typography>

          <Grid>
            <EmailIcon color="white" fontSize="large" />

            <a href="info@toriaspices.com">info@toriaspices.com</a>
          </Grid>
          <Grid sx={{ marginTop: 5, marginBottom: 5 }}>
            <PersonIcon />
            +2348030914767
          </Grid>
          <Grid>
            Toriaspices
            <p>
              <a href="#">
                <FacebookIcon color="primary" fontSize="large" />
              </a>
              <a href="#">
                <InstagramIcon color="secondary" fontSize="large" />
              </a>
              <a href="#">
                <YoutubeIcon color="secondary" fontSize="large" />
              </a>
              <a href="#">
                <TwitterIcon color="primary" fontSize="large" />
              </a>
              <a href="#">
                <LinkedInIcon color="primary" fontSize="large" />
              </a>
            </p>
          </Grid>
        </Grid>
      </Grid>

      <footer>
        <p>
          <a href="#">
            <FacebookIcon color="primary" fontSize="large" />
          </a>
          <a href="#">
            <YoutubeIcon color="secondary" fontSize="large" />
          </a>{" "}
          <a href="#">
            <TwitterIcon color="primary" borderRadius="10" fontSize="large" />
          </a>
          <a href="#">
            <InstagramIcon color="secondary" fontSize="large" />{" "}
          </a>
          <a href="#">
            {" "}
            <LinkedInIcon color="primary" fontSize="large" />
          </a>
        </p>
        Copyright 2022 <a href="#">ToriaSpices</a>
      </footer>
    </>
  );
};
export default Footer;
