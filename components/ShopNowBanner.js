import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const ShopNowBanner = ({ backgroundImage, title, description }) => {
  return (
    <Box
      position="relative"
      height={400}
      borderRadius={3}
      boxShadow={3}
      overflow="hidden"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // border: "1px solid rgba(0, 0, 0, 0)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "inherit",
        },
      }}
    >
      <Box
        position="relative"
        zIndex={1}
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        p={3}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          color="#90C53B"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          color="#FF6600"
          sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mt: 1 }}
        >
          {description}
        </Typography>
        <Link href="/products" passHref>
          <Button
            component="a"
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#FF6600",
              borderRadius: 2,
              "&:hover": { backgroundColor: "#90C53B" },
            }}
            aria-label="Shop Now"
          >
            Shop Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ShopNowBanner;
