import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";

export function TestimonyBox({ images, Descriptions }) {
  return (
    <Grid
      container
      display="flex"
      sx={{ p: 3, justifyContent: "space-evenly" }}
    >
      {Descriptions.map((Description, index) => (
        <Grid item lg={5} md={5} xs={10} sx={{ my: 2 }} key={index}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                p: 3,
                justifyContent: "space-evenly",
                width: "100%",
                minHeight: { xs: "auto", md: "250px" },
                maxHeight: "none",
                overflow: "visible",
                borderRadius: "16px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "120px", md: "150px" },
                  height: { xs: "120px", md: "150px" },
                  mx: "auto",
                  mb: { xs: 2, md: 0 },
                  flexShrink: 0,
                }}
              >
                <Image
                  src={images[index]}
                  alt={`Testimonial ${index + 1}`}
                  width={150}
                  height={150}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #fff",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Box 
                sx={{ 
                  flex: 1, 
                  pl: { md: 3 },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Playfair",
                    lineHeight: 1.6,
                    color: "#333",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {Description}
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}

function Testimonial() {
  const imageArray1 = [
    "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "https://res.cloudinary.com/codehouseinc/image/upload/v1704142835/toriaspices/website/298285396_5265088960277685_8027513428602963920_n_soijvc.jpg",
  ];

  const imageArray2 = [
    "https://res.cloudinary.com/codehouseinc/image/upload/v1704142835/toriaspices/website/smiling-young-black-chef-woman-using-spoon-as-microphone-looking-camera-happy-african-american-cook-lady-uniform-having-294728341_eejjm0.webp",
    "https://res.cloudinary.com/codehouseinc/image/upload/v1704143046/toriaspices/website/294942225_2301289223355618_6531310485420780630_n.jpg_o1mmyb.jpg",
  ];

  const descriptionsArray1 = [
    "ToriaSpices has truly elevated my cooking experience. The flavors and aromas of their spices are incredibly authentic and add a burst of richness to every dish. I love how their products have transformed my meals into culinary masterpieces.",
    "As a home chef, using high-quality ingredients is essential for achieving exceptional flavors. ToriaSpices delivers on this promise with their top-notch spices. Each spice is vibrant, aromatic, and full of flavor, making my dishes stand out.",
  ];

  const descriptionsArray2 = [
    "ToriaSpices has turned my kitchen into a fragrant paradise. Their spices not only add depth to my recipes but also fill the air with delightful aromas that make cooking a sensory experience. I'm impressed by the quality and freshness of their products",
    "From classic blends to unique and exotic flavors, ToriaSpices offers an impressive variety of spices. I appreciate their commitment to quality and the way their spices enhance a wide range of cuisines. It's a game-changer for anyone who loves experimenting in the kitchen",
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://res.cloudinary.com/codehouseinc/image/upload/v1690241845/toriaspices/slider3_1_jwagwm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        py: 8,
      }}
    >
      <Grid container alignItems="center" width="100%">
        <Grid item xs={12} sx={{ color: "white", p: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontFamily: "Playfair",
                fontSize: { xs: "32px", md: "48px" },
                textAlign: "center",
                mb: 4,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Happy Clients
            </Typography>
          </motion.div>
          <Carousel
            autoPlay
            interval={5000}
            transitionTime={1000}
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            showArrows={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    left: 15,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.8)",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ←
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    right: 15,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.8)",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  →
                </button>
              )
            }
          >
            <TestimonyBox images={imageArray1} Descriptions={descriptionsArray1} />
            <TestimonyBox images={imageArray2} Descriptions={descriptionsArray2} />
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Testimonial;
