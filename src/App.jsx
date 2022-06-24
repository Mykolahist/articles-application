import axios from "axios";
import format from "date-fns/format";
import { useState, useEffect } from "react";
import { ALL_ARTICLES } from "service/articles-api";

import { ArticlesBoard } from "components/ArticlesBoard/ArticlesBoard";
import { Searchbar } from "components/Searchbar/Searchbar";
import { CountResults } from "components/CountResults/CountResults";
import { ArticleList } from "components/ArticleList/ArticleList";
import { ArticleItem } from "components/ArticleItem/ArticleItem";

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState(articles);
  
  useEffect(() => {
    axios.get(ALL_ARTICLES).then(
      ({ data }) => setArticles(data)
    )
  }, []);

  const onSubmit = (query) => {
    let data = [...articles];

    if (query) {
      data = data.filter(a => a.title.toLowerCase().includes(query.toLowerCase()));
    };

    setFilteredArticles(data);
  };

  const filteredCount = filteredArticles.length;

  useEffect(() => {
    onSubmit();
    // eslint-disable-next-line
  }, []);

  return (
    <ArticlesBoard>
      <Searchbar onSubmit={onSubmit} />
      <CountResults filteredCount={filteredCount} />
      <ArticleList>
        {filteredArticles.map((a) => {
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
    </ArticlesBoard>
  );
};