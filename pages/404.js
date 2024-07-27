import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5', // Light gray background
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: { xs: '4rem', md: '6rem' }, color: '#ff6f61' }}>
        Ooooops ...
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 4 }}>
        That page cannot be found!
      </Typography>
      <Image
        alt="Page Not Found"
        src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1653490683/404_uzze8l.jpg"
        height={300} // Adjusted size for better responsiveness
        width={300}
        style={{ borderRadius: '10px' }}
      />
      <Typography variant="body1" sx={{ mt: 4 }}>
        Go back to the
        <Link href="/" passHref>
          <Button
            variant="contained"
            sx={{
              ml: 2,
              backgroundColor: '#ff6f61',
              color: 'white',
              '&:hover': {
                backgroundColor: '#ff3d00',
              },
            }}
          >
            Homepage
          </Button>
        </Link>
      </Typography>
    </Box>
  );
};

export default NotFound;
