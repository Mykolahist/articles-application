
import styles from "./ArticleItem.module.scss";

export const ArticleItem = ({
  webformatURL,
  tags,
  date,
  title,
  text,
  onImageClick,
}) => (
  <li className={styles.articleItem}>
    <img
      src={webformatURL}
      alt={tags}
      className={styles.articlePicture}
    />
    <span className={styles.articleDate}>{date}</span>
    <h2 className={styles.articleTitle}>{title}</h2>
    <p className={styles.articleText}>{text}</p>
    <a
      href="article.html"
      className={styles.more}>Read more </a>
  </li>
);