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
      return articles.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }

    const result = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        article.content.toLowerCase().includes(searchValue.toLowerCase())
    );
    return result.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
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
