import axios from "axios";
import format from "date-fns/format";
import { useState, useEffect } from "react";
import { ALL_ARTICLES } from "service/articles-api";

import { Searchbar } from "components/Searchbar/Searchbar";
import { CountResults } from "components/CountResults/CountResults";
import { ArticleList } from "components/ArticleList/ArticleList";
import { ArticleItem } from "components/ArticleItem/ArticleItem";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(ALL_ARTICLES).then(
      ({ data }) => setArticles(data)
    )
  }, []);

  return (
    <>
      <Searchbar />
      <CountResults />
      <ArticleList>
        {articles.map((a) => {
          const formatDating = format(Date.parse(a.publishedAt), "MMMM do, yyyy");
          const articleInfo = {
            imageUrl: a.imageUrl,
            title: a.title,
            publishedAt: formatDating,
            summary: a.summary,
            url: a.url
          };

          return (
            <ArticleItem key={a.title} {...articleInfo} />
          )
        })}
      </ArticleList>
    </>
  );
};