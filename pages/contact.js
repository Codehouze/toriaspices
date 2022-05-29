import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Image from "../image/1000_F_216025598_tfcUYy3HkVJS7Vd4XniGgZAnY7y8XNYH.jpeg";
import React from "react";

function contact() {
  return (
    <Grid container sx={{ px: 3, mt: 5 }}>
      <Grid item direction="column" xs={12} sm={6} lg={6} className="contact">
        <Grid item alignItems="center" justify="center" className="contactCard">
          <Typography variant="h4" component="h4">
            We are always hear to serve you...
          </Typography>

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
            <Button variant="contained" style={{ width: "40%" }} sx={{mt:2,mr:"auto" }}>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sm={6} lg={6}>
        <img src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1653419083/91397319_124413692497240_1023076873652928512_n_ln7nx1.png" />
      </Grid>
    </Grid>
  );
}
export default contact;
