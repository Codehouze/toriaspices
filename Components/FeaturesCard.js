import React from "react";

import Box from "@mui/material/Box";
import { Typography, styled } from "@mui/material";


const IconContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  background: "#FFFFFF",
  width: 64,
  height: 64,
  marginBottom: 2,
  transition: "transform 0.2s", // Add a transition for the rotation animation
  "&:hover": {
    transform: "rotateY(180deg)", // Apply the rotation animation on hover
  },
});

function FeaturesCard({ title, description, icon }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      bgcolor="#ff7043"
      borderRadius={3}
      color="#ffffff"
      p={2}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
        bgcolor="#FFFFFF"
        width={64}
        height={64}
        marginBottom={2}
      >
        <IconContainer> {icon}</IconContainer>
      </Box>

      <Typography
        variant="h2"
        fontWeight="bold"
        pt={2}
        fontSize={18}
        noWrap={true}
      >
        {title}
      </Typography>

      <Typography variant="body1" pt={2} px="auto" fontSize={14} noWrap={true}>
        {description}
      </Typography>
    </Box>
  );
}

export default FeaturesCard;

//
