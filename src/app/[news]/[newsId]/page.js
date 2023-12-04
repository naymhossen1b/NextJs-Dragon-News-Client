import { newsDetails } from "@/utils/getAllCategories";
import { Box, CardContent, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetails = async ({ params }) => {
  const { data } = await newsDetails(params.newsId);
//   console.log(data);

  return (
    <Box className="my-6">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Image src={data?.thumbnail_url} alt="Image" width={800} height={800} />
            <Grid container spacing={2} className="my-6">
              <Grid item xs={6}>
                <Image src={data?.image_url} alt="Image" width={800} height={800} />
              </Grid>
              <Grid item xs={6}>
                <Image src={data?.image_url} alt="Image" width={800} height={800} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <CardContent>
              <p className="text-white bg-red-600 text-center rounded-md p-2 w-1/4">
                {data?.category}
              </p>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography gutterBottom variant="body2">
                By {data.published_date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.details}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetails;
