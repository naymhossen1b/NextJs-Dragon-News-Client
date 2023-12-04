import { categoryNews } from "@/utils/getAllCategories";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DynamicNews = async ({ params, searchParams }) => {
  const { data } = await categoryNews(searchParams.category);
  // console.log(data);

  return (
    <div className="my-5">
      <h1>
        Dynamic Total {searchParams.category} News {data.length}
      </h1>

      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="my-6">
          {data.map((news) => (
            <Grid key={news.id} item xs={6}>
              <Link href={`/${news.category}/${news._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia className="w-full h-64">
                    <Image src={news?.thumbnail_url} alt="Image" width={800} height={800} />
                  </CardMedia>
                  <p className="text-white bg-red-600 text-center rounded-md p-2 w-[107px] my-5">
                    {news?.category}
                  </p>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {news?.title.length > 30 ? news.title.slice(0, 30) : news.title}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                      By {news?.author.name} - {news?.author?.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 200
                        ? news.details.slice(0, 200) + "..."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
           </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default DynamicNews;
