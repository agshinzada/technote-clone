import { useNavigate } from "react-router-dom";

const FilterButton = ({
  label,
  link,
  hover,
}: {
  label: string;
  link: string;
  hover: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <button
      className={`text-xs py-1 px-3 border border-black rounded-md dark:border-white dark:hover:text-black ${
        hover ? "hover:bg-[#efefef]" : ""
      }`}
      type="button"
      onClick={() => navigate(link)}
    >
      {label}
    </button>
  );
};

export default FilterButton;
