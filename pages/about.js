import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import Banner from "../components/Banner";

const Image1 =
  "https://res.cloudinary.com/codehouseinc/image/upload/v1704370350/toriaspices/website/IMG_6766_1_pwwchb.png";
const Image2 =
  "https://res.cloudinary.com/codehouseinc/image/upload/v1704310998/toriaspices/342843828_619383376405272_7667897796973873245_n.jpg_vvsvcz.jpg";

const About = () => {
  return (
    <>
      <Banner title="About Toria Spices" />

      <Grid container spacing={4} sx={{ px: { xs: 2, md: 5 }, py: 4 }}>
        {/* Left Section - Image */}
        <Grid
          item
          lg={4}
          md={5}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ width: "100%", maxWidth: 600 }}>
            <Image
              src={Image1}
              layout="responsive"
              width={600}
              height={900}
              objectFit="cover"
              alt="about toria spices"
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </Grid>

        {/* Right Section - Text */}
        <Grid item lg={7} md={7} xs={12}>
          <Typography
            variant="h4"
            color="primary"
            sx={{ textAlign: "center", mb: 3 }}
          >
            Who We Are
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: 18, lineHeight: 1.6, textAlign: "justify" }}
          >
            Join us on a journey through the flavors at Toria Spices. Born from
            a love for bold tastes and a desire to break free from the ordinary,
            our story began in Abuja in 2018. In 2020, we officially launched
            our spice collection, crafting a unique experience that transforms
            every meal. Picture this – our pursuit of top-notch, fresh spices
            was like finding a culinary treasure in a vast landscape, making
            every dish a rare and delightful find.
          </Typography>

          {/* Image inside text area */}
          <Box sx={{ mt: 5, textAlign: "center" }}>
            <Image
              src={Image2}
              layout="responsive"
              width={900}
              height={420}
              objectFit="cover"
              alt="about toria spices"
              style={{ borderRadius: "10px" }}
            />
          </Box>

          <Typography
            variant="h4"
            color="primary"
            sx={{ textAlign: "center", mt: 5, mb: 3 }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: 18,
              lineHeight: 1.6,
              fontFamily: "Roboto Mono",
              textAlign: "justify",
            }}
          >
            At Toria Spices, we believe healthy living should be as thrilling as
            a rollercoaster ride (minus the calories). Who says being fit can't
            be flavorful and fabulous? We're not just a spice brand; we're spice
            matchmakers, bringing families and individuals together with our
            chemical-free spice blends, real flavors, and herbs that pack a
            punch of nutrients. Why settle for a dull meal when you can have a
            taste explosion? Our clients rave about how Toria Spices has
            transformed their meals from "meh" to "OMG!" Convenience is our game
            – we deliver our goodies straight to your doorstep. With four major
            spice blends and a whopping 12 herbs and spices, we make your taste
            buds dance. Our products don't just make your meals memorable; they
            turn every dish into a nutrient-packed party for your body. We
            source our spices with the utmost care, ensuring each product is a
            symphony of freshness and goodness. Quality is our love language.
            What started as a quest for healthier living turned into Toria
            Spices, a flavor-packed revolution. Join us, spice up your life, and
            let's make healthy living the hottest trend since sliced bread (with
            a sprinkle of our secret spice blend, of course).
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ px: 3, pb: 4 }}></Grid>
    </>
  );
};

export default About;
