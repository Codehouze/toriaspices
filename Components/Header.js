// IMPORTING APIS
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "next/link";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
  links: {
    color: "orange",
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
    <div>
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <Toolbar>
            <img
              src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1653419083/91397319_124413692497240_1023076873652928512_n_ln7nx1.png"
              width="50"
              height="80"
            />
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
                    <Typography variant="h6" className={classes.links}>
                      {" "}
                      Home
                    </Typography>
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
