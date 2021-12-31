import { ArticleItem } from "components/ArticleItem/ArticleItem";

import styles from "./ArticleList.module.scss";

export const ArticleList = ({ articles, onArticleClick }) => (
  <ul className={styles.articleList}>
    {articles.map(({ id, webformatURL, tags }) => (
      <ArticleItem
        key={String(id)}
        webformatURL={webformatURL}
        tags={tags}
        onArticleClick={onArticleClick}
      />
    ))}
  </ul>
);