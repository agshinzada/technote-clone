import { Link } from "react-router-dom";

interface CoverSectionItemProps {
  title: string;
  image: string;
  link: string;
  size: boolean;
}

const CoverSectionItem = ({ data }: { data: CoverSectionItemProps }) => {
  return (
    <>
      <div className=" h-60 md:h-96 relative mb-3 md:mb-5">
        <Link to={data.link}>
          <img
            src={data.image}
            alt="post"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </Link>
      </div>
      <Link to={data.link} className="hover:underline">
        <p
          className={`${
            data.size ? "text-lg md:text-4xl" : "text-xl"
          } font-extrabold`}
        >
          {data.title}
        </p>
      </Link>
    </>
  );
};

export default CoverSectionItem;
