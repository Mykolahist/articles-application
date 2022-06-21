import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 0 30px 0;

  @media (min-width: 768px) {
    margin: 0 0 45px 0;
  }
`;

export const Results = styled.p`
  margin: 0 0 5px 0;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: ${props => props.theme.colors.textColor};
`;

export const Line = styled.div`
  border-bottom: ${props => `2px solid ${props.theme.colors.border}`};
`;