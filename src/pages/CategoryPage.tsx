import { useParams } from "react-router-dom";
import CategoryTitle from "../components/CategoryTitle";
import categoryJson from "../assets/data/category.json";
import Button from "../components/Button/Button";
import NewsList from "../components/News/NewsList";
import WeeklyNewsList from "../components/News/WeeklyNewsList";
import FilterButton from "../components/Button/FilterButton";
import news from "../assets/data/news.json";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const title: string | undefined = categoryJson.find(
    (item) => item.link === `/${category}`
  )?.name;

  const data = news.feed.filter((item) => item.category === title)?.slice(0, 8);

  return (
    <div>
      <CategoryTitle title={title} />
      <div className="flex items-center gap-3 mt-4">
        <svg
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.1665 6V10.5967C6.18983 10.7717 6.1315 10.9583 5.99733 11.0808C5.94337 11.1349 5.87926 11.1778 5.8087 11.2071C5.73813 11.2364 5.66248 11.2514 5.58608 11.2514C5.50968 11.2514 5.43404 11.2364 5.36347 11.2071C5.2929 11.1778 5.2288 11.1349 5.17483 11.0808L4.00233 9.90833C3.93871 9.84614 3.89034 9.77007 3.86099 9.68608C3.83164 9.60209 3.82212 9.51245 3.83317 9.42417V6H3.81567L0.455666 1.695C0.360937 1.57339 0.318194 1.41923 0.336775 1.26621C0.355357 1.11318 0.433753 0.973735 0.554832 0.878333C0.665666 0.796667 0.788166 0.75 0.916499 0.75H9.08317C9.2115 0.75 9.334 0.796667 9.44483 0.878333C9.56591 0.973735 9.64431 1.11318 9.66289 1.26621C9.68147 1.41923 9.63873 1.57339 9.544 1.695L6.184 6H6.1665Z"
            className="fill-black stroke-black dark:fill-white dark:stroke-white"
          ></path>
        </svg>
        <p className="text-xs">Filterlə</p>
      </div>

      <div className="flex gap-2 mt-4">
        <FilterButton label="Yeni" link="" hover={true} />
        <FilterButton label="Aktual" link="" hover={true} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-14 mt-3">
        <div className="col-span-2">
          <NewsList data={data} />
        </div>
        <div className="col-span-1 md:block hidden">
          <Button label="Həftənin xəbərləri" link="" hover={true} />
          <WeeklyNewsList />
        </div>
      </div>
      <div className="flex justify-center my-7">
        <button
          className="text-xs py-2 px-3.5 border border-black rounded-md dark:border-white hover:bg-[#efefef]"
          type="button"
        >
          Daha çox
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
