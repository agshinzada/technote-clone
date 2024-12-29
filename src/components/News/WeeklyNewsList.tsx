import WeeklyNewsListItem from "./WeeklyNewsListItem";
import data from "../../assets/data/news.json";

const WeeklyNewsList = () => {
  return (
    <div className="mt-2.5 flex flex-col gap-6">
      {data.weekly.map((item) => (
        <WeeklyNewsListItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default WeeklyNewsList;
