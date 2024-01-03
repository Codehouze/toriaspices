import React from "react";
import { Grid, Box, Typography, InputBase, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useForm } from "react-hook-form";

function NewsLetter() {
  const { register, handleSubmit } = useForm();
  const [emailError, setEmailError] = React.useState("");

  const handleFormSubmit = (formData) => {
    console.log("form data is", formData);
    if (!formData.email || formData.email.length == " ") {
      console.log(setEmailError("Email is required"));
      return false;
    }
    return true;
  };
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      md={9}
      xs={12}
      sx={{
        mx: "auto",
        px: "auto",
        p: 5,
        background: "lightgrey",
        borderRadius: 3,
      }}
    >
      <Grid item display="flex" xs={12} md={6}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          backgroundColor="primary.main" // Use Material-UI's color palette consistently
          color="white" // Use text color from the palette
          borderRadius="50%" // Using "100%" for a circle shape
          p={2}
          sx={{
            backgroundColor: "primary.main",
          }}
        >
          <EmailIcon fontSize="large" />
        </Box>
        <Box sx={{ ml: 2 }}>
          <Typography variant="h4">Newsletter</Typography>

          <Typography variant="body1">
            Stay updated with our latest news and promotions.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          component="form"
          onSubmit={handleSubmit(handleFormSubmit)}
          display="flex"
          flexWrap="nowrap"
          pt={1}
        >
          <InputBase
            size="medium"
            // name="email"
            type="text"
            sx={{
              background: "white",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              px: 2,
              py: 1.4,
            }}
            {...register("email")}
            error={emailError && emailError.length ? true : false}
            placeholder="Enter Your E-mail..."
            inputProps={{ "aria-label": "Enter Your E-mail..." }} // Add accessibility label
          />
          <Button
            type="submit"
            xs={3}
            sx={{
              color: "white",
              background: "#FF6600",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              p: 2,
              pl: 3,
              "&:hover": {
                backgroundColor: "#90C53B",
                color: "white",
              },
            }}
            aria-label="Subscribe" // Add accessibility label
          >
            Subscribe
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default NewsLetter;
