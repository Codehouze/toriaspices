import React from "react";
import { Grid, Box, Typography, InputBase, Button, Alert } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useForm } from "react-hook-form";

function NewsLetter() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [emailError, setEmailError] = React.useState("");

  const handleFormSubmit = (formData) => {
    if (!formData.email || formData.email.trim() === "") {
      setEmailError("Email is required");
      return;
    }
    setEmailError("");
    console.log("Form data is", formData);
    // Simulate a successful submission
    reset();
  };

  return (
    <Grid
      container
      item
      spacing={2}
      alignItems="center"
      justifyContent="center"
      md={9}
      xs={12}
      sx={{
        mx: "auto",
        p: 5,
        background: "lightgrey",
        borderRadius: 3,
      }}
    >
      <Grid item xs={12} md={6} display="flex">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: "50%",
            p: 2,
            width: 64,
            height: 64,
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
            type="email"
            sx={{
              background: "white",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              px: 2,
              py: 1.4,
              flexGrow: 1,
            }}
            {...register("email", { required: "Email is required" })}
            placeholder="Enter Your E-mail..."
            inputProps={{ "aria-label": "Enter Your E-mail..." }}
            error={!!errors.email}
          />
          <Button
            type="submit"
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
            aria-label="Subscribe"
          >
            Subscribe
          </Button>
        </Box>
        {emailError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {emailError}
          </Alert>
        )}
      </Grid>
    </Grid>
  );
}

export default NewsLetter;
