"use client";
// Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const navRoutes = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];
  return (
    <div>
      <Box className="bg-black px-2 py-5 text-white">
        <Container>
          <Box sx={{ flexGrow: 0 }} className="w-full text-center">
            <IconButton className="text-white gap-3">
              <FacebookIcon />
              <YouTubeIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </IconButton>
          </Box>

          <Box className="w-full text-center">
            {navRoutes.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white font-bold">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Typography className="text-center text-sm text-gray-600" >
            @2023 Design By N Tech World Boss
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
