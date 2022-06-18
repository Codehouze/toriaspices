// IMPORTING APIS
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import DrawerComponent from "./Drawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "next/link";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "orange",
  },
  nav: {
    alignitem: "right",
  },
  navLinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "orange",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    float: "right",
    "&:hover": {
      color: "white",
      backgroundColor: "orange",
      borderBottom: "1px solid white",
    },
    menu: {
      color: "orange",
    },
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <Toolbar>
            <img
              src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1654824115/favicon-removebg_huudos.png"
              width="150"
              height="100"
            />
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <div className={classes.navLinks}>
                <Button
                  variant="text"
                  component={Link}
                  href="/"
                  className={classes.link}
                >
                  Home
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  href="/about"
                  className={classes.link}
                >
                  About
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  href="/products"
                  className={classes.link}
                >
                  Products
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  href="/contact"
                  className={classes.link}
                >
                  Contact
                </Button>
                <Button
                  variant="text"
                  component={Link}
                  href="/blog"
                  className={classes.link}
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
