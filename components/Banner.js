import { Grid,Typography } from "@mui/material";

const Banner = (props) => {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        sx={{
          p: 5,
          backgroundImage:
            "url('https://res.cloudinary.com/codehouseinc/image/upload/v1690241424/toriaspices/slider1_1_d9cd5n.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Typography variant="h1" component="h1">
       {props.title}
        </Typography>
      </Grid>
    </div>
  );
};

export default Banner;
