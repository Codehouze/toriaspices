import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper, Typography, Container } from "@mui/material";
import {
  FeaturesCard,
  ProductFilter,
  ProductList,
  NewsLetter,
  ShopNowBanner,
  Jumbotron,
  Testimonial,
  BlogCard,
} from "../components";

export default function Index() {
  const slider1 = "url(../public/image/slider2_1.jpeg)";
  const backgroundImageUrl1 =
    "https://res.cloudinary.com/codehouseinc/image/upload/v1690237349/toriaspices/banner1_csymte.png";
  const backgroundImageUrl2 =
    "https://res.cloudinary.com/codehouseinc/image/upload/v1690237857/toriaspices/banner2_hww6mq.png";
  const title = "THE QUALITY";
  const description = "MADE SPICE";
  const title1 = "Discover Our";
  const description1 = "NEW RECIPES";

  // feature card input
  const featuresCardTitle1 = "FREE DELIVERY";
  const featuresDescription1 = "On order over ₦80,000";
  const featuresCardTitle2 = "CASH ON DELIVERY";
  const featuresDescription2 = "100% Money Back Guarantee";
  const featuresCardTitle3 = "SPECIAL GIFT CARD";
  const featuresDescription3 = "Offer Special bonuses with gift";
  const featuresCardTitle4 = "24/7 Customer Service";
  const featuresDescription4 = "Call Us on +2349158835595";

  return (
    <Paper elevation={0} sx={{ overflow: 'hidden' }}>
      <Head>
        <title>Toria Spices</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Spicing to Healthy living" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/codehouseinc/image/upload/v1684271913/toriaspices/TORIA_Spices_logo11_vxsspd.png"
        />
      </Head>
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: "100%",
          height: { xs: 600, md: 600 },
          backgroundImage: slider1,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          maxWidth: "100%",
          mx: "auto",
          mb: 4,
        }}
      >
        <Jumbotron />
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{
            py: 4,
            px: { xs: 2, md: 3 },
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <FeaturesCard
              title={featuresCardTitle1}
              description={featuresDescription1}
              icon={
                <LocalShippingIcon
                  variant="Outlined"
                  color="secondary"
                  fontSize="large"
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeaturesCard
              title={featuresCardTitle2}
              description={featuresDescription2}
              icon={
                <AccountBalanceWalletIcon
                  variant="Outlined"
                  color="secondary"
                  fontSize="large"
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeaturesCard
              title={featuresCardTitle3}
              description={featuresDescription3}
              icon={
                <CardGiftcardIcon
                  variant="Outlined"
                  color="secondary"
                  fontSize="large"
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeaturesCard
              title={featuresCardTitle4}
              description={featuresDescription4}
              icon={
                <SupportAgentIcon
                  variant="Outlined"
                  color="secondary"
                  fontSize="large"
                />
              }
            />
          </Grid>
        </Grid>

        {/* Products Section */}
        <Box sx={{ py: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              color: "#90C53B",
              mb: 4,
            }}
          >
            Our Products
          </Typography>
          <ProductFilter />
          <ProductList />
        </Box>

        {/* Newsletter Section */}
        <Box sx={{ py: 6 }}>
          <NewsLetter />
        </Box>

        {/* Shop Now Banners */}
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          sx={{ py: 6 }}
        >
          <Grid item xs={12} md={6}>
            <ShopNowBanner
              backgroundImage={backgroundImageUrl1}
              title={title}
              description={description}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ShopNowBanner
              backgroundImage={backgroundImageUrl2}
              title={title1}
              description={description1}
            />
          </Grid>
        </Grid>

        {/* Testimonials Section */}
        <Box sx={{ py: 6 }}>
          <Testimonial />
        </Box>

        {/* Blog Section */}
        <Box sx={{ py: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              color: "#90C53B",
              mb: 4,
            }}
          >
            Latest Blog
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{ px: { xs: 2, md: 5 } }}
          >
            <Grid item xs={12} md={4}>
              <BlogCard categories="Spices" />
            </Grid>
            <Grid item xs={12} md={4}>
              <BlogCard categories="Cooking" />
            </Grid>
            <Grid item xs={12} md={4}>
              <BlogCard categories="Food" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
}
