import { ReactSVG } from "react-svg";
import { useSearch } from "../context/searchValue";

export const SearchBar = () => {
  const { searchValue, setSearchValue } = useSearch();
  const hasValue = searchValue.length > 0;

  return (
    <div className="search-bar">
      <h1 className="text-4xl mb-8">Search</h1>
      <div className="relative flex align-middle bg-white w-full">
        <input
          type="text"
          value={searchValue}
          onChange={(e: any) => setSearchValue(e.target.value)}
          className="w-full border-2 p-2"
        />
        <span
          className={`absolute top-2 right-4 flex items-center justify-center w-6 h-6 ${
            hasValue && "cursor-pointer"
          }`}
          onClick={() => hasValue && setSearchValue("")}
        >
          <ReactSVG src={`/icons/${!hasValue ? "search" : "cross"}.svg`} />
        </span>
      </div>
    </div>
  );
};
