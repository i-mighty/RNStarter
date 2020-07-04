import styled from 'styled-components/native';
import { Text } from 'react-native';

const TitleText = styled(Text)<{ color?: string }>`
  font-size: 21px;
  color: ${({ theme, color }) => (color ? color : theme.vars.black)};
`;

const ItalicsText = styled(Text)<{ color?: string }>`
  font-style: italic;
  color: ${({ theme, color }) => (color ? color : theme.vars.black)};
`;

const PlainText = styled(Text)<{ color?: string }>`
  font-style: normal;
  color: ${({ theme, color }) => (color ? color : theme.vars.black)};
`;
export { TitleText, ItalicsText, PlainText };
