async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">
      <div className="col-span-3">
        <h2 className="font-bold text-lg">All Categories</h2>
        <ul className="flex flex-col gap-3 mt-6">
          {categories.map((category) => {
            return (
              <li
                key={category.category_id}
                className="bg-slate-100 p-2 rounded-md font-bold text-center text-md"
              >
                {category.category_name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="font-bold text-3xl bg-purple-100 col-span-6">
        All News
      </div>
      <div className="font-bold text-3xl bg-yellow-100 col-span-3">
        Social Icons
      </div>
    </div>
  );
}
