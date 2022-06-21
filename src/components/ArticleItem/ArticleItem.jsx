import { Item, Picture, DateWraper, Date, Title, Text, More } from "./ArticleItem.styled";

import { FiCalendar } from "react-icons/fi";
import { MdArrowForward } from "react-icons/md";
import { theme } from "constants/theme";

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
    <DateWraper>
      <FiCalendar
        style={{
          width: "20px",
          height: "16px",
          marginRight: "8px",
          color: `${theme.colors.textColor}`,
          opacity: 0.6
        }}               
      />
      <Date>      
        {publishedAt}
      </Date>
    </DateWraper>
    <Title>{title}</Title>
    <Text>{summary}</Text>
    <More      
      href="/"
    >
      <span style={{ marginRight: "6px", color: `${theme.colors.textColor}` }}>
        Read more
      </span>
      <MdArrowForward
        style={{
          width: "20px",
          height: "20px",
          color: `${theme.colors.textColor}` 
        }}
      />
    </More>
  </Item>
);