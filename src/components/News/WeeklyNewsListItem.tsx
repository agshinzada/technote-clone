import { Link } from "react-router-dom";

interface WeeklyListItemProps {
  title: string;
  description: string;
  date: string;
  image: string;
  summary: string;
  category: string;
  id: number;
  link: string;
  categoryUrl: string;
}

const WeeklyNewsListItem = ({ data }: { data: WeeklyListItemProps }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative h-[19rem] col-span-4">
        <Link to={`/${data.categoryUrl}/${data.link}`}>
          <img
            src={data.image}
            alt="post"
            className="absolute inset-0 w-full h-[19rem] object-cover rounded-lg"
          />
        </Link>
      </div>
      <a href="" className="text-xl font-bold mt-2.5 hover:underline">
        <p>{data.title}</p>
      </a>
    </div>
  );
};

export default WeeklyNewsListItem;
