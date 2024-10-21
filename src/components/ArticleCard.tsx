import { useSearch } from "../context/searchValue";
import { ArticleType } from "../types/article";

export const ArticleCard = (article: ArticleType) => {
  const { searchValue } = useSearch();
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  const highlightText = (text: string) => {
    if (!searchValue.length) {
      return <>{text}</>;
    }
    const regex = new RegExp(`(${searchValue})`, "gi");
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === searchValue.toLowerCase() ? (
            <span key={index} className="bg-yellow-300">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };
  return (
    <div className="px-6">
      <h1 className="text-2xl">{highlightText(article.title)}</h1>
      <span>{formatDate(article.publishedAt)}</span>
      <p>{highlightText(article.content)}</p>
    </div>
  );
};
