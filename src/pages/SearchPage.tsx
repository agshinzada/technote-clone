import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/Button/Button";
import FilterButton from "../components/Button/FilterButton";
import NewsList from "../components/News/NewsList";
import news from "../assets/data/news.json";
import { NewsListItemProps } from "../types/news";
import { useState } from "react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const value = searchParams.get("contains") || "";
  const data: NewsListItemProps[] = news.feed.filter((item) =>
    item.title.toLocaleLowerCase("az").includes(value.toLowerCase())
  );

  function handleSearch(params: React.KeyboardEvent<HTMLInputElement>) {
    if (params.key === "Enter") {
      if (searchValue.trim() !== "") {
        navigate(`/axtar?contains=${searchValue}`);
      }
    }
  }

  return (
    <div className="mt-5">
      <div className="flex gap-2 items-center">
        <label htmlFor="search" className="text-sm">
          Axtarış
        </label>
        <div className="relative w-full max-w-[600px]">
          <input
            id="search"
            type="text"
            name="name"
            className="bg-white border border-black dark:bg-black dark:border-white rounded-lg w-full h-[40px] px-3 py-1 focus:outline-none text-sm"
            placeholder="Axtar"
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch}
            required
          />
          <div className="w-5 absolute right-2 top-[10px] ">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="dark:stroke-white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-9">
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
      <div className="grid grid-cols-3 gap-14 mt-8">
        <div className="col-span-2">
          <Button label="Xəbər axını" link="" hover={true} />
          <NewsList data={data} />
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default SearchPage;
