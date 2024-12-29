import { useNavigate } from "react-router-dom";

const ButtonWithImage = ({
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
      className={`text-xs py-1 px-3 border border-black rounded-md dark:border-white dark:hover:text-black flex gap-2 items-center relative ${
        hover ? "hover:bg-[#efefef]" : ""
      }`}
      type="button"
      onClick={() => navigate(link)}
    >
      <img
        src="https://static.technote.az/media/authors/425341141_7010785175686225_3948702867630772765_n.jpg"
        alt="prof"
        className="w-[1.62rem] absolute left-0 rounded-md"
      />{" "}
      <span className="ml-7">{label}</span>
    </button>
  );
};

export default ButtonWithImage;
