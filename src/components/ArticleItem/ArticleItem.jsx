import { Item, Picture, Date, Title, Text, More } from "./ArticleItem.styled";

export const ArticleItem = ({
  imageUrl,
  publishedAt,
  title,
  summary
}) => (
  <Item>
    <Picture
      src={imageUrl}
      alt={title}
    />
    <Date>{publishedAt}</Date>
    <Title>{title}</Title>
    <Text>{summary}</Text>
    <More
      href="/"
    >Read more </More>
  </Item>
);