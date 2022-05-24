// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  MenuIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "next/link";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography
              variant="h5"
              component="p"
              color="textSecondary"
              className={classes.title}
            >
              ToriaSpices
            </Typography>
            {isMobile ? (
              <>
                <MenuIcon />

                <Menu
                  id="menu-appbar"
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  KeepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                >
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    href="/"
                  >
                    <Typography variant="h6"> Home</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    href="/about"
                  >
                    <Typography variant="h6"> About</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    href="/Products"
                  >
                    <Typography variant="h6"> Products</Typography>
                  </MenuItem>

                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    href="/about"
                  >
                    <Typography variant="h6"> About</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    href="/contact"
                  >
                    <Typography variant="h6"> Contact </Typography>
                  </MenuItem>

                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    href="/blog"
                  >
                    <Typography variant="h6"> Blog </Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div style={{ marginRight: "2rem" }}>
                <Button
                  variant="text"
                  component={Link}
                  href="/"
                  color="default"
                >
                  Home
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  href="/about"
                  color="default"
                >
                  About
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  href="/products"
                  color="default"
                >
                  Products
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  href="/contact"
                  color="default"
                >
                  Contact
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  href="/blog"
                  color="default"
                >
                  Blog
                </Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default Header;
