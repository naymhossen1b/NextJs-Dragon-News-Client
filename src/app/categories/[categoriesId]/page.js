import { categoryNews } from "@/utils/getAllCategories";

const DynamicNews = async ({ params, searchParams }) => {
  const { data } = await categoryNews(searchParams.category);
  console.log(data);

  return (
    <div>
      <h1>Dynamic News pages: {searchParams.category}</h1>
    </div>
  );
};

export default DynamicNews;
