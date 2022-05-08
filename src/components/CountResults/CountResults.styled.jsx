import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 0 45px 0;
`;

export const Results = styled.p`
  margin: 0 0 5px 0;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
`;

export const Line = styled.div`
  border: ${props => `1px solid ${props.theme.colors.border}`};
`;