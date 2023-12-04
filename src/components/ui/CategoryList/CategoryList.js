import { allCategory } from "@/utils/getAllCategories";
import { Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
  const { data: allCategories } = await allCategory();
  //   console.log(allCategories);

  return (
    <div className="mt-8 ">
      <Typography className="font-bold mb-5" variant="h6">
        Categories
      </Typography>
      <Divider />
      <Stack rowGap={1}>
        {allCategories.map((category) => (
          <Button variant="outlined" key={category.id}>
            <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
          </Button>
        ))}
      </Stack>
    </div>
  );
};

export default CategoryList;
