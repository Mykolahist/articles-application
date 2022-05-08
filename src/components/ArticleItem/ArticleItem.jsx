import { Item, Picture, Date, Title, Text, More } from "./ArticleItem.styled";

export const ArticleItem = ({
  webformatURL,
  tags,
  date,
  title,
  text,
  onImageClick,
}) => (
  <Item>
    <Picture
      src={webformatURL}
      alt={tags}
    />
    <Date>{date}</Date>
    <Title>{title}</Title>
    <Text>{text}</Text>
    <More
      href="article.html"
    >Read more </More>
  </Item>
);