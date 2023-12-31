import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useTheme}  from '@mui/material'
import Link from "next/link";


function Jumbotron() {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height={600}
      sx={{
        p: 5,
        color: "white",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1564149504298-00c351fd7f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.8, // Adjust the opacity to make the background slightly transparent
      }}
    >
       
      <Box
        md={5}
        lg={5}
        xs={12}
        sx={{
          p: 3,
          borderRadius: 5,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Add a semi-transparent background to the box
        }}
      >
        <Typography variant="h4" component="h1" sx={{color:theme.palette.primary.contrastText}} fontWeight="bold">
        Elevate Your Culinary Experience <br /> with Our Exquisite Spice Collections.
        </Typography>
        </Box>
        <Box>
        <Link href="/blog" passHref>
        <Button
          variant="contained"
          color="secondary"
          sx={{ borderRadius:'16px' , mt: 3, fontWeight: "bold", color:"white",p:2}} 
        >
         Learn more 
        </Button>
        </Link>
        <Link href="/products" passHref>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: '16px', mt: 3, fontWeight: "bold", mx:3, p:2 }} 
        >
         Shop now 
        </Button>
        </Link>
        </Box>
    </Box>
  );
}

export default Jumbotron;
