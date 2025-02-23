import TextField from "@mui/material/TextField";
import { Facebook, Email, Instagram, YouTube } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
import Image from "next/image";

const Contact = () => {
  const theme = useTheme();

  return (
    <>
      <Banner title="Contact Us" />
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 2, md: 3 },
        }}
      >
        <Grid item xs={11} sm={6} lg={7} sx={{ px: 3 }}>
          <Typography
            variant="h1"
            component="h2"
            color="primary"
            sx={{ mt: 3, fontSize: 36 }}
          >
            We love feedback
          </Typography>
          <Typography variant="body1" component="p">
            <br /> At Toria Spices! We're excited to hear from you. Whether you
            have questions, feedback, or just want to say hello, we're here to
            assist you. Feel free to reach out to us through any of the
            following channels:
          </Typography>
          <Typography variant="body1" component="p">
            Our dedicated customer support team is available to help you with
            any inquiries or assistance you may need. From spice recommendations
            to order tracking, we're here to ensure your experience with
            ToriaSpices is exceptional.
          </Typography>
        </Grid>
        <Grid item xs={10} sm={6} lg={5} sx={{ px: 3 }} className="contact">
          {/* TODO: use social media icons instead.... */}
          <Grid>
            <Grid>
              <Typography
                variant="h3"
                component="h3"
                color="primary"
                sx={{ mt: 3, fontSize: 26, mb: 3 }}
              >
                Follow us on our socials
              </Typography>
            </Grid>
            <Grid>
              {" "}
              <Grid item xs={10} sm={6} lg={5} sx={{ px: 3 }}></Grid>
              <Grid sx={{ display: "flex", direction: "row", spacing: 2 }}>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@toriaspices.com">
                  <Email
                    sx={{
                      color: theme.palette.secondary.main,
                      mr: 1,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                    fontSize="large"
                  />
                </a>
                <a href="https://web.facebook.com/toriaspices">
                  <Facebook
                    sx={{
                      color: theme.palette.socials.facebook,
                      mr: 1,
                      "&:hover": {
                        color: theme.palette.primary.facebook,
                      },
                    }}
                    fontSize="large"
                  />
                </a>
                <a href="https://www.instagram.com/toriaspices/">
                  <Instagram
                    sx={{
                      color: theme.palette.socials.instagram,
                      mr: 1,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                    fontSize="large"
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCg4RXb5wsxPrMSDOEmQuwUA">
                  <YouTube
                    sx={{
                      color: theme.palette.socials.youtube,
                      mr: 1,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                    fontSize="large"
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
          {/* <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <TextField
                id="filled-basic"
                label="First Name"
                variant="outlined"
                className="formInput"
                style={{ width: "100%" }}
                sx={{ mt: 2 }}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.firstName}
                name="firstName"
              />
            </Grid>

            <Grid item>
              <TextField
                id="filled-basic"
                label="Last Name"
                variant="outlined"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.lastName}
                name="lastName"
                className="formInput"
                style={{ width: "100%" }}
                sx={{ mt: 2 }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="filled-basic"
                label="Email"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
                name="email"
                variant="outlined"
                style={{ width: "100%" }}
                sx={{ mt: 2 }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Phone Number"
                id="margin-none"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.phoneNumber}
                name="phoneNumber"
                variant="outlined"
                style={{ width: "100%" }}
                sx={{ mt: 2 }}
              />
            </Grid>
            <Grid item>
              <TextareaAutosize
                aria-label="maximum height"
                minRows={9}
                placeholder="Minimum 3 rows"
                style={{ width: "100%" }}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.message}
                name="message"
                sx={{ mt: 2 }}
              />
            </Grid>
            <Grid item container justifyContent="center">
              <Button
                variant="contained"
                style={{ width: "40%" }}
                sx={{ mt: 2 }}
                type="submit"
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
