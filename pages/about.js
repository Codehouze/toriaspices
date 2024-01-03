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
    <Grid item lg={4} md={6} xs={12} sx={{ mx:4, my:4 }}>
      <Image
      src="https://res.cloudinary.com/codehouseinc/image/upload/v1704315869/toriaspices/376728378_802567008539680_8541064942510008908_n.jpg_t5bgkk.jpg"
      width="400%"
      height="400"
      objectFit="cover"

      
      />
    </Grid>
    <Grid item lg={6} md={6} xs={12} sx={{ px: 3 }}>
    <Typography variant="h1" component="h2" color="secondary" sx={{mt:3,fontSize:36}}>Who We Are</Typography>
    <Typography mt={2} variant="h1" component="body1">
    Embark on a Flavorful Journey with Toria Spices.
    Step into the vibrant world of Toria Spices, where our culinary adventure was ignited by a blend of passion and a rebellion against mundane meals! Originating in the heart of Abuja, our spice odyssey commenced in 2018, reaching its pinnacle with an official launch in 2020. Picture this – the quest for exceptional, fresh spices was akin to searching for a unicorn in a vast culinary landscape; a rare and elusive treasure.
   </Typography>
   </Grid>
   </Grid>

   <Typography variant="h1" component="h2" color="secondary" sx={{ mt:3, mx:3, fontSize:36, }}>
  Our Mission
</Typography>
   <Grid container>
   <Grid item lg={6} md={6} xs={12} sx={{p:3, order: { xs: 2, md: 1 } }}>
  <Typography mt={2} variant="h1" component="body1">
    To make healthy living as exciting as a rollercoaster ride (minus the calories). Who says being fit can't be flavorful and fabulous? At Toria Spices, we're not just a spice brand;
     we're spice matchmakers, bringing families and individuals together with our chemical-free spice blends, real flavors, and herbs that pack a punch of nutrients. Because why settle for a dull meal when you can have a taste explosion? 
    Don't just take our word for it – our clients are raving about how Toria Spices turned their meals from "meh" to "OMG!" We've got the convenience game on lock, delivering our goodies straight to your doorstep. Currently, 
    we boast four major spice blends and a whopping 12 herbs and spices that will make your taste buds do the cha-cha. Our products aren't just about making your meals memorable; they're like a nutrient-packed party for your body. 
    We source our spices with more care than your grandma choosing the juiciest apples. 
    Quality is our love language, and each product is a symphony of freshness and goodness. What started as a quest for healthier living turned into Toria Spices, a flavor-packed revolution. 
    Join us, spice up your life, and let's make healthy living the hottest trend since sliced bread (with a sprinkle of our secret spice blend, of course).
   </Typography>
   </Grid>
   <Grid item lg={4} md={6} xs={12} sx={{mx:4, order: { xs: 1, md: 2 } }}>
    <Image
      src="https://res.cloudinary.com/codehouseinc/image/upload/v1704310998/toriaspices/342843828_619383376405272_7667897796973873245_n.jpg_vvsvcz.jpg"
      width="600"
      height="400"
      objectFit="cover"
      
      />
    </Grid>
    

   </Grid>

  </>
}

export default about;
