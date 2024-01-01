import { Grid,Typography } from "@mui/material";
import React from "react";

function about() {
  return <>
 <Grid
  container
  justifyContent="center"
  sx={{
    p: 5,
    backgroundImage: "url('https://res.cloudinary.com/codehouseinc/image/upload/v1690241424/toriaspices/slider1_1_d9cd5n.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  }}
>
  <Typography variant="h1" component="h2">
    About Toria Spices
  </Typography>
</Grid>
  <Grid container>
    <Grid item lg={6} md={6} xs={12}></Grid>
    <Grid item lg={6} md={6} xs={12}>
    <Typography variant="h1" component="h2" color="secondary" sx={{mt:3}}>Who we Are</Typography>
    <Typography mt={2} variant="p" component="div" sx={{p:2, m:5}}>
  Welcome to the spicy world of Toria Spices, where our journey began with a sprinkle of passion and a dash of rebellion against bland meals! Born in Abuja, 
  our spice odyssey started in 2018, officially launching in 2020 because, let's face it, finding top-notch, fresh spices was like searching for a unicorn (really scarce) 
  
   </Typography></Grid>
   </Grid>

   <Typography variant="h1" component="h2" justifyItem="center" color="secondary">
    Our Mission
   </Typography>
   <Grid container>

   
   <Grid item lg={6} md={6} xs={12} sx={{p:5}}>
  To make healthy living as exciting as a rollercoaster ride (minus the calories). Who says being fit can't be flavorful and fabulous? At Toria Spices, we're not just a spice brand;
   we're spice matchmakers, bringing families and individuals together with our chemical-free spice blends, real flavors, and herbs that pack a punch of nutrients. Because why settle for a dull meal when you can have a taste explosion? 
   Don't just take our word for it – our clients are raving about how Toria Spices turned their meals from "meh" to "OMG!" We've got the convenience game on lock, delivering our goodies straight to your doorstep. Currently, 
   we boast four major spice blends and a whopping 12 herbs and spices that will make your taste buds do the cha-cha. Our products aren't just about making your meals memorable; they're like a nutrient-packed party for your body. 
   We source our spices with more care than your grandma choosing the juiciest apples. 
   Quality is our love language, and each product is a symphony of freshness and goodness. What started as a quest for healthier living turned into Toria Spices, a flavor-packed revolution. 
   Join us, spice up your life, and let's make healthy living the hottest trend since sliced bread (with a sprinkle of our secret spice blend, of course).
   </Grid>
    <Grid item lg={6} md={6} xs={12}>

    </Grid>

   </Grid>

  </>
}

export default about;
