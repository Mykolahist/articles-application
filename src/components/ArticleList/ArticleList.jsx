import { List } from "./ArticleList.styled";

export const ArticleList = ({children}) => (
  <List>
    {children}
  </List>
);

// articles.map(({ id, webformatURL, tags }) => (
//       <ArticleItem
//         key={String(id)}
//         webformatURL={webformatURL}
//         tags={tags}
//         onArticleClick={onArticleClick}
//       />
//     ))