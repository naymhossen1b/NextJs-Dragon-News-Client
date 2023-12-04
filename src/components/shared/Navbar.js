"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { IconButton } from "@mui/material";
// Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import Header from "./Header";

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
    pathname: "/categories/news",
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

const Navbar = () => {
  return (
    <>
    <Header />
      <AppBar position="static" className="bg-black">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} height={100} width={100} alt="logo" />
            <Box className="w-full text-center">
              {navRoutes.map((item) => (
                <Link key={item} href={item.pathname}>
                  <Button className="text-white font-bold">{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton className="text-sky-500 gap-3">
                <FacebookIcon />
                <YouTubeIcon className="text-red-700" />
                <LinkedInIcon />
                <TwitterIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
