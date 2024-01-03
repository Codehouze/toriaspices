import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function BlogCard() {
  return (
    <Card sx={{ maxWidth: 345, mx:2, my:3}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Where Can I Get Some?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Turmeric (Curcuma longa) is a bright yellow-orange spice commonly used
          in cooking, especially in South Asian and Indian cuisines. It is
          well-known for its unique flavor and vibrant color, but it also offers
          various potential health benefits due to its active compound called
          curcumin. Some of the advantages of turmeric include:
        </Typography>
      </CardContent>
      <CardActions>
   
      <Button
  size="small"
  sx={{alignItems:"center",
    background: '#FF6600',
    '&:hover': {
      background: '#90C53B',
    },
  }}
>
  <Link href="/slug/blog">
    <Typography
      variant="body2"
      sx={{
        color: '#FFFFFF',
        '&:hover': {
          color: '#FFFFFF',
        },
      }}
    >
      Read More
    </Typography>
  </Link>
</Button>
      </CardActions>
    </Card>
  );
}
