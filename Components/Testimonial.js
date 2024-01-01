import React from "react";
import { Grid, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import Paper from '@mui/material/Paper';



function Testimonial({ Testimony }) {
  const image =
    "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";
  const description =
    "ToriaSpices has truly elevated my cooking experience. The flavors and aromas of their spices are incredibly authentic and add a burst of richness to every dish. I love how their products have transformed my meals into culinary masterpieces";
  const description2 =
    "As a home chef, using high-quality ingredients is essential for achieving exceptional flavors. ToriaSpices delivers on this promise with their top-notch spices. Each spice is vibrant, aromatic, and full of flavor, making my dishes stand out.";
  const description3 =
    "ToriaSpices has turned my kitchen into a fragrant paradise. Their spices not only add depth to my recipes but also fill the air with delightful aromas that make cooking a sensory experience. I'm impressed by the quality and freshness of their products";
  const description4 =
    "From classic blends to unique and exotic flavors, ToriaSpices offers an impressive variety of spices. I appreciate their commitment to quality and the way their spices enhance a wide range of cuisines. It's a game-changer for anyone who loves experimenting in the kitchen";
  return (
    // <Carousel autoPlay>
    <Grid
      container
      alignItems="center"
      width="100%"
      lg={12} md={12} xs={12}
      
      sx={{
        backgroundImage:
          "url('https://res.cloudinary.com/codehouseinc/image/upload/v1690241845/toriaspices/slider3_1_jwagwm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // opacity: 0.7,
      }}
    >
      <Grid item lg={12} md={12} xs={12} alignItems="center" sx={{ color: "white", p: 4 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          fontFamily="Playfair"
          component="h1"
          mx="auto"
          sx={{ textAlign: "center", m: 1 }}
        >
         Happy Clients
        </Typography>
        <Carousel autoPlay interval="5000" transitionTime="5000" showThumbs={false}>
          <TestimonyBox image={image} Description={description} />
          <TestimonyBox image={image} Description={description2} />
          <TestimonyBox image={image} Description={description3} />
          <TestimonyBox image={image} Description={description4} />
        </Carousel>
      </Grid>
    </Grid>
  );
}

// { image, testimony } pass this into this function
export function TestimonyBox({ image, Description }) {
  return (
    <Grid container display="flex" sx={{ p: 3, justifyContent: "space-around" }}>
  {[1, 2].map((item) => (
    <Grid key={item} item lg={5} md={5} xs={10} sx={{m:2}}>
      <Paper elevation={10} sx={{ display: "flex",flexDirection: { xs: "column", md: "row"}, backgroundColor: 'rgba(255, 255, 255, 0.2)',p:5,justifyContent: "space-evenly", width:"100%" }}>
        <Image
          src={image}
          alt={`Testimonial ${item}`}
          width={500}
          height={150}
          objectFit="cover"
          style={{ borderRadius:"100%", padding:"5px" }}
        />
        <Typography
          variant="h1"
          fontWeight="bold"
          fontFamily="Playfair"
          component="p"
          color="white"
          sx={{ textAlign:"center", mx:3 }}
        >
          {Description}
        </Typography>
      </Paper>
    </Grid>
  ))}
</Grid>
  );
}



export default Testimonial;
