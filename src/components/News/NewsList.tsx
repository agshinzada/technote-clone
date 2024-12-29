import NewsListItem from "./NewsListItem";
import { NewsListItemProps } from "../../types/news";

const NewsList = ({ data }: { data: NewsListItemProps[] }) => {
  return (
    <div className="flex flex-col gap-5 mt-2.5">
      {data?.slice(0, 8)?.map((item) => (
        <NewsListItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default NewsList;
