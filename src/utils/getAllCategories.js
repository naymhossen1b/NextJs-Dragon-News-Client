export const allCategory = async () => {
  const res = await fetch("http://localhost:5000/categories");
  return res.json();
};

// Get Category wise data
export const categoryNews = async (category) => {
  const res = await fetch(`http://localhost:5000/news?category=${category}`, {
    cache: "no-store",
  });
  return res.json();
};

// Get News Details Route
export const newsDetails = async (id) => {
  const res = await fetch(`http://localhost:5000/news/${id}`, {
    cache: "no-store",
  });
  return res.json();
};
