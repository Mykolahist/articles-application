import { Container, Results, Line } from "./CountResults.styled";

export const CountResults = ({filteredCount}) => {

  return (
    <Container>
      <Results>Results: {filteredCount}</Results>
      <Line></Line>
    </Container>
  );
};