import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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

export default function Index() {
  const slider1 = "url(../public/image/slider2_1.jpeg)";
  const backgroundImageUrl1 =
    "https://media.istockphoto.com/id/873964916/photo/spices-on-white-background-isolated-with-place-for-text.jpg?s=1024x1024&w=is&k=20&c=blGNr4E3vCUX1orCuQlOiP2ZTaExAECIDWvdyHa_X8w=";
  const backgroundImageUrl2 =
    "https://as1.ftcdn.net/v2/jpg/04/87/96/38/1000_F_487963899_wpAa0pW71FK5eoWgIFjywVhFoZhnhZr7.jpg";
  const title = "I am good";
  const description = "We are testing out props";
  const title1 = "Testing Props";
  const description1 = "We are testing out props here with the CEO her self..";

  // feature card input
  const featuresCardTitle1 = "FREE DELIVERY";
  const featuresDescription1 = "On order over N15,000";
  const featuresCardTitle2 = "CASH ON DELIVERY";
  const featuresDescription2 = "100% Money Back Guarantee";
  const featuresCardTitle3 = "SPECIAL GIFT CARD";
  const featuresDescription3 = "Offer Special bonuses with gift";
  const featuresCardTitle4 = "24/7 Customer SERVICE";
  const featuresDescription4 = "Call Us on +2348030914767";

  return (
    <Paper>
      <Head>
        <title>Toria Spices</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Spicing to Healthy living" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: 600,
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
          display="flex"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            py: 3,
            px: "auto",
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
        <Grid alignItems="center" sx={{ mx: "auto", fontSize: 20 }}>
          <h2>Our Products</h2>
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
            p: 5,
          }}
        >
          <Grid item md={5} lg={5} sx={12} px={3}>
            <ShopNowBanner
              backgroundImage={backgroundImageUrl1}
              title={title}
              description={description}
            />
          </Grid>
          <Grid item md={5} lg={5} sx={12} px={3}>
            <ShopNowBanner
              backgroundImage={backgroundImageUrl2}
              title={title1}
              description={description1}
            />
          </Grid>
        </Grid>

        {/* News letter */}
        <NewsLetter />
        {/* Testimonial */}
        <Grid container spacing={1}></Grid>

        <Grid container display="flex">
          {/* latest blog */}
          <Grid item>1</Grid>
          <Grid item>2</Grid>
          <Grid item>3</Grid>
        </Grid>

        <Grid container>
          {/* brands that buy our product */}
          Carocel
        </Grid>
      </Grid>
    </Paper>
  );
}
