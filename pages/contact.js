import TextField from "@mui/material/TextField";
import { Facebook, Email, Instagram, YouTube, Phone, LocationOn, LinkedIn } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
import { Box, Button, Card, CardContent, Container, Paper } from "@mui/material";
import { useForm } from "react-hook-form";

const Contact = () => {
  const theme = useTheme();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // TODO: Implement form submission logic
  };

  return (
    <>
      <Banner title="Contact Us" />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" color="primary" gutterBottom>
                  Get in Touch
                </Typography>
                <Typography variant="body1" paragraph>
                  We're here to help! Whether you have questions about our products, need assistance with an order, or just want to say hello, we'd love to hear from you.
                </Typography>
                
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Email color="primary" sx={{ mr: 2 }} />
                    <Typography>
                      <a href="mailto:support@toriaspices.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                        support@toriaspices.com
                      </a>
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Phone color="primary" sx={{ mr: 2 }} />
                    <Typography>+2349158835595</Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOn color="primary" sx={{ mr: 2 }} />
                    <Typography>
                      No 6 Lucky Nwagwu Street Kapwa,
                      <br /> Lugbe Abuja
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <a href="https://web.facebook.com/toriaspices" target="_blank" rel="noopener noreferrer">
                      <Facebook sx={{ 
                        color: theme.palette.socials.facebook, 
                        fontSize: 40,
                        '&:hover': { color: theme.palette.primary.main } 
                      }} />
                    </a>
                    <a href="https://www.instagram.com/toriaspices/" target="_blank" rel="noopener noreferrer">
                      <Instagram sx={{ 
                        color: theme.palette.socials.instagram, 
                        fontSize: 40,
                        '&:hover': { color: theme.palette.primary.main } 
                      }} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCg4RXb5wsxPrMSDOEmQuwUA" target="_blank" rel="noopener noreferrer">
                      <YouTube sx={{ 
                        color: theme.palette.socials.youtube, 
                        fontSize: 40,
                        '&:hover': { color: theme.palette.primary.main } 
                      }} />
                    </a>
                    <a href="https://www.linkedin.com/company/toria-spices/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                      <LinkedIn sx={{ 
                        color: '#0077B5', 
                        fontSize: 40,
                        '&:hover': { color: theme.palette.primary.main } 
                      }} />
                    </a>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" color="primary" gutterBottom>
                  Send Us a Message
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        {...register('firstName', { required: 'First name is required' })}
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        {...register('lastName', { required: 'Last name is required' })}
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        {...register('phone', { 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9+]+$/,
                            message: 'Invalid phone number'
                          }
                        })}
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        {...register('message', { required: 'Message is required' })}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Map Section */}
          <Grid item xs={12}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" color="primary" gutterBottom>
                  Our Location
                </Typography>
                <Box sx={{ height: 400, width: '100%', mt: 2 }}>
                  {/* TODO: Add Google Maps integration */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9999999999995!2d7.3775!3d9.0667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnMDAuMCJOIDfCsDIyJzM5LjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
