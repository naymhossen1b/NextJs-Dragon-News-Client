import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from "../../../assets/top-news.png";
import topNews2 from "../../../assets/top-news2.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
      <Box>
        <Card className="my-6">
          <CardActionArea>
            <CardMedia>
              <Image src={topNews} alt="Image" width={1200} height={400} />
            </CardMedia>
            <p className="text-white bg-red-600 rounded-md p-2 w-[107px] my-5">Technology</p>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
              </Typography>
              <Typography gutterBottom variant="body2">
                By Awlad Hossain - Mar 18 2023
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout........
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Fours Cards */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="my-6">
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} alt="Image" width={1200} height={400} />
                </CardMedia>
                <p className="text-white bg-red-600 rounded-md p-2 w-[107px] my-5">Technology</p>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    By Awlad Hossain - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} alt="Image" width={1200} height={400} />
                </CardMedia>
                <p className="text-white bg-red-600 rounded-md p-2 w-[107px] my-5">Technology</p>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    By Awlad Hossain - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} alt="Image" width={1200} height={400} />
                </CardMedia>
                <p className="text-white bg-red-600 rounded-md p-2 w-[107px] my-5">Technology</p>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    By Awlad Hossain - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} alt="Image" width={1200} height={400} />
                </CardMedia>
                <p className="text-white bg-red-600 rounded-md p-2 w-[107px] my-5">Technology</p>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    By Awlad Hossain - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LatestNews;
