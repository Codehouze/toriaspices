import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import React from "react";
import Link from "next/link";
// import Image from "next/image";
import Breadcrumb from "../Components/BreadCrumb";

function contact() {
  return (
    <>
      <Grid container sx={{ px: 3, mt: 5 }}>
        <Grid item xs={12} sm={6} lg={6} sx={{ p: 5, fontFamily: "Arial" }}>
          <Typography variant="h3" component="h3">
            Contact Us
          </Typography>
          <Typography variant="p" component="p">
            Welcome to ToriaSpices!
            <br /> We're excited to hear from you. Whether you have questions,
            feedback, or just want to say hello, we're here to assist you. Feel
            free to reach out to us through any of the following channels:
          </Typography>
          <Typography variant="p" component="p">
            Our dedicated customer support team is available to help you with
            any inquiries or assistance you may need. From spice recommendations
            to order tracking, we're here to ensure your experience with
            ToriaSpices is exceptional.
          </Typography>

          <Grid sx={{ mt: 5 }}>
            <Grid sx={{ display: "flex", direction: "row" }}>
              <h5>Email:</h5>

              <Link href="mailto:support@toriaspices.com">
                support@toriaspices.com
              </Link>
            </Grid>
            <Grid sx={{ display: "flex", direction: "row" }}>
              <h5>Phone: </h5> <Link href="/contact">+2349158835595</Link>
            </Grid>

            <Grid sx={{ display: "flex", direction: "row" }}>
              <h5>Live Chat:</h5>

              <Link href="/contact">let's chat</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item direction="column" xs={12} sm={6} lg={6} className="contact">
          <Grid
            item
            alignitems="center"
            justify="center"
            className="contactCard"
          >
            <Grid item>
              <TextField
                id="filled-basic"
                label="First Name"
                variant="outlined"
                className="formInput"
                style={{ width: "50%" }}
                sx={{ mt: 2 }}
              />
            </Grid>

            <Grid item>
              <TextField
                id="filled-basic"
                label="Last Name"
                variant="outlined"
                className="formInput"
                style={{ width: "50%" }}
                sx={{ mt: 2 }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="filled-basic"
                label="Email"
                variant="outlined"
                style={{ width: "50%" }}
                sx={{ mt: 2 }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Phone Number"
                id="margin-none"
                variant="outlined"
                style={{ width: "50%" }}
                sx={{ mt: 2 }}
              />
            </Grid>
            <Grid item>
              <TextareaAutosize
                aria-label="maximum height"
                minRows={9}
                placeholder="Minimum 3 rows"
                style={{ width: "50%" }}
                sx={{ mt: 2 }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                style={{ width: "40%" }}
                sx={{ mt: 2, mr: "auto" }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default contact;
