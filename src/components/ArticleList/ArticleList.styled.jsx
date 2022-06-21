import styled from "@emotion/styled";

export const List = styled.ul`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -12px;
  }

  @media (min-width: 1280px) {
    margin: -22px;
  }
`;