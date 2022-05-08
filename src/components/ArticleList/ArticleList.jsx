import { ArticleItem } from "components/ArticleItem/ArticleItem";

import { List } from "./ArticleList.styled";

export const ArticleList = ({ articles, onArticleClick }) => (
  <List>
    {articles.map(({ id, webformatURL, tags }) => (
      <ArticleItem
        key={String(id)}
        webformatURL={webformatURL}
        tags={tags}
        onArticleClick={onArticleClick}
      />
    ))}
  </List>
);