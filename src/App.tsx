import React from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { Articles } from "./components/Articles";
import { articles } from "./data/articles";
import { useSearch } from "./context/searchValue";

function App() {
  const { searchValue } = useSearch();

  const filteredArticles = React.useMemo(() => {
    if (!searchValue) {
      return articles;
    }

    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        article.content.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  return (
    <div className="App">
      <SearchBar />
      <Articles articles={filteredArticles} />
    </div>
  );
}

export default App;
