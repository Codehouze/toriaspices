import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";

export default function Breadcrumb() {
  return (
    <Box sx={{ justifyContent: "center", alignContent: "center" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          <HomeIcon />
        </Link>
        <Typography color="text.primary">PageTitle</Typography>
      </Breadcrumbs>
    </Box>
  );
}
