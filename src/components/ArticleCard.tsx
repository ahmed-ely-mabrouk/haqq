import React from "react";
import { useSearch } from "../context/searchValue";
import { ArticleType } from "../types/article";

export const ArticleCard = (article: ArticleType) => {
  const { searchValue } = useSearch();
  const [isHidden, setIsHidden] = React.useState<boolean>(true);
  const maxContent = 900;
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
  const trimContent = (text: string) => {
    let result = "";
    if (text.length > maxContent) {
      result = text.slice(0, maxContent) + "...";
    } else {
      result = text;
    }
    return highlightText(result);
  };
  const displayContent = () => {
    if (isHidden) {
      return trimContent(article.content);
    } else {
      return highlightText(article.content);
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold">{highlightText(article.title)}</h1>
      <span className="text-gray-600 italic">
        {formatDate(article.publishedAt)}
      </span>
      <p>
        {displayContent()}
        {article.content.length > maxContent && (
          <span
            onClick={() => setIsHidden(!isHidden)}
            className="cursor-pointer underline text-blue-500 font-semibold ml-2"
          >
            see {isHidden ? "more" : "less"}
          </span>
        )}
      </p>
    </div>
  );
};
