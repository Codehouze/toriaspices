import React from "react";
import { Grid, Box, Typography } from "@mui/material";
// import BootstrapCarousel from "../carousels/Bootstrap";
// import ResponsiveCarousel from "../carousels/Responsive";
import { Carousel } from "react-responsive-carousel";
import { Description } from "@mui/icons-material";

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
      height={600}
      sx={{
        backgroundImage:
          "url('https://res.cloudinary.com/codehouseinc/image/upload/v1690241845/toriaspices/slider3_1_jwagwm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // opacity: 0.7,
      }}
    >
      <Grid alignItems="center" sx={{ color: "white", p: 4 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          fontFamily="Playfair"
          px="auto"
          mx="auto"
          sx={{ textAlign: "center", m: 1 }}
        >
          Our Testimonials
        </Typography>
        <Carousel autoPlay interval="5000" transitionTime="5000" showThumbs={false}>
          <TestimonyBox image={image} Description={description} />
          <TestimonyBox image={image} Description={description2} />
          <TestimonyBox image={image} Description={description3} />
          <TestimonyBox image={image} Description={description} />
        </Carousel>
      </Grid>
    </Grid>
  );
}

// { image, testimony } pass this into this function
export function TestimonyBox({ image, Description }) {
  return (
    <Box display="flex" sx={{ p: 5 }}>
      <img
        src={image}
        alt="Testimonial"
        width="100"
        height="200"
        style={{ borderRadius: "100%", mx: 3 }}
      />
      <Box sx={{ color: "white", fontSize: "25px", fontWeight: "bold", px: 5 }}>
        {Description}
      </Box>
    </Box>
  );
}

export default Testimonial;
