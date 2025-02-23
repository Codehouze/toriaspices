import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EditNoteIcon from '@mui/icons-material/EditNote';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import Image from 'next/image';
import Link from "next/link";

const pages = ["Home", "About", "Products", "Blog", "Contact"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "white", py: 2 }}>
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
                width={100}
                height={80}
                alt="ToriaSpices_logo"
              />
            </Typography>

            {/* Mobile Menu Button */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'flex-end' }}>
              {pages.map((page, index) => {
                const link = page.toLowerCase().replace(" ", "-");
                const href = link === "home" ? "/" : `/${link}`;
                let Icon;
                
                switch (page) {
                  case "Home":
                    Icon = HomeIcon;
                    break;
                  case "About":
                    Icon = InfoIcon;
                    break;
                  case "Products":
                    Icon = ViewCompactIcon;
                    break;
                  case "Blog":
                    Icon = EditNoteIcon;
                    break;
                  case "Contact":
                    Icon = ContactPageIcon;
                    break;
                  default:
                    Icon = null;
                }

                return (
                  <Link key={page} href={href} passHref>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 2,
                        my: 1,
                        mx: 1,
                        color: theme.palette.primary.contrastText,
                        background: theme.palette.secondary.main,
                        borderRadius: 10,
                        '&:hover': {
                          background: theme.palette.primary.contrastText,
                          color: theme.palette.primary.main
                        }
                      }}
                    >
                      {Icon && <Icon sx={{ height: "1em", width: "1em", mr: 1 }} />}
                      {page}
                    </Button>
                  </Link>
                );
              })}
              <Link href="/cart" passHref>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                    my: 1,
                    mx: 1,
                    color: theme.palette.primary.contrastText,
                    background: theme.palette.secondary.main,
                    borderRadius: 10,
                    '&:hover': {
                      background: theme.palette.primary.contrastText,
                      color: theme.palette.primary.main
                    }
                  }}
                >
                  <ShoppingCartIcon sx={{ height: "1em", width: "1em", mr: 1 }} />
                  Sign In
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Box
        id="mobile-menu"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          backgroundColor: "white",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.3)",
          transform: anchorElNav ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          zIndex: 1200, // Ensure it's above the AppBar
          overflow: "auto"
        }}
      >
        <Box sx={{ p: 2 }}>
          <IconButton
            size="large"
            aria-label="close menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleCloseNavMenu}
            color="primary"
            sx={{ mb: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {pages.map((page) => {
            const link = page.toLowerCase().replace(" ", "-");
            const href = link === "home" ? "/" : `/${link}`;

            return (
              <Link key={page} href={href} passHref>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    p: 2,
                    color: theme.palette.primary.main,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover
                    }
                  }}
                >
                  {page}
                </Button>
              </Link>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default Header;
