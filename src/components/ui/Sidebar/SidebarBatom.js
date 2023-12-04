import { Box, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import Image from "next/image";
import topNews from "../../../assets/side-top-news.png";

const SidebarBatom = () => {
  return (
    <Box>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" className="my-2 items-center">
        <Box gridColumn="span 4">
          <CardMedia>
            <Image src={topNews} alt="Image" width={800} height={300} />
          </CardMedia>
        </Box>
        <Box gridColumn="span 8">
          <CardContent>
            <Typography className="text-sm">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
          </CardContent>
        </Box>
      </Box>
      <Divider />
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" className="my-2 items-center">
        <Box gridColumn="span 4">
          <CardMedia>
            <Image src={topNews} alt="Image" width={800} height={300} />
          </CardMedia>
        </Box>
        <Box gridColumn="span 8">
          <CardContent>
            <Typography className="text-sm">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
          </CardContent>
        </Box>
      </Box>
      <Divider />
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" className="my-2 items-center">
        <Box gridColumn="span 4">
          <CardMedia>
            <Image src={topNews} alt="Image" width={800} height={300} />
          </CardMedia>
        </Box>
        <Box gridColumn="span 8">
          <CardContent>
            <Typography className="text-sm">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
          </CardContent>
        </Box>
      </Box>
      <Divider />
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" className="my-2 items-center">
        <Box gridColumn="span 4">
          <CardMedia>
            <Image src={topNews} alt="Image" width={800} height={300} />
          </CardMedia>
        </Box>
        <Box gridColumn="span 8">
          <CardContent>
            <Typography className="text-sm">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
          </CardContent>
        </Box>
      </Box>
      <Divider />
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" className="my-2 items-center">
        <Box gridColumn="span 4">
          <CardMedia>
            <Image src={topNews} alt="Image" width={800} height={300} />
          </CardMedia>
        </Box>
        <Box gridColumn="span 8">
          <CardContent>
            <Typography className="text-sm">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
          </CardContent>
        </Box>
      </Box>
      <Divider />
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" className="my-2 items-center">
        <Box gridColumn="span 4">
          <CardMedia>
            <Image src={topNews} alt="Image" width={800} height={300} />
          </CardMedia>
        </Box>
        <Box gridColumn="span 8">
          <CardContent>
            <Typography className="text-sm">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
          </CardContent>
        </Box>
      </Box>
      <Divider />
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" className="my-2 items-center">
        <Box gridColumn="span 4">
          <CardMedia>
            <Image src={topNews} alt="Image" width={800} height={300} />
          </CardMedia>
        </Box>
        <Box gridColumn="span 8">
          <CardContent>
            <Typography className="text-sm">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarBatom;
