import styled from "@emotion/styled";

export const Item = styled.li`
  max-width: 400px;
  flex-basis: calc((100% - 6 * 22px) / 3);
  margin: 22px;

  border: ${props => `1px solid ${props.theme.colors.border}`};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

export const Picture = styled.img`
  margin-bottom: 25px;
`;

export const Date = styled.span`
  display: flex;
  margin: 0 25px 25px 25px;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  opacity: 0.6;

  ::before {
    content: '';
    margin-right: 8px;
    width: 16px;
    height: 16px;

    opacity: 0.6;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../../pictures/icons/calendar.svg');
  }
`;

export const Title = styled.h2`
  margin: 0 25px 20px 25px;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 400;
  font-size: 24px;
  line-height: 1.21;
`;

export const Text = styled.p`
  margin: 0 25px 20px 25px;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const More = styled.a`
  display: flex;
  align-items: center;
  margin: 0 25px 25px 25px;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;

  ::after {
    content: '';
    margin-left: 6px;
    width: 12px;
    height: 10px;

    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../../pictures/icons/arrow_right.svg');
  }
`;