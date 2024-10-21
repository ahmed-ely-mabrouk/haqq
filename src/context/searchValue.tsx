import React from "react";

const searchValue: string = "";
const setSearchValue = (value: string) => {};

const SearchContext = React.createContext({
  searchValue,
  setSearchValue,
});

export const SearchContextContextProvider = (props: any) => {
  const [value, setValue] = React.useState<string>("");

  return (
    <SearchContext.Provider
      value={{
        searchValue: value,
        setSearchValue: setValue,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
export const useSearch = () => {
  const context = React.useContext(SearchContext);
  return context;
};
export default SearchContext;
