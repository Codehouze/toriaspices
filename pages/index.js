import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FeaturesCard from "../Components/FeaturesCard";
import ProductFilter from "../Components/ProductFilter";
import ProductList from "../Components/ProductList";
import { Paper, Typography } from "@mui/material";
import NewsLetter from "../Components/NewsLetter";
import ShopNowBanner from "../Components/ShopNowBanner";
import Jumbotron from "../Components/Jumbotron";
import Testimonial from "../Components/Testimonial";
import BlogCard from "../Components/BlogCard";

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
  const featuresDescription1 = "On order over N15,000";
  const featuresCardTitle2 = "CASH ON DELIVERY";
  const featuresDescription2 = "100% Money Back Guarantee";
  const featuresCardTitle3 = "SPECIAL GIFT CARD";
  const featuresDescription3 = "Offer Special bonuses with gift";
  const featuresCardTitle4 = "24/7 Customer Service";
  const featuresDescription4 = "Call Us on +2348030914767";

  return (
    <Paper container>
      <Head>
        <title>Toria Spices</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Spicing to Healthy living" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/codehouseinc/image/upload/v1684271913/toriaspices/TORIA_Spices_logo11_vxsspd.png"
        />
      </Head>
      <Grid container >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: { xs: 600, md: 600 },
            backgroundImage: slider1,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            maxWidth: "100%",
            mx: "auto",
            mt: 3,
          }}
        >
          <Grid container spacing={2}>
            <Jumbotron />
          </Grid>
        </Box>
        {/* four cards with special attractive point  */}
        <Grid
          container
          // display="flex"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            py: { xs: 2, md: 3 },
          }}
        >
          <Grid item xs={6} lg={2} md={6} sm={6}>
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
          <Grid item xs={6} lg={2} md={6} sm={6}>
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
          <Grid item xs={6} lg={2} md={6} sm={6}>
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
          <Grid item xs={6} lg={2} md={6} sm={6}>
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

        {/* our product with a filter */}
        <Grid
          alignItems="center"
          sx={{ mx: "auto", fontSize: 20, color: "#90C53B" }}
        >
          <Typography variant="h2" pb={5} fontWeight="bold">
            Our Products
          </Typography>
        </Grid>

        <ProductFilter />
        <ProductList />

        {/* CTA with two cards */}
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            mx: "auto",
            px: "auto",
            py: 5,
          }}
        >
          <Grid item md={5} lg={5} xs={12} px={3}>
            <ShopNowBanner
              backgroundImage={backgroundImageUrl1}
              title={title}
              description={description}
            />
          </Grid>
          <Grid item md={5} lg={5} xs={12} px={3}>
            <ShopNowBanner
              backgroundImage={backgroundImageUrl2}
              title={title1}
              description={description1}
            />
          </Grid>
        </Grid>

        {/* News letter */}
        <Grid container spacing={1} p={4}>
          <NewsLetter />
        </Grid>

        {/* Testimonial */}
        <Grid container lg={12} md={12} xs={12} spacing={1} sx={{ mx: "auto", py: 4 }}>
          <Testimonial />
        </Grid>

        <Grid alignItems="center" sx={{ mx: "auto", py: 3, color: "#90C53B" }}>
          <Typography variant="h3" fontWeight="bold">
            Latest Blog
          </Typography>
        </Grid>

        <Grid
          container
          display="flex"
          py={4}
          px={5}
          // spacing={1}
          justifyItems="center"
        >
          {/* latest blog */}
          <Grid item lg={4} md={4} xs={12}>
            <BlogCard />
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <BlogCard />
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <BlogCard />
          </Grid>
        </Grid>

        <Grid container>
          {/* brands that buy our product */}
          {/* Carocel */}
        </Grid>
      </Grid>
    </Paper>
  );
}
