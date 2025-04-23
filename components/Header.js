import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { useTheme } from '@mui/material/styles';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EditNoteIcon from '@mui/icons-material/EditNote';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/router';

// Navigation configuration
const navigationItems = [
  { label: "Home", path: "/", icon: HomeIcon },
  { label: "About", path: "/about", icon: InfoIcon },
  { label: "Products", path: "/products", icon: ViewCompactIcon },
  { label: "Blog", path: "/blog", icon: EditNoteIcon },
  { label: "Contact", path: "/contact", icon: ContactPageIcon },
];

// Reusable styles
const buttonStyles = (theme) => ({
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
});

const mobileButtonStyles = (theme) => ({
  display: "block",
  width: "100%",
  textAlign: "left",
  p: 2,
  color: theme.palette.primary.main,
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
});

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    return router.pathname === path;
  };

  const drawer = (
    <Box sx={{ width: 250, p: 2 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton
          onClick={handleDrawerToggle}
          aria-label="close menu"
          color="primary"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      {navigationItems.map((item) => (
        <Link key={item.label} href={item.path} passHref>
          <Button
            onClick={handleDrawerToggle}
            sx={{
              ...mobileButtonStyles(theme),
              backgroundColor: isActive(item.path) ? theme.palette.action.selected : 'transparent'
            }}
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </Box>
  );

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
                alt="Toria Spices Logo"
                priority
              />
            </Typography>

            {/* Mobile Menu Button */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'flex-end' }}>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.label} href={item.path} passHref>
                    <Button
                      sx={{
                        ...buttonStyles(theme),
                        backgroundColor: isActive(item.path) 
                          ? theme.palette.primary.contrastText 
                          : theme.palette.secondary.main,
                        color: isActive(item.path)
                          ? theme.palette.primary.main
                          : theme.palette.primary.contrastText
                      }}
                    >
                      <Icon sx={{ height: "1em", width: "1em", mr: 1 }} />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
              {/* <Link href="/cart" passHref>
                <Button
                  sx={buttonStyles(theme)}
                >
                  <ShoppingCartIcon sx={{ height: "1em", width: "1em", mr: 1 }} />
                  Cart
                </Button>
              </Link> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;
