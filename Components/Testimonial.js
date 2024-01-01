import React from "react";
import { Grid, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import Paper from '@mui/material/Paper';



export function TestimonyBox({ images, Descriptions }) {
  return (
    <Grid container display="flex" sx={{ p: 3, justifyContent: "space-around" }}>
      {Descriptions.map((Description, index) => (
        <Grid key={index} item lg={5} md={5} xs={10} sx={{ my: 2 }}>
          <Paper elevation={10} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, backgroundColor: 'rgba(255, 255, 255, 0.9)', p: 3, justifyContent: "space-evenly", width: "100%" }}>
            <Image
              src={images[index]} 
              alt={`Testimonial ${index + 1}`}
              width={500}
              height={500}
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
            <Typography
              variant="h1"
              fontWeight="bold"
              fontFamily="Playfair"
              component="p"
              sx={{ textAlign: "center", marginRight: "13px" }}
            >
              {Description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

function Testimonial() {
  const imageArray1 = [
    "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "https://res.cloudinary.com/codehouseinc/image/upload/v1704142835/toriaspices/website/298285396_5265088960277685_8027513428602963920_n_soijvc.jpg"
  ];

  const imageArray2 = [
    "https://res.cloudinary.com/codehouseinc/image/upload/v1704142835/toriaspices/website/smiling-young-black-chef-woman-using-spoon-as-microphone-looking-camera-happy-african-american-cook-lady-uniform-having-294728341_eejjm0.webp",
    "https://res.cloudinary.com/codehouseinc/image/upload/v1704143046/toriaspices/website/294942225_2301289223355618_6531310485420780630_n.jpg_o1mmyb.jpg"
  ];

  const descriptionsArray1 = [
    "ToriaSpices has truly elevated my cooking experience. The flavors and aromas of their spices are incredibly authentic and add a burst of richness to every dish. I love how their products have transformed my meals into culinary masterpieces.",
    "As a home chef, using high-quality ingredients is essential for achieving exceptional flavors. ToriaSpices delivers on this promise with their top-notch spices. Each spice is vibrant, aromatic, and full of flavor, making my dishes stand out."
  ];

  const descriptionsArray2 = [
    "ToriaSpices has turned my kitchen into a fragrant paradise. Their spices not only add depth to my recipes but also fill the air with delightful aromas that make cooking a sensory experience. I'm impressed by the quality and freshness of their products",
    "From classic blends to unique and exotic flavors, ToriaSpices offers an impressive variety of spices. I appreciate their commitment to quality and the way their spices enhance a wide range of cuisines. It's a game-changer for anyone who loves experimenting in the kitchen"
  ];

  return (
    <Grid
      container
      alignItems="center"
      width="100%"
      lg={12} md={12} xs={12}
      sx={{
        backgroundImage: "url('https://res.cloudinary.com/codehouseinc/image/upload/v1690241845/toriaspices/slider3_1_jwagwm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
        <Carousel autoPlay interval="5000" transitionTime="5000" showThumbs={true}>
          <TestimonyBox images={imageArray1} Descriptions={descriptionsArray1} />
          <TestimonyBox images={imageArray2} Descriptions={descriptionsArray2} />
        </Carousel>
      </Grid>
    </Grid>
  );
}

export default Testimonial;




