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
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import Grid from "@mui/material/Grid";

import Link from "next/link";

const pages = ["Home", "About", "Products", "Blog", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
              <img
                src="https://res.cloudinary.com/codehouseinc/image/upload/v1684271913/toriaspices/TORIA_Spices_logo11_vxsspd.png"
                width="100"
                height="80"
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
              <img
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
                  sx={{ px:2,my:2, mx:1, color: theme.palette.primary.contrastText, display: "block", background: theme.palette.secondary.main, borderRadius:10,   '&:hover': {
                    background: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main } }}
                >
                  Home
                </Button>
              </Link>
              <Link href="/about" passHref>
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{ px:2, my: 2, mx:1, color: theme.palette.primary.contrastText, display: "block", background: theme.palette.secondary.main, borderRadius:10,
                  '&:hover': {
                    background: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main  }}}
                >
                  About
                </Button>
              </Link>
              <Link href="/products" passHref>
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{ px:2, my: 2,mx:1, color: theme.palette.primary.contrastText, display: "block",background: theme.palette.secondary.main, borderRadius:10,   '&:hover': {
                    background: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main } }}
                >
                  Products
                </Button>
              </Link>
              <Link href="/blog" passHref>
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{ px:2,my: 2,mx:1, color: theme.palette.primary.contrastText, display: "block", background: theme.palette.secondary.main, borderRadius:10, 
                  '&:hover': {
                    background: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main 
                  }
                }}
                >
                  Blog
                </Button>
              </Link>
              <Link href="/contact" passHref>
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{ px:2, my: 2,mx:1, color: theme.palette.primary.contrastText, display: "block", background: theme.palette.secondary.main, borderRadius:10,
                  '&:hover': {
                    background: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main 
                  },}}
                >
                  Contact
                </Button>
              </Link>
              <Link href="/contact" passHref>
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{ px:2,my: 2,mx:1, color: theme.palette.primary.contrastText, display: "block",background: theme.palette.secondary.main, borderRadius:10,
                  '&:hover': {
                    background: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main 
                  },}}
                >
                  Login
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
