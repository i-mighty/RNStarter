import styled from 'styled-components/native';
import { Card, CardItem } from 'native-base';

const StyledCard = styled(Card)<{ backgroundColor?: string }>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.vars.white};
`;
const StyledCardItem = styled(CardItem)`
  background-color: transparent;
  justify-content: center;
`;

export { StyledCard, StyledCardItem };
