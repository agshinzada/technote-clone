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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const WeeklyNewsListItem = ({ data }: { data: WeeklyListItemProps }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative h-[19rem] col-span-4">
        <Link to={`/${data.categoryUrl}/${data.link}`} onClick={scrollToTop}>
          <img
            src={data.image}
            alt="post"
            className="absolute inset-0 w-full h-[19rem] object-cover rounded-lg"
          />
        </Link>
      </div>
      <Link
        to={`/${data.categoryUrl}/${data.link}`}
        className="text-xl font-bold mt-2.5 hover:underline"
        onClick={scrollToTop}
      >
        <p>{data.title}</p>
      </Link>
    </div>
  );
};

export default WeeklyNewsListItem;
