import { Dispatch, SetStateAction } from "react";

interface SearchInputTypes {
  setSearchValue: Dispatch<SetStateAction<string>>;
  handleSearch: (params: React.KeyboardEvent<HTMLInputElement>) => void;
  size: boolean;
}

const SearchInput = ({
  setSearchValue,
  handleSearch,
  size,
}: SearchInputTypes) => {
  return (
    <input
      type="search"
      name="search"
      className={`bg-white border border-black dark:bg-black dark:border-white rounded-lg px-3 py-1 focus:outline-none ${
        size ? "w-full h-[40px] text-sm" : "w-[120px] h-[24px]  text-xs"
      } `}
      placeholder="Axtar"
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={handleSearch}
    />
  );
};

export default SearchInput;
