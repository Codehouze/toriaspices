// import { Card, CardContent } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Box from "@mui/material/Box";

import React from "react";

function contact() {
  return (
    <Box sx={{ margin:15, border:1, borderStyle:"groove",borderRadius:20, padding:5}}>
      <Typography variant="h4" component="h4" margin="0 auto">
        Spice 'n Easy Recipe Mixes
      </Typography>
      <Box sx={{height: 600, margin: "0 auto",p:5 }}>
        <FormGroup >
          <FormControlLabel
            control={
              <TextField
                id="filled-basic"
                label="First Name"
                variant="outlined"
              />
            }
          />
        </FormGroup>

        <FormGroup>
          <Grid item>
            <FormControlLabel
              control={
                <TextField
                  id="filled-basic"
                  label="Last Name"
                  variant="outlined"
                />
              }
            />
          </Grid>
        </FormGroup>
        <FormGroup>
          <Grid item>
            <FormControlLabel
              control={
                <TextField
                  id="filled-basic"
                  label="Last Name"
                  variant="outlined"
                />
              }
            />
          </Grid>
        </FormGroup>
        <FormGroup>
          <Grid item>
            <FormControlLabel
              control={
                <TextField id="filled-basic" label="Email" variant="outlined" />
              }
            />
          </Grid>
        </FormGroup>
        <FormGroup>
          <Grid item>
            <FormControlLabel
              control={
                <TextField
                  id="filled-basic"
                  label="Phone Number"
                  variant="outlined"
                />
              }
            />
          </Grid>
        </FormGroup>
        <FormGroup>
          <Grid item>
            <FormControlLabel
              control={
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Message"
                />
              }
            />
          </Grid>
          <Grid item>
            <Button variant="contained">Contained</Button>
          </Grid>
        </FormGroup>
      </Box>
    </Box>
  );
}
export default contact;
