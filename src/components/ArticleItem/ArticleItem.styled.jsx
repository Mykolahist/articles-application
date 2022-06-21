import styled from "@emotion/styled";

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }

  border: ${props => `1px solid ${props.theme.colors.border}`};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  
  @media (min-width: 768px) {
    flex-basis: calc((100% - 4 * 12px) / 2);
    margin: 12px;
  }

  @media (min-width: 1280px) {
    flex-basis: calc((100% - 6 * 22px) / 3);
    margin: 22px;
  }
`;

export const Picture = styled.img`
  margin-bottom: 25px;
`;

export const DateWraper = styled.div`
  display: flex;
  align-items: center;
  
  margin: 0 25px 25px 25px;
`;

export const Date = styled.span`
  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  color: ${props => props.theme.colors.textColor};
  opacity: 0.6;
`;

export const Title = styled.h2`
  margin: 0 25px 20px 25px;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.21;

  color: ${props => props.theme.colors.textColor};
`;

export const Text = styled.p`
  margin: 0 25px 20px 25px;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  color: ${props => props.theme.colors.textColor};
`;

export const More = styled.a`
  display: flex;
  align-items: center;
  margin: 0 25px 25px 25px;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;

  color:
`;