import styled from "@emotion/styled";

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 0 40px 0;
`;

export const Label = styled.label`
  margin: 0 0 10px 0;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
`;

export const Input = styled.input`
  padding: 13px 20px 13px 60px;

  max-width: 600px;
  height: 50px;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-size: 20px;

  background-color: ${props => props.theme.colors.white};
  border: ${props => `1px solid ${props.theme.colors.border}`};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  ::placeholder {
    font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;

    color: ${props => props.theme.colors.lightGray};
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 34px;
  left: 2px;
  padding: 0;

  width: 55px;
  height: 44px;

  background-color: ${props => props.theme.colors.white};
  border: ${props => `1px solid ${props.theme.colors.white}`};
  border-radius: 5px;

  cursor: pointer;
`;