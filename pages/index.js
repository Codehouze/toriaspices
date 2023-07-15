import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Card from "../Components/ProductCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FeaturesCard from "../Components/FeaturesCard";
import Link from "next/link";
import ProductFilter from "../Components/ProductFilter";
import ProductList from "../Components/ProductList";

import { BorderAllRounded } from "@material-ui/icons";
import { Paper } from "@mui/material";
import NewsLetter from "../Components/NewsLetter";
import ShopNowBanner from "../Components/ShopNowBanner";

export default function Index() {
  const slider1 = "url(../public/image/slider2_1.jpeg)";
  const backgroundImageUrl1 =
    "https://media.istockphoto.com/id/873964916/photo/spices-on-white-background-isolated-with-place-for-text.jpg?s=1024x1024&w=is&k=20&c=blGNr4E3vCUX1orCuQlOiP2ZTaExAECIDWvdyHa_X8w=";
  const backgroundImageUrl2 =
    "https://as1.ftcdn.net/v2/jpg/04/87/96/38/1000_F_487963899_wpAa0pW71FK5eoWgIFjywVhFoZhnhZr7.jpg";
  const title = "I am good";
  const description = "We are testing out props";
  return (
    <Paper>
      <Head>
        <title>Toria Spices</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Spicing to Healthy living" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        {/* an image with bg and write up  */}

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
            mx: "auto", // To center the box horizontally
            mt: 3,
          }}
        >
          <Grid container spacing={2}>
            <Box
              display="flex"
              // justifyContent="center"
              alignItems="center"
              width="100%"
              height={600}
              sx={{
                p: 5,
                color: "white",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1564149504298-00c351fd7f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* <p>Get the best outfit of your life</p> */}
              <h1>
                Finding the difference with <br /> ToriaSpices
              </h1>

              <Button sx={{ background: "green", borderStartEndRadius: 20 }}>
                Shop now
              </Button>
            </Box>
          </Grid>
        </Box>
        {/* four cards with special attractive point  */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          // alignItems="center"
          sx={{
            pt: 3,
            pb: 3,
          }}
        >
          <Grid item xs={6} lg={2} md={2} sm={6}>
            <FeaturesCard />
          </Grid>
          <Grid item xs={6} lg={2} md={2} sm={6}>
            <FeaturesCard />
          </Grid>
          <Grid item xs={6} lg={2} md={2} sm={6}>
            <FeaturesCard />
          </Grid>
          <Grid item xs={6} lg={2} md={2} sm={6}>
            <FeaturesCard />
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
              title={title}
              description={description}
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
