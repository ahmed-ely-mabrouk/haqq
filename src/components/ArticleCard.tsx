import { ArticleType } from "../types/article";

export const ArticleCard = (article: ArticleType) => {
  function formatDate(date: Date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  return (
    <div className="px-6 bg-slate-400">
      <h1 className="text-3xl">{article.title}</h1>
      <span>{formatDate(article.publishedAt)}</span>
      <p>{article.content}</p>
    </div>
  );
};
