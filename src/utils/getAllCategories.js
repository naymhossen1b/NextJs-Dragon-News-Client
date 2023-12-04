export const allCategory = async () => {
  const res = await fetch("http://localhost:5000/categories");
  return res.json();
};

export const categoryNews = async (category) => {
  const res = await fetch(`http://localhost:5000/news?category=${category}`, {
    cache: "no-store",
  });
  return res.json();
};
