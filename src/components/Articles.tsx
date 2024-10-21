import { ArticleType } from "../types/article";
import { ArticleCard } from "./ArticleCard";
interface IArticles {
  articles: ArticleType[];
}
const NoResult = () => {
  return <div className="font-medium text-lg">No results found</div>;
};
export const Articles = ({ articles }: IArticles) => {
  return (
    <div className="mt-2">
      <span>
        <b>{articles.length} articles</b> were found
      </span>
      <div className="mt-4">
        {articles.length > 0 ? (
          articles.map((article, key) => (
            <div
              key={key}
              className="py-4 border-b-4 border-stone-200 last:border-b-0"
            >
              <ArticleCard {...article} />
            </div>
          ))
        ) : (
          <NoResult />
        )}
      </div>
    </div>
  );
};
