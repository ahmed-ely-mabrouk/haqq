import { ArticleType } from "../types/article";
import { ArticleCard } from "./ArticleCard";
interface IArticles {
  articles: ArticleType[];
}
export const Articles = ({ articles }: IArticles) => {
  return (
    <div className="articles">
      {articles.length > 0 ? (
        articles.map((article, key) => (
          <div key={key} className="py-4 border-b-4 last:border-b-0">
            <ArticleCard {...article} />
          </div>
        ))
      ) : (
        <div>No results</div>
      )}
    </div>
  );
};
