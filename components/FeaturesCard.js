import React from "react";

import Box from "@mui/material/Box";
import { Typography, styled } from "@mui/material";

const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  background: "#FFFFFF",
  width: 64,
  height: 64,
  marginBottom: 2,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    background: theme.palette.primary.main,
    "& svg": {
      color: "#FFFFFF",
    },
  },
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  background: theme.palette.primary.main,
  borderRadius: 16,
  color: "#ffffff",
  padding: theme.spacing(3),
  height: "100%",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
  },
}));

function FeaturesCard({ title, description, icon }) {
  return (
    <CardContainer>
      <IconContainer>{icon}</IconContainer>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "0.9rem", sm: "1rem" },
          mb: 1,
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
          opacity: 0.9,
          lineHeight: 1.4,
        }}
      >
        {description}
      </Typography>
    </CardContainer>
  );
}

export default FeaturesCard;

//
