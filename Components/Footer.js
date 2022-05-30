import React from "react";
import Person from "@material-ui/icons/Person";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Email from "@material-ui/icons/Email";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from "@material-ui/icons/YouTube";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <>
      <Grid
        container
        sx={{ marginTop: 5, backgroundColor: "Black", color: "white" }}
      >
        <Grid xs={12} sm={4} lg={4} sx={{ p: 5, textAlign: "left" }}>
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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit
          </p>
        </Grid>
        <Grid xs={12} sm={4} lg={4} sx={{ p: 5, textAlign: "left" }}>
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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat
          </p>
        </Grid>
        <Grid xs={12} sm={4} lg={4} sx={{ p: 5 }}>
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
            <Email color="white" fontSize="large" />

            <a href="info@toriaspices.com">info@toriaspices.com</a>
          </Grid>
          <Grid sx={{ marginTop: 5, marginBottom: 5 }}>
            <Person />
            +2348030914767
          </Grid>
          <Grid>
            Toriaspices
            <p>
              <a href="#">
                <Facebook color="primary" fontSize="large" />
              </a>
              <a href="#">
                <YouTube color="secondary" fontSize="large" />
              </a>

              <a href="#">
                <Twitter color="primary" fontSize="large" />
              </a>
              <a href="#">
                <Instagram color="secondary" fontSize="large" />
              </a>
              <a href="#">
                <LinkedIn color="primary" fontSize="large" />
              </a>
            </p>
          </Grid>
        </Grid>
      </Grid>

      <footer>
        <p>
          <a href="#">
            <Facebook color="primary" fontSize="large" />
          </a>
          <a href="#">
            <YouTube color="secondary" fontSize="large" />
          </a>{" "}
          <a href="#">
            <Twitter color="primary" borderRadius="10" fontSize="large" />
          </a>
          <a href="#">
            <Instagram color="secondary" fontSize="large" />{" "}
          </a>
          <a href="#">
            {" "}
            <LinkedIn color="primary" fontSize="large" />
          </a>
        </p>
        Copyright 2022 <a href="#">ToriaSpices</a>
      </footer>
    </>
  );
};
export default Footer;
