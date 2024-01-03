import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {useTheme}  from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EditNoteIcon from '@mui/icons-material/EditNote';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import Image from 'next/image'
import MenuItem from "@mui/material/MenuItem";

import Link from "next/link";

const pages = ["Home", "About", "Products", "Blog", "Contact"];


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const theme = useTheme();
  return (
    <>
      <AppBar position="static" sx={{ background: "white",py:2}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Image
                src="https://res.cloudinary.com/codehouseinc/image/upload/v1684271913/toriaspices/TORIA_Spices_logo11_vxsspd.png"
                width="100"
                height="80"
                alt="ToriaSpices_logo"
              />
            </Typography>

            {/* Mobile Menu */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => {
                  const link = page.toLowerCase().replace(" ", "-");
                  const href = link === "home" ? "/" : `/${link}`;

                  return (
                    <Link key={page} href={href} passHref>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" sx={{ color: "black" }}>
                          {page}
                        </Typography>
                      </MenuItem>
                    </Link>
                  );
                })}
              </Menu>
            </Box>

            {/* Logo (Mobile) */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{ mr: 2, display: { xs: "flex", md: "none" }, flexGrow: 1 }}
            >
              <Image
                src="https://res.cloudinary.com/codehouseinc/image/upload/v1684271913/toriaspices/TORIA_Spices_logo11_vxsspd.png"
                width="100"
                height="80"
              />
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex",justifyContent: 'flex-end' }}}>
              <Link href="/" passHref>
             
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                  display:"flex",alignItems: "center", px:2,my:2, mx:1, color: theme.palette.primary.contrastText, background: theme.palette.secondary.main, borderRadius:10,'&:hover': {
                    background: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main } }}
                >
                   <HomeIcon sx={{ height: "1em", width: "1em", mr: 1 }}/> 
                  Home
                </Button>
              </Link>
              <Link href="/about" passHref>
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{display:"flex",alignItems:"center",px:2, my: 2, mx:1, color: theme.palette.primary.contrastText, background: theme.palette.secondary.main, borderRadius:10,
                  '&:hover': {
                    background: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main  }}}
                >
                  <InfoIcon sx={{height: "1em", width: "1em",mr:1}} />
                  About Us
                </Button>
              </Link>
              <Link href="/products" passHref>
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{ display:"flex",alignItems: "center", px:2, my: 2,mx:1, color: theme.palette.primary.contrastText,background: theme.palette.secondary.main, borderRadius:10,   '&:hover': {
                    background: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main } }}
                >
                  <ViewCompactIcon sx={{height: "1em", width: "1em",mr:1}} />
                  Our Products
                </Button>
              </Link>
              <Link href="/blog" passHref>
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{display:"flex",alignItems: "center",px:2,my: 2,mx:1, color: theme.palette.primary.contrastText, background: theme.palette.secondary.main, borderRadius:10, 
                  '&:hover': {
                    background: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main 
                  }
                }}
                >
                  <EditNoteIcon sx={{mr:1}}/>
                  Blog
                </Button>
              </Link>
              <Link href="/contact" passHref>
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{display:"flex",alignItems: "center",px:2, my: 2,mx:1, color: theme.palette.primary.contrastText, background: theme.palette.secondary.main, borderRadius:10,
                  '&:hover': {
                    background: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main 
                  },}}
                >
                  <ContactPageIcon sx={{mr:1}}/>
                  Contact
                </Button>
              </Link>
              <Link href="/contact" passHref>
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{ px:2,my: 2,mx:1, color: theme.palette.primary.contrastText,background: theme.palette.secondary.main, borderRadius:10,
                  '&:hover': {
                    background: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main 
                  },}}
                >
                  <ShoppingCartIcon sx={{mr:1}} />
                  SignIn
                </Button>
              </Link>
              {/* Render other menu items */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;
