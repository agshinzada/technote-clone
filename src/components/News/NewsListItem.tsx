import Button from "../Button/Button";
import { NewsListItemProps } from "../../types/news";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const NewsListItem = ({ data }: { data: NewsListItemProps }) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-9 gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors duration-150 relative">
      <div className="relative h-60 md:h-48 col-span-4">
        <Link
          to={`/${data.categoryUrl}/${data.link}`}
          onClick={scrollToTop}
          replace={true}
        >
          <img
            src={data.image}
            alt="post"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </Link>
      </div>
      <div className="col-span-5 p-1">
        <Link to={`/${data.categoryUrl}/${data.link}`} onClick={scrollToTop}>
          <h2 className="text-lg font-extrabold cursor-pointer hover:underline">
            {data.title}
          </h2>
        </Link>

        <div className="mt-2 flex flex-col justify-between">
          <Link
            to={`/${data.categoryUrl}/${data.link}`}
            className="row-span-4"
            onClick={scrollToTop}
          >
            <p className="text-xs hover:underline flex-grow cursor-pointer ">
              {data.summary}
            </p>
          </Link>

          <div className="flex gap-3 row-span-1 items-end mt-12 md:static absolute top-[9.9rem] right-2">
            <Button
              label={data.category}
              link={data.categoryUrl}
              hover={true}
            />
            <div className="md:block hidden">
              <Button label={data.date} link={""} hover={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsListItem;
