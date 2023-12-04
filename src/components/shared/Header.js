import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import moment from "moment";
import headerImage from "../../assets/The Dragon News.png";

const Header = () => {
  return (
    <Box className="my-5">
      <Container>
        <Image src={headerImage} alt="Image" height={400} width={500} className="mx-auto" />
        <Typography className="text-center text-sm space-y-2 text-gray-600">
          Journalism with yellow masterclass <br />
          {moment().format("dddd, MMMM D, YYYY")}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
