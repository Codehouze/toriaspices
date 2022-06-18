import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from '@mui/material/ListItem';
import ListitemText from "@mui/material/ListitemText";
import { makeStyles } from "@material-ui/core/styles";

import Link from "next/link";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "orange",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <Listitem onClick={() => setOpenDrawer(false)}>
            <ListitemText>
              <Link href="/" className={classes.link}>
                Home
              </Link>
            </ListitemText>
          </Listitem>
          <Divider />
          <Listitem onClick={() => setOpenDrawer(false)}>
            <ListitemText>
              <Link href="/about" className={classes.link}>
                About
              </Link>
            </ListitemText>
          </Listitem>
          <Divider />
          <Listitem onClick={() => setOpenDrawer(false)}>
            <ListitemText>
              <Link href="/contact" className={classes.link}>
                Contact
              </Link>
            </ListitemText>
          </Listitem>
          <Divider />
          <Listitem onClick={() => setOpenDrawer(false)}>
            <ListitemText>
              <Link href="/blog" className={classes.link}>
                Blog
              </Link>
            </ListitemText>
          </Listitem>
          <Divider />
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
