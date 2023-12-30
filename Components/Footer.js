import {
  Person,
  Facebook,
  Twitter,
  Email,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import {useTheme}  from '@mui/material'
import { Button } from "@mui/material";
import Image from 'next/image'
import ScrollToTopButton from '../Components/ScrollToTopButton';

const Footer = () => {

  const theme = useTheme();
  return (
    <>
      <Grid container backgroundColor="Black" color="white" px={5}>
      <Grid item xs={12} sm={4} lg={4} sx={{ py: 2 }} >
      <Grid item>
     <Image
      src="https://res.cloudinary.com/codehouseinc/image/upload/v1684271913/toriaspices/TORIA_Spices_logo11_vxsspd.png"
      width="100"
      height="80"
      alt="Logo"
    />
  </Grid>
  <Grid item>
    <Typography variant="h5" component="div" sx={{ py: 2, color: theme.palette.primary.contrastText, borderColor: theme.palette.primary.main }}>
      We Provide Organic Spices For Healthy Living.
    </Typography>
  </Grid>
          
          <Grid container spacing={2}>
            <Grid item>
              <a href="https://web.facebook.com/toriaspices">
                <Facebook sx={{color:theme.palette.secondary.main,'&:hover': {
                    color: theme.palette.primary.main } }} fontSize="large" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.youtube.com/channel/UCg4RXb5wsxPrMSDOEmQuwUA">
                <YouTube sx={{color:theme.palette.secondary.main,'&:hover': {
                    color: theme.palette.primary.main } }} fontSize="large" />
              </a>
            </Grid>
            <Grid item>
              <a href="#">
                <Twitter sx={{color:theme.palette.secondary.main,'&:hover': {
                    color: theme.palette.primary.main } }}fontSize="large" />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/toriaspices/">
                <Instagram sx={{color:theme.palette.secondary.main,'&:hover': {
                    color: theme.palette.primary.main } }} fontSize="large" />
              </a>
            </Grid>
            <Grid item>
              <a href="#">
                <LinkedIn sx={{color:theme.palette.secondary.main,'&:hover': {
                    color: theme.palette.primary.main } }} fontSize="large" />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} p={2}>
          <Typography variant="h4" sx={{ py:2, color:theme.palette.primary.main,borderColor:theme.palette.primary.main}}>
            Explore
          </Typography>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item>
              <Link href="/">
                <Button sx={{color:theme.palette.secondary.main,'&:hover': {
                    color: theme.palette.primary.main } }}>Home</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/about">
                <Button sx={{color:theme.palette.secondary.main,'&:hover': {
                    color: theme.palette.primary.main } }}>About Toria Spices</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/blog">
                <Button sx={{color:theme.palette.secondary.main,'&:hover': {
                    color: theme.palette.primary.main } }}>Blog</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/products">
                <Button sx={{color:theme.palette.secondary.main,'&:hover': {
                    color: theme.palette.primary.main } }}>Our Products</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/contact">
                <Button sx={{color:theme.palette.secondary.main,'&:hover': {
                    color: theme.palette.primary.main } }}>Contact Us</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} sx={{ py: 2, textAlign: "left" }}>
          <Typography variant="h4" py={2} borderColor="primary" color="primary">
            Contact Info
          </Typography>

          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Email color="secondary" fontSize="large" />
            </Grid>
            <Grid item>
              <Link color="secondary" href="mailto:info@toriaspices.com">
                <p>info@toriaspices.com</p>
              </Link>
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Person color="secondary" fontSize="large" />
            </Grid>
            <Grid item>+2349158835595</Grid>
          </Grid>

          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <LocationOnIcon color="secondary" fontSize="large" />
            </Grid>
            <Grid item>No 6 Lucky Nwagwu Street Kapwa, Lugbe Abuja</Grid>
          </Grid>
        </Grid>
       

        <Grid item xs={12} sm={12} lg={12} sx={{ p: 2, textAlign: "center" }}>
          <footer display="flex">
            Powered by
            <a color="primary" href="#">
              Codehouze
            </a>
            <ScrollToTopButton sx={{background:theme.palette.primary.main}}/>
          </footer>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
