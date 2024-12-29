import Button from "../components/Button/Button";
import CoverSection from "../components/Cover/CoverSection";
import NewsList from "../components/News/NewsList";
import WeeklyNewsList from "../components/News/WeeklyNewsList";
import news from "../assets/data/news.json";

const HomePage = () => {
  return (
    <div>
      <CoverSection />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="md:block hidden">
            <Button label="Xəbər axını" link="" hover={true} />
          </div>
          <NewsList data={news.feed} />
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

export default HomePage;
