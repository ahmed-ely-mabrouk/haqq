import { ReactSVG } from "react-svg";

interface ISearchBar {
  value: string;
  onChange: (e: any) => void;
  onClear: () => void;
}
export const SearchBar = ({ value, onChange, onClear }: ISearchBar) => {
  const hasValue = value.length > 0;
  return (
    <div className="search-bar">
      <h1 className="text-4xl mb-8">Search</h1>
      <div className="relative flex align-middle bg-white w-full">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full border-2 p-2"
        />
        <span
          className={`absolute top-2 right-4 flex items-center justify-center w-6 h-6 ${
            hasValue && "cursor-pointer"
          }`}
          onClick={() => hasValue && onClear()}
        >
          <ReactSVG src={`/icons/${!hasValue ? "search" : "cross"}.svg`} />
        </span>
      </div>
    </div>
  );
};
