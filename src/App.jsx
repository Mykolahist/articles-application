import axios from "axios";
import { useState, useEffect } from "react";
import format from "date-fns/format";

import { ArticlesBoard } from "components/ArticlesBoard/ArticlesBoard";
import { Searchbar } from "components/Searchbar/Searchbar";
import { CountResults } from "components/CountResults/CountResults";
import { ArticleList } from "components/ArticleList/ArticleList";
import { ArticleItem } from "components/ArticleItem/ArticleItem";

import { ALL_ARTICLES } from "service/articles-api";

export const App = () => {
  const [articles, setArticles] = useState([]);

  console.log(articles);
  useEffect(() => {
    axios.get(ALL_ARTICLES).then(
      ({ data }) => setArticles(data)
    )
  }, []);
  
  return (
    <ArticlesBoard>
      <Searchbar />
      <CountResults />
      <ArticleList>
        {articles.map((a) => {
          const formatDating = format(Date.parse(a.publishedAt), "MMMM do, yyyy");
          const articleInfo = {
            imageUrl: a.imageUrl,
            title: a.title,
            publishedAt: formatDating,
            summary: a.summary
          };

          return (
            <ArticleItem key={a.title} {...articleInfo} />
          )
        })}
      </ArticleList>
    </ArticlesBoard>
  );
};