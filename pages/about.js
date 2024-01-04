import { Grid,Typography } from "@mui/material";
import Image from 'next/image'

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
    <Grid item lg={4} md={6} xs={12} sx={{mt:5, mr:3, m:{xs:3}}}>
      <Image
      src="https://res.cloudinary.com/codehouseinc/image/upload/v1704370350/toriaspices/website/IMG_6766_1_pwwchb.png"
      width="600"
      height="900"
      objectFit="cover"

      
      />
    </Grid>
    <Grid item lg={7} md={6} xs={12} sx={{ px: 3, pb:4 }}>
    <Typography variant="h1" component="h2" color="secondary" sx={{mt:3,fontSize:36}}>Who We Are</Typography>
    <Typography mt={2} variant="h1" component="body1" mb={5}>
    Join us on a journey through the flavors at Toria Spices. Born from a love for bold tastes and a desire to break free from the ordinary, our story began in Abuja in 2018. In 2020, we officially launched our spice collection, crafting a unique experience that transforms every meal. Picture this – our pursuit of top-notch, fresh spices was like finding a culinary treasure in a vast landscape, making every dish a rare and delightful find.

   </Typography>
   <Image
      src="https://res.cloudinary.com/codehouseinc/image/upload/v1704310998/toriaspices/342843828_619383376405272_7667897796973873245_n.jpg_vvsvcz.jpg"
      width="900"
      height="600"
      objectFit="cover"
      mt={5}
      mb={5}
      sx={{p:5, m:50}}
      
      />
   <Typography variant="h1" component="h2" color="secondary" sx={{ mt:3, fontSize:36, }}>
  Our Mission
</Typography>
   {/* <Grid item lg={6} md={6} xs={12} sx={{p:3, order: { xs: 2, md: 1 } }}> */}
  <Typography mt={2} variant="h1" component="body1" mb={5} pb={5}>
    To make healthy living as exciting as a rollercoaster ride (minus the calories). Who says being fit can't be flavorful and fabulous? At Toria Spices, we're not just a spice brand;
     we're spice matchmakers, bringing families and individuals together with our chemical-free spice blends, real flavors, and herbs that pack a punch of nutrients. Because why settle for a dull meal when you can have a taste explosion? 
    Don't just take our word for it – our clients are raving about how Toria Spices turned their meals from "meh" to "OMG!" We've got the convenience game on lock, delivering our goodies straight to your doorstep. Currently, 
    we boast four major spice blends and a whopping 12 herbs and spices that will make your taste buds do the cha-cha. Our products aren't just about making your meals memorable; they're like a nutrient-packed party for your body. 
    We source our spices with more care than your grandma choosing the juiciest apples. 
    Quality is our love language, and each product is a symphony of freshness and goodness. What started as a quest for healthier living turned into Toria Spices, a flavor-packed revolution. 
    Join us, spice up your life, and let's make healthy living the hottest trend since sliced bread (with a sprinkle of our secret spice blend, of course).
   </Typography>
   </Grid>
    </Grid>

  
   


  </>
}

export default about;
